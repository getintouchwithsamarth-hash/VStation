import { getProducts, resolveProductThumbnail, type Product } from '../../../lib/shopify-storefront';
import {
  type PublicAdminProductMetadata
} from '../../../lib/shopify-admin';
import { toCategoryFilterId } from '../../products/utils/categoryFilters';
import {
  EMPTY_PRODUCT_DETAIL_DATA,
  type ProductDetailCard,
  type ProductDetailFaq,
  type ProductDetailReview,
  type ReviewBreakdown
} from './productDetailTypes';

const SHAREABLE_STORE_ORIGIN = (
  import.meta.env.VITE_STOREFRONT_PUBLIC_URL || 'https://thevibestation.com'
).replace(/\/+$/, '');

const CROSS_SELL_KEYWORDS = ['capo', 'tuner', 'string', 'pick', 'holder', 'gig bag', 'bundle', 'essentials'];

export const getDefaultVariantId = (product: Product): string | null => {
  const availableVariant = product.variants?.edges.find((edge) => {
    const variant = edge.node;
    return (
      variant.availableForSale &&
      (typeof variant.quantityAvailable !== 'number' || variant.quantityAvailable > 0)
    );
  })?.node;
  return availableVariant?.id || product.variants?.edges[0]?.node.id || null;
};

export const getPrimaryVariant = (product: Product) => product.variants?.edges[0]?.node ?? null;

export const formatPrice = (amount?: string, currencyCode?: string): string => {
  if (!amount || !currencyCode) {
    return '₹—';
  }
  const numericAmount = Number.parseFloat(amount);
  if (!Number.isFinite(numericAmount)) {
    return `${currencyCode} ${amount}`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0
  }).format(numericAmount);
};

export const stripHtml = (value?: string): string => {
  if (!value) {
    return '';
  }
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
};

export const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const normalizeShopifyText = (value?: string): string => {
  if (!value) {
    return '';
  }

  return value
    .replace(/\r\n?/g, '\n')
    .replace(/\\r\\n|\\r/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};

const toReadableLabel = (value: string): string =>
  value
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const isTaxonomyReferenceField = (key: string): boolean => /taxonomy\s*reference/i.test(key);

const getLeafCategoryLabel = (value: string): string =>
  value
    .split('>')
    .map((segment) => segment.trim())
    .filter(Boolean)
    .at(-1) || value.trim();

const formatReferenceFieldValue = (key: string, value: string): string => {
  const normalizedValue = normalizeShopifyText(value)
    .replace(/\s*\n+\s*/g, ' ')
    .replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi, '')
    .replace(/\s*,\s*,+/g, ', ')
    .replace(/\(\s*,/g, '(')
    .replace(/,\s*\)/g, ')')
    .replace(/\s{2,}/g, ' ')
    .replace(/^,\s*|\s*,\s*$/g, '')
    .trim();
  if (!normalizedValue) {
    return '';
  }

  if (/^label$/i.test(key)) {
    return normalizedValue;
  }

  if (/^color$/i.test(key)) {
    return `(${normalizedValue})`;
  }

  return normalizedValue;
};

const sanitizeRenderedSpecValue = (value: string): string =>
  value
    .replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi, '')
    .replace(/\s*\|\s*/g, ' | ')
    .replace(/\s*,\s*\|/g, ' |')
    .replace(/\|\s*,\s*/g, '| ')
    .replace(/\s*,\s*,+/g, ', ')
    .replace(/\(\s*,/g, '(')
    .replace(/,\s*\)/g, ')')
    .replace(/\s{2,}/g, ' ')
    .replace(/^,\s*|\s*,\s*$/g, '')
    .trim();

