import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Package, RefreshCcw, Truck } from 'lucide-react';
import { useAuth } from '../AuthContext';
import { AccountButton } from '../components/AccountButton';
import { FormAlert } from '../components/FormAlert';
import { navigateTo } from '../navigation';
import { useCustomerOrder } from '../hooks';
import type { CustomerOrderDetail } from '../types';

function getOrderIdFromPath() {
  const match = window.location.pathname.match(/^\/account\/orders\/([^/]+)\/?$/);
  if (!match) {
    return null;
  }

  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function getStatusChip(status?: string, tone: 'fulfillment' | 'financial' = 'fulfillment') {
  if (!status) {
    return {
      label: tone === 'financial' ? 'Payment pending' : 'Pending',
      bg: 'var(--account-nav-active-bg)',
      border: 'var(--account-input-border)',
      text: 'var(--account-subtext)'
    };
  }

  const normalizedStatus = status.toUpperCase();

  if (normalizedStatus === 'FULFILLED' || normalizedStatus === 'PAID') {
    return {
      label: status.replace(/_/g, ' ').toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase()),
      bg: 'var(--account-success-bg)',
      border: 'var(--account-success-border)',
      text: 'var(--account-success-text)'
    };
  }

  if (normalizedStatus === 'PARTIALLY_FULFILLED' || normalizedStatus === 'PARTIALLY_PAID') {
    return {
      label: status.replace(/_/g, ' ').toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase()),
      bg: 'var(--account-info-bg)',
      border: 'var(--account-info-border)',
      text: 'var(--account-info-text)'
    };
  }

  if (normalizedStatus === 'CANCELLED' || normalizedStatus === 'REFUNDED' || normalizedStatus === 'VOIDED') {
    return {
      label: status.replace(/_/g, ' ').toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase()),
      bg: 'var(--account-error-bg)',
      border: 'var(--account-error-border)',
      text: 'var(--account-error-text)'
    };
  }

  return {
    label: status.replace(/_/g, ' ').toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase()),
    bg: 'var(--account-warning-bg)',
    border: 'var(--account-warning-border)',
    text: 'var(--account-warning-text)'
  };
}

function AddressBlock({ title, address }: { title: string; address?: CustomerOrderDetail['shippingAddress'] }) {
  if (!address) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--account-card-bg)',
        border: '1px solid var(--account-card-border)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: 'var(--account-card-shadow)'
      }}
    >
      <h3
        style={{
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '600',
          color: 'var(--account-title)',
          fontFamily: 'Inter, system-ui, sans-serif',
          marginBottom: '10px'
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontSize: '14px',
          lineHeight: '22px',
          color: 'var(--account-subtext)',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
      >
        {address.name ? <div>{address.name}</div> : null}
        <div>{address.address1}</div>
        {address.address2 ? <div>{address.address2}</div> : null}
        <div>
          {address.city}
          {address.province ? `, ${address.province}` : ''}
          {address.zip ? ` ${address.zip}` : ''}
        </div>
        <div>{address.country}</div>
        {address.phone ? <div>{address.phone}</div> : null}
      </div>
    </div>
  );
}

export function OrderDetailPage() {
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const orderId = getOrderIdFromPath();
  const { order, isLoading, error, refresh } = useCustomerOrder(orderId);

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      navigateTo('/account/login');
    }
  }, [isAuthenticated, isAuthLoading]);

  if (isAuthLoading || (isLoading && !order && !error)) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--account-page-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 16px',
              border: '3px solid var(--account-icon-bg)',
              borderTopColor: 'var(--account-link)',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite'
            }}
          />
          <style>
            {`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  const fulfillmentStatus = getStatusChip(order?.fulfillmentStatus, 'fulfillment');
  const financialStatus = getStatusChip(order?.financialStatus, 'financial');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--account-page-bg)' }}>
      <div style={{ backgroundColor: 'var(--account-panel-bg)', borderBottom: '1px solid var(--account-panel-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 20px' }}>
          <button
            type="button"
            onClick={() => navigateTo('/account')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              padding: 0,
              marginBottom: '16px',
              color: 'var(--account-link)',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            Back to account
          </button>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div>
              <h1
                style={{
                  fontSize: '28px',
                  lineHeight: '36px',
                  fontWeight: '600',
                  color: 'var(--account-title)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  marginBottom: '6px'
                }}
              >
                {order?.name || 'Order details'}
              </h1>
              {order ? (
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '22px',
                    color: 'var(--account-subtext)',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                >
                  Placed on {formatDate(order.createdAt)}
                </p>
              ) : null}
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {order ? (
                <>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '6px 10px',
                      backgroundColor: fulfillmentStatus.bg,
                      border: `1px solid ${fulfillmentStatus.border}`,
                      borderRadius: '999px',
                      color: fulfillmentStatus.text,
                      fontSize: '13px',
                      lineHeight: '18px',
                      fontWeight: '600',
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    {fulfillmentStatus.label}
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '6px 10px',
                      backgroundColor: financialStatus.bg,
                      border: `1px solid ${financialStatus.border}`,
                      borderRadius: '999px',
                      color: financialStatus.text,
                      fontSize: '13px',
                      lineHeight: '18px',
                      fontWeight: '600',
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    {financialStatus.label}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 20px 48px' }}>
        {error ? (
          <div style={{ marginBottom: '20px' }}>
            <FormAlert type="error">{error}</FormAlert>
          </div>
        ) : null}

        {!order && !isLoading ? (
          <div
            style={{
              backgroundColor: 'var(--account-card-bg)',
              border: '1px solid var(--account-card-border)',
              borderRadius: '16px',
              boxShadow: 'var(--account-card-shadow)',
              padding: '32px',
              textAlign: 'center'
            }}
          >
            <Package size={32} style={{ color: 'var(--account-subtext)', marginBottom: '12px' }} />
            <h2
              style={{
                fontSize: '22px',
                lineHeight: '30px',
                fontWeight: '600',
                color: 'var(--account-title)',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '8px'
              }}
            >
              Order unavailable
            </h2>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                color: 'var(--account-subtext)',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '20px'
              }}
            >
              The requested order could not be found for this account.
            </p>
            <AccountButton variant="secondary" size="md" onClick={() => navigateTo('/account')}>
              Return to account
            </AccountButton>
          </div>
        ) : null}

        {order ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.75fr) minmax(280px, 1fr)', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <section
                style={{
                  backgroundColor: 'var(--account-card-bg)',
                  border: '1px solid var(--account-card-border)',
                  borderRadius: '16px',
                  boxShadow: 'var(--account-card-shadow)',
                  overflow: 'hidden'
                }}
              >
                <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--account-card-border)' }}>
                  <h2
                    style={{
                      fontSize: '20px',
                      lineHeight: '28px',
                      fontWeight: '600',
                      color: 'var(--account-title)',
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    Items
                  </h2>
                </div>
                <div style={{ padding: '8px 24px 24px' }}>
                  {order.lineItems.map((lineItem) => (
                    <div
                      key={lineItem.id}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: lineItem.imageUrl ? '72px minmax(0, 1fr)' : 'minmax(0, 1fr)',
                        gap: '16px',
                        padding: '16px 0',
                        borderBottom: '1px solid var(--account-card-border)'
                      }}
                    >
                      {lineItem.imageUrl ? (
                        <img
                          src={lineItem.imageUrl}
                          alt={lineItem.imageAlt || lineItem.title}
                          style={{
                            width: '72px',
                            height: '72px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            backgroundColor: 'var(--account-icon-bg)'
                          }}
                        />
                      ) : null}

                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'flex-start' }}>
                          <div>
                            <h3
                              style={{
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '600',
                                color: 'var(--account-title)',
                                fontFamily: 'Inter, system-ui, sans-serif',
                                marginBottom: '4px'
                              }}
                            >
                              {lineItem.title}
                            </h3>
                            <div
                              style={{
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: 'var(--account-subtext)',
                                fontFamily: 'Inter, system-ui, sans-serif'
                              }}
                            >
                              Qty {lineItem.quantity}
                              {lineItem.variantTitle ? ` • ${lineItem.variantTitle}` : ''}
                              {lineItem.sku ? ` • SKU ${lineItem.sku}` : ''}
                            </div>
                          </div>
                          <div
                            style={{
                              fontSize: '16px',
                              lineHeight: '24px',
                              fontWeight: '600',
                              color: 'var(--account-title)',
                              fontFamily: 'Inter, system-ui, sans-serif',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {lineItem.discountedTotalPrice || lineItem.originalTotalPrice}
                          </div>
                        </div>

                        {lineItem.selectedOptions.length > 0 ? (
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '8px',
                              marginTop: '10px'
                            }}
                          >
                            {lineItem.selectedOptions.map((option) => (
                              <span
                                key={`${lineItem.id}-${option.name}`}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  padding: '4px 8px',
                                  borderRadius: '999px',
                                  backgroundColor: 'var(--account-nav-active-bg)',
                                  color: 'var(--account-subtext)',
                                  fontSize: '12px',
                                  lineHeight: '18px',
                                  fontWeight: '500',
                                  fontFamily: 'Inter, system-ui, sans-serif'
                                }}
                              >
                                {option.name}: {option.value}
                              </span>
                            ))}
                          </div>
                        ) : null}

                        {(lineItem.originalTotalPrice && lineItem.originalTotalPrice !== lineItem.discountedTotalPrice) || lineItem.unitPrice ? (
                          <div
                            style={{
                              marginTop: '10px',
                              fontSize: '13px',
                              lineHeight: '18px',
                              color: 'var(--account-subtext)',
                              fontFamily: 'Inter, system-ui, sans-serif'
                            }}
                          >
                            {lineItem.unitPrice ? `Unit price ${lineItem.unitPrice}` : ''}
                            {lineItem.unitPrice && lineItem.originalTotalPrice && lineItem.originalTotalPrice !== lineItem.discountedTotalPrice ? ' • ' : ''}
                            {lineItem.originalTotalPrice && lineItem.originalTotalPrice !== lineItem.discountedTotalPrice
                              ? `Original total ${lineItem.originalTotalPrice}`
                              : ''}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {order.fulfillments.length > 0 ? (
                <section
                  style={{
                    backgroundColor: 'var(--account-card-bg)',
                    border: '1px solid var(--account-card-border)',
                    borderRadius: '16px',
                    boxShadow: 'var(--account-card-shadow)',
                    padding: '24px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                    <Truck size={18} style={{ color: 'var(--account-subtext)' }} />
                    <h2
                      style={{
                        fontSize: '20px',
                        lineHeight: '28px',
                        fontWeight: '600',
                        color: 'var(--account-title)',
                        fontFamily: 'Inter, system-ui, sans-serif'
                      }}
                    >
                      Fulfillment
                    </h2>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {order.fulfillments.map((fulfillment, index) => (
                      <div
                        key={`${fulfillment.trackingCompany || 'fulfillment'}-${index}`}
                        style={{
                          border: '1px solid var(--account-card-border)',
                          borderRadius: '12px',
                          padding: '16px'
                        }}
                      >
                        <div
                          style={{
                            fontSize: '15px',
                            lineHeight: '22px',
                            fontWeight: '600',
                            color: 'var(--account-title)',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            marginBottom: '10px'
                          }}
                        >
                          {fulfillment.trackingCompany || 'Shipment'}
                        </div>
                        {fulfillment.tracking.map((tracking, trackingIndex) => (
                          <div
                            key={`${tracking.number || 'tracking'}-${trackingIndex}`}
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              color: 'var(--account-subtext)',
                              fontFamily: 'Inter, system-ui, sans-serif',
                              marginBottom: '8px'
                            }}
                          >
                            {tracking.number ? <span>Tracking #{tracking.number}</span> : <span>Tracking available</span>}
                            {tracking.url ? (
                              <>
                                {' '}
                                <a
                                  href={tracking.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ color: 'var(--account-link)', fontWeight: 600 }}
                                >
                                  Open
                                </a>
                              </>
                            ) : null}
                          </div>
                        ))}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {fulfillment.items.map((item, itemIndex) => (
                            <div
                              key={`${item.title}-${itemIndex}`}
                              style={{
                                fontSize: '13px',
                                lineHeight: '18px',
                                color: 'var(--account-subtext)',
                                fontFamily: 'Inter, system-ui, sans-serif'
                              }}
                            >
                              {item.quantity} x {item.title}
                              {item.sku ? ` • ${item.sku}` : ''}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <section
                style={{
                  backgroundColor: 'var(--account-card-bg)',
                  border: '1px solid var(--account-card-border)',
                  borderRadius: '16px',
                  boxShadow: 'var(--account-card-shadow)',
                  padding: '24px'
                }}
              >
                <h2
                  style={{
                    fontSize: '20px',
                    lineHeight: '28px',
                    fontWeight: '600',
                    color: 'var(--account-title)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    marginBottom: '18px'
                  }}
                >
                  Summary
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ color: 'var(--account-subtext)', fontSize: '14px', lineHeight: '20px', fontFamily: 'Inter, system-ui, sans-serif' }}>Subtotal</span>
                    <span style={{ color: 'var(--account-title)', fontSize: '14px', lineHeight: '20px', fontWeight: '600', fontFamily: 'Inter, system-ui, sans-serif' }}>{order.subtotalPrice}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ color: 'var(--account-subtext)', fontSize: '14px', lineHeight: '20px', fontFamily: 'Inter, system-ui, sans-serif' }}>Shipping</span>
                    <span style={{ color: 'var(--account-title)', fontSize: '14px', lineHeight: '20px', fontWeight: '600', fontFamily: 'Inter, system-ui, sans-serif' }}>{order.shippingPrice}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ color: 'var(--account-subtext)', fontSize: '14px', lineHeight: '20px', fontFamily: 'Inter, system-ui, sans-serif' }}>Tax</span>
                    <span style={{ color: 'var(--account-title)', fontSize: '14px', lineHeight: '20px', fontWeight: '600', fontFamily: 'Inter, system-ui, sans-serif' }}>{order.taxPrice}</span>
                  </div>
                  {order.refundedPrice ? (
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                      <span style={{ color: 'var(--account-subtext)', fontSize: '14px', lineHeight: '20px', fontFamily: 'Inter, system-ui, sans-serif' }}>Refunded</span>
                      <span style={{ color: 'var(--account-title)', fontSize: '14px', lineHeight: '20px', fontWeight: '600', fontFamily: 'Inter, system-ui, sans-serif' }}>{order.refundedPrice}</span>
                    </div>
                  ) : null}
                  <div style={{ height: '1px', backgroundColor: 'var(--account-card-border)', margin: '4px 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ color: 'var(--account-title)', fontSize: '16px', lineHeight: '24px', fontWeight: '600', fontFamily: 'Inter, system-ui, sans-serif' }}>Total</span>
                    <span style={{ color: 'var(--account-title)', fontSize: '18px', lineHeight: '28px', fontWeight: '600', fontFamily: 'Inter, system-ui, sans-serif' }}>{order.totalPrice}</span>
                  </div>
                </div>

                {order.discounts.length > 0 ? (
                  <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--account-card-border)' }}>
                    <div
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: '600',
                        color: 'var(--account-title)',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        marginBottom: '10px'
                      }}
                    >
                      Discounts
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {order.discounts.map((discount, index) => (
                        <div
                          key={`${discount.value}-${index}`}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '12px',
                            fontSize: '13px',
                            lineHeight: '18px',
                            color: 'var(--account-subtext)',
                            fontFamily: 'Inter, system-ui, sans-serif'
                          }}
                        >
                          <span>{discount.targetSelection || discount.allocationMethod || 'Discount'}</span>
                          <span style={{ fontWeight: 600, color: 'var(--account-title)' }}>{discount.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>

              <div style={{ display: 'grid', gap: '16px' }}>
                <AddressBlock title="Shipping address" address={order.shippingAddress} />
                <AddressBlock title="Billing address" address={order.billingAddress} />
              </div>

              <section
                style={{
                  backgroundColor: 'var(--account-card-bg)',
                  border: '1px solid var(--account-card-border)',
                  borderRadius: '16px',
                  boxShadow: 'var(--account-card-shadow)',
                  padding: '24px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <AccountButton variant="secondary" size="md" onClick={() => void refresh()} isLoading={isLoading}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <RefreshCcw size={16} />
                      Refresh order
                    </span>
                  </AccountButton>

                  {order.statusUrl ? (
                    <a href={order.statusUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                      <AccountButton variant="primary" size="md" style={{ width: '100%' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                          <ExternalLink size={16} />
                          View order status
                        </span>
                      </AccountButton>
                    </a>
                  ) : null}
                </div>
              </section>
            </aside>
          </div>
        ) : null}
      </div>
    </div>
  );
}