const formatMetaobjectReference = (
  reference: NonNullable<PublicAdminProductMetadata['shopifyMetafields'][number]['reference']>
) => {
  const meaningfulFields = reference.fields.filter(
    (field) => field.value && field.value.trim().length > 0 && !isTaxonomyReferenceField(field.key)
  );

  if (meaningfulFields.length === 0) {
    return reference.displayName?.trim() || '';
  }

  const labelField = meaningfulFields.find((field) => /^label$/i.test(field.key));
  const colorField = meaningfulFields.find((field) => /^color$/i.test(field.key));
  const otherFields = meaningfulFields.filter((field) => !/^label$/i.test(field.key) && !/^color$/i.test(field.key));

  if (labelField) {
    const parts = [
      formatReferenceFieldValue(labelField.key, labelField.value ?? ''),
      ...(colorField ? [formatReferenceFieldValue(colorField.key, colorField.value ?? '')] : [])
    ].filter(Boolean);

    if (otherFields.length === 0 && parts.length > 0) {
      return parts.join(' ');
    }

    const extras = otherFields
      .map((field) => formatReferenceFieldValue(field.key, field.value ?? ''))
      .filter(Boolean);

    return [...parts, ...extras].join(', ');
  }

  return meaningfulFields
    .map((field) => formatReferenceFieldValue(field.key, field.value ?? ''))
    .filter(Boolean)
    .join(', ');
};

const splitNormalizedLines = (value?: string): string[] =>
  normalizeShopifyText(value)
    .replace(/<br\s*\/?>/gi, '\n')
    .split('\n')
    .map((line) => stripHtml(line).trim())
    .filter(Boolean);

const parseSpecificationRows = (value?: string): Array<{ label: string; value: string }> =>
  splitNormalizedLines(value)
    .map((line) => {
      const match = line.match(/^([^:]+):\s*(.+)$/);
      if (!match) {
        return null;
      }

      return {
        label: toReadableLabel(match[1]),
        value: normalizeShopifyText(match[2]).replace(/\s*\n+\s*/g, ' ').trim()
      };
    })
    .filter((item): item is { label: string; value: string } => Boolean(item) && item.value.length > 0);

const plainTextToHtml = (value?: string): string => {
  const normalized = normalizeShopifyText(value);
  if (!normalized) {
    return '';
  }

  const blocks = normalized
    .replace(/<br\s*\/?>/gi, '\n')
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      const lines = block
        .split('\n')
        .map((line) => stripHtml(line).trim())
        .filter(Boolean);

      if (lines.length === 0) {
        return '';
      }

      if (lines.length > 1 && lines[0].endsWith(':')) {
        const heading = `<p><strong>${escapeHtml(lines[0])}</strong></p>`;
        const items = lines
          .slice(1)
          .map((line) => `<li>${escapeHtml(line)}</li>`)
          .join('');
        return items ? `${heading}<ul>${items}</ul>` : heading;
      }

      const htmlParts: string[] = [];
      let paragraphLines: string[] = [];

      const flushParagraph = () => {
        if (paragraphLines.length === 0) {
          return;
        }

        htmlParts.push(`<p>${escapeHtml(paragraphLines.join(' '))}</p>`);
        paragraphLines = [];
      };

      lines.forEach((line) => {
        const match = line.match(/^([^:]{1,60}):\s*(.+)$/);
        if (match) {
          flushParagraph();
          htmlParts.push(`<p><strong>${escapeHtml(match[1].trim())}:</strong> ${escapeHtml(match[2].trim())}</p>`);
          return;
        }

        paragraphLines.push(line);
      });

      flushParagraph();

      return htmlParts.join('');
    })
    .join('');
};

const looksLikeListMetafield = (value: string): boolean => {
  const trimmed = value.trim();
  return trimmed.startsWith('[') || trimmed.includes('•') || trimmed.includes('|');
};

const renderRichTextNode = (node: Record<string, unknown>): string => {
  const type = typeof node.type === 'string' ? node.type : '';
  const value = typeof node.value === 'string' ? escapeHtml(node.value) : '';
  const children = Array.isArray(node.children)
    ? node.children
        .map((child) => (child && typeof child === 'object' ? renderRichTextNode(child as Record<string, unknown>) : ''))
        .join('')
    : '';

  switch (type) {
    case 'root':
      return children;
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'heading':
      return `<h3>${children}</h3>`;
    case 'text':
      return value;
    case 'text_bold':
      return `<strong>${children || value}</strong>`;
    case 'text_italic':
      return `<em>${children || value}</em>`;
    case 'list':
      return `<ul>${children}</ul>`;
    case 'list-item':
      return `<li>${children}</li>`;
    case 'link':
      return typeof node.url === 'string' ? `<a href="${escapeHtml(node.url)}">${children}</a>` : children;
    default:
      return children || value;
  }
};

export const parseRichTextMetafieldToHtml = (value?: string): string => {
  if (!value) {
    return '';
  }

  const normalized = normalizeShopifyText(value);

  if (looksLikeListMetafield(normalized)) {
    const arrayItems = parseArrayMetafield(normalized);
    if (arrayItems.length > 0) {
      return `<ul>${arrayItems.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    }
  }

  if (normalized.includes('<')) {
    return normalized;
  }

  try {
    const parsed = JSON.parse(normalized) as Record<string, unknown>;
    if (parsed && typeof parsed === 'object') {
      return renderRichTextNode(parsed);
    }
  } catch {
    return plainTextToHtml(normalized);
  }

  return plainTextToHtml(normalized);
};

export const parseArrayMetafield = (value?: string): string[] => {
  const normalized = normalizeShopifyText(value);
  if (!normalized) {
    return [];
  }

  const splitMetafieldItems = (input: string): string[] =>
    input
      .replace(/<br\s*\/?>/gi, '\n')
      .split(/\n|,|\||•/)
      .map((item) => stripHtml(item).trim())
      .filter(Boolean);

  try {
    const parsed = JSON.parse(normalized) as unknown;
    if (Array.isArray(parsed)) {
      return parsed
        .flatMap((item) => (typeof item === 'string' ? splitMetafieldItems(item) : []))
        .filter(Boolean);
    }
    if (typeof parsed === 'string') {
      return splitMetafieldItems(parsed);
    }
  } catch {
    return splitMetafieldItems(normalized);
  }
  return [];
};

const parseObjectMetafield = (value?: string): Array<{ label: string; value: string }> => {
  const normalized = normalizeShopifyText(value);
  if (!normalized) {
    return [];
  }

  try {
    const parsed = JSON.parse(normalized) as Record<string, unknown>;
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      const rows = Object.entries(parsed)
        .flatMap(([label, itemValue]) => {
          const itemRows = parseSpecificationRows(`${toReadableLabel(label)}: ${String(itemValue)}`);
          return itemRows.length > 0
            ? itemRows
            : [{ label: toReadableLabel(label), value: normalizeShopifyText(String(itemValue)).replace(/\s*\n+\s*/g, ' ').trim() }];
        })
        .filter((item) => item.value.length > 0);

      if (rows.length > 0) {
        return rows;
      }
    }
  } catch {
    return parseSpecificationRows(normalized);
  }

  return parseSpecificationRows(normalized);
};

export const parseFaqMetafield = (value?: string): ProductDetailFaq[] => {
  if (!value) {
    return [];
  }
  try {
    const parsed = JSON.parse(value) as unknown;
    if (Array.isArray(parsed)) {
      return parsed
        .map((item) => {
          if (!item || typeof item !== 'object') {
            return null;
          }
          const entry = item as Record<string, unknown>;
          const question = typeof entry.question === 'string' ? entry.question.trim() : '';
          const answer = typeof entry.answer === 'string' ? entry.answer.trim() : '';
          return question && answer ? { question, answer } : null;
        })
        .filter((item): item is ProductDetailFaq => Boolean(item));
    }
  } catch {
    const parts = value
      .replace(/<br\s*\/?>/gi, '\n')
      .split(/\n{2,}/)
      .map((part) => stripHtml(part))
      .filter(Boolean);

    return parts
      .map((part) => {
        const [question, ...rest] = part.split('\n');
        const answer = rest.join(' ').trim();
        if (!question || !answer) {
          return null;
        }
        return { question: question.replace(/^Q[:\-]?\s*/i, ''), answer: answer.replace(/^A[:\-]?\s*/i, '') };
      })
      .filter((item): item is ProductDetailFaq => Boolean(item));
  }

  return [];
};

const normalizeBooleanLabel = (value?: string, truthyLabel = 'Yes', falsyLabel = 'No'): string => {
  if (!value) {
    return '';
  }
  const normalized = value.trim().toLowerCase();
  if (['true', 'yes', 'available', '1'].includes(normalized)) {
    return truthyLabel;
  }
  if (['false', 'no', 'not available', '0'].includes(normalized)) {
    return falsyLabel;
  }
  return value.trim();
};

export const getHandleFromUrl = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const match = window.location.pathname.match(/\/products\/([^/]+)/);
  return match?.[1] ?? null;
};

export const getShareUrl = (product: Product): string => `${SHAREABLE_STORE_ORIGIN}/products/${product.handle}`;

export const getStockLabel = (product: Product): string => {
  if (product.availableForSale === false) {
    return 'Out of stock';
  }

  if (typeof product.totalInventory === 'number') {
    return product.totalInventory > 0 ? `In stock (${product.totalInventory} available)` : 'Out of stock';
  }

  const variant = getPrimaryVariant(product);
  if (variant && typeof variant.quantityAvailable === 'number') {
    return variant.quantityAvailable > 0 ? `In stock (${variant.quantityAvailable} available)` : 'Out of stock';
  }

  const variantAvailability = product.variants?.edges.some((edge) => {
    const currentVariant = edge.node;
    if (currentVariant.availableForSale === false) {
      return false;
    }
    if (typeof currentVariant.quantityAvailable === 'number') {
      return currentVariant.quantityAvailable > 0;
    }
    return currentVariant.availableForSale === true;
  });

  return variantAvailability ? 'In stock' : 'Out of stock';
};

export const mapProductCards = (product: Product): ProductDetailCard[] => {
  const features = parseArrayMetafield(product.whyDifferent?.value);
  return features.slice(0, 3).map((feature, index) => ({
    id: `${product.handle}-feature-${index}`,
    badge: `0${index + 1}`,
    title: feature,
    description: '',
    footer: ''
  }));
};

export const getCrossSellTitle = (product: Product): string => {
  const lower = `${product.title} ${product.tags.join(' ')}`.toLowerCase();
  return CROSS_SELL_KEYWORDS.some((keyword) => lower.includes(keyword)) ? 'Pair it with these' : 'Complete your setup';
};

export const parseReviewData = (product: Product) => {
  const fallback = {
    averageValue: '—',
    totalReviewsLabel: 'No reviews yet',
    breakdown: [] as ReviewBreakdown[],
    tags: [] as string[],
    items: [] as ProductDetailReview[]
  };

  const raw = product.reviewSummary?.value;
  if (!raw) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const average = typeof parsed.average === 'number' ? parsed.average.toFixed(1) : '—';
    const count = typeof parsed.count === 'number' ? parsed.count : 0;
    const breakdownSource = Array.isArray(parsed.breakdown) ? parsed.breakdown : [];
    const itemsSource = Array.isArray(parsed.items) ? parsed.items : [];
    const tagsSource = Array.isArray(parsed.tags) ? parsed.tags : [];

    return {
      averageValue: average,
      totalReviewsLabel: `${count} review${count === 1 ? '' : 's'}`,
      breakdown: breakdownSource
        .map((entry) => {
          if (!entry || typeof entry !== 'object') {
            return null;
          }
          const record = entry as Record<string, unknown>;
          const stars = typeof record.stars === 'number' ? record.stars : 0;
          const currentCount = typeof record.count === 'number' ? record.count : 0;
          return stars > 0 ? { stars, count: currentCount, label: `${stars} star` } : null;
        })
        .filter((entry): entry is ReviewBreakdown => Boolean(entry))
        .sort((a, b) => b.stars - a.stars),
      tags: tagsSource.filter((tag): tag is string => typeof tag === 'string'),
      items: itemsSource
        .map((entry, index) => {
          if (!entry || typeof entry !== 'object') {
            return null;
          }
          const record = entry as Record<string, unknown>;
          return {
            id: typeof record.id === 'string' ? record.id : `review-${index}`,
            name: typeof record.name === 'string' ? record.name : 'Verified buyer',
            role: typeof record.role === 'string' ? record.role : 'Customer',
            quote: typeof record.quote === 'string' ? record.quote : '',
            useCase: typeof record.useCase === 'string' ? record.useCase : 'General use',
            rating: typeof record.rating === 'number' ? record.rating : 5,
            tags: Array.isArray(record.tags) ? record.tags.filter((tag): tag is string => typeof tag === 'string') : [],
            verified: record.verified !== false
          };
        })
        .filter((entry): entry is ProductDetailReview => Boolean(entry) && entry.quote.length > 0)
    };
  } catch {
    return fallback;
  }
};

export const buildReassurancePoints = (product: Product): string[] => {
  const points = [
    product.packCount?.value,
    product.bestFor?.value,
    product.dispatchTime?.value,
    product.deliveryWindow?.value,
    product.returnsPolicy?.value,
    normalizeBooleanLabel(product.codAvailable?.value, 'COD available', 'COD unavailable'),
    normalizeBooleanLabel(product.secureCheckout?.value, 'Secure checkout', '')
  ]
    .map((item) => item?.trim())
    .filter((item): item is string => Boolean(item));

  return Array.from(new Set(points)).slice(0, 6);
};

export const buildProductDetails = (product: Product): Array<{ label: string; value: string }> => {
  const primaryVariant = getPrimaryVariant(product);
  return [
    { label: 'SKU', value: primaryVariant?.sku || 'Available on request' },
    { label: 'Brand', value: product.vendor || 'Vibe Station' },
    { label: 'Country of origin', value: product.countryOfOrigin?.value || '' },
    { label: 'GST invoice', value: normalizeBooleanLabel(product.gstInvoice?.value, 'Available', 'Not specified') || 'Not specified' },
    { label: 'Care / storage', value: stripHtml(product.careInstructions?.value) },
    { label: 'Shareable short URL', value: getShareUrl(product) }
  ].filter((detail) => detail.value.trim().length > 0);
};

const parseCategoryMetafield = (value?: string): string[] => {
  const normalized = value?.trim();
  if (!normalized) {
    return [];
  }

  try {
    const parsed = JSON.parse(normalized) as unknown;
    if (Array.isArray(parsed)) {
      return parsed
        .map((entry) => (typeof entry === 'string' ? entry.trim() : ''))
        .filter((entry): entry is string => entry.length > 0);
    }
  } catch {
    // Fall back to line/comma-delimited strings when the metafield isn't stored as JSON.
  }

  return normalized
    .split(/[\n,]+/)
    .map((entry) => entry.trim())
    .filter(Boolean);
};

const getProductCategoryLabels = (product: Product): string[] =>
  Array.from(
    new Set([
      ...parseCategoryMetafield(product.categories?.value),
      ...product.tags.map((tag) => tag.trim()).filter(Boolean)
    ])
  );

const getProductCategoryIds = (labels: string[]): string[] =>
  labels.map((label) => toCategoryFilterId(label)).filter(Boolean);

export const getRelatedProducts = async (product: Product): Promise<Product[]> => {
  const categoryLabels = getProductCategoryLabels(product);
  const categoryIds = new Set(getProductCategoryIds(categoryLabels));
  const categoryLabelSet = new Set(categoryLabels.map((label) => label.toLowerCase()));

  if (categoryIds.size === 0 && categoryLabelSet.size === 0) {
    return [];
  }

  const catalog = await getProducts({ first: 50 });

  return catalog.edges
    .map((edge) => edge.node)
    .filter((candidate) => candidate.id !== product.id)
    .map((candidate) => {
      const candidateLabels = getProductCategoryLabels(candidate);
      const candidateIds = getProductCategoryIds(candidateLabels);
      const labelMatches = candidateLabels.filter((label) => categoryLabelSet.has(label.toLowerCase())).length;
      const idMatches = candidateIds.filter((id) => categoryIds.has(id)).length;

      return {
        candidate,
        score: labelMatches + idMatches
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 20)
    .map((entry) => entry.candidate);
};

const buildShopifyMetafieldSpecifications = (
  metafields?: PublicAdminProductMetadata['shopifyMetafields']
): Array<{ label: string; value: string }> =>
  (metafields ?? []).flatMap((metafield) => {
    const label = toReadableLabel(metafield.key);
    const singularReference = metafield.reference ? [metafield.reference] : [];
    const pluralReferences = Array.isArray(metafield.references) ? metafield.references : [];
    const referenceValues = [...singularReference, ...pluralReferences]
      .map((reference) => formatMetaobjectReference(reference))
      .filter(Boolean);
    const fallbackValue = sanitizeRenderedSpecValue(
      normalizeShopifyText(metafield.value).replace(/\s*\n+\s*/g, ' ').trim()
    );
    const value = sanitizeRenderedSpecValue(referenceValues.length > 0 ? referenceValues.join(' | ') : fallbackValue);

    return value.length > 0 ? [{ label, value }] : [];
  });

export const buildSpecifications = (
  product: Product,
  adminMetadata?: PublicAdminProductMetadata | null
): Array<{ label: string; value: string }> => {
  const specificationRows = parseObjectMetafield(product.specifications?.value);
  const categories = parseCategoryMetafield(product.categories?.value);
  const adminCategory = adminMetadata?.category?.fullName || adminMetadata?.category?.name || '';
  const combinedCategories = Array.from(
    new Set(
      [...categories, ...(adminCategory ? [adminCategory] : [])]
        .map((category) => getLeafCategoryLabel(category))
        .filter(Boolean)
    )
  );
  const categoryRows = combinedCategories.length > 0 ? [{ label: 'Category', value: combinedCategories.join(', ') }] : [];
  const shopifyRows = buildShopifyMetafieldSpecifications(adminMetadata?.shopifyMetafields);

  return [...categoryRows, ...shopifyRows, ...specificationRows].filter((item, index, rows) => {
    const key = `${item.label.toLowerCase()}::${item.value.toLowerCase()}`;
    return rows.findIndex((row) => `${row.label.toLowerCase()}::${row.value.toLowerCase()}` === key) === index;
  });
};

export const mapRelatedProductItems = (product: Product, relatedProducts: Product[]) =>
  relatedProducts
    .filter((item) => item.id !== product.id && item.handle !== product.handle)
    .slice(0, 6)
    .map((item) => {
      const thumbnail = resolveProductThumbnail(item);
      return {
        id: item.handle,
        variantId: getDefaultVariantId(item),
        badge: item.badge?.value || item.tags[0] || 'Curated',
        name: item.title,
        descriptor: item.shortDescription?.value || item.description || 'Curated recommendation',
        featureLine: item.featureLine?.value || item.tags.slice(0, 3).join(' · ') || 'Pairs well with this setup',
        price: formatPrice(item.priceRange.minVariantPrice.amount, item.priceRange.minVariantPrice.currencyCode),
        imageUrl: thumbnail?.url,
        imageAlt: thumbnail?.altText || item.title
      };
    });

export const buildDefaultReviews = () => EMPTY_PRODUCT_DETAIL_DATA.reviews;
