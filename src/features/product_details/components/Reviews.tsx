import { useEffect, useState } from "react";
import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { ButtonInstance } from "../../../components/ui/Button";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

const FALLBACK_REVIEW_BREAKDOWN = [
  { stars: 5, count: 28, label: "5 star" },
  { stars: 4, count: 9, label: "4 star" },
  { stars: 3, count: 3, label: "3 star" },
  { stars: 2, count: 1, label: "2 star" },
  { stars: 1, count: 1, label: "1 star" },
];

const FALLBACK_REVIEW_TAGS = [
  "Clear sound",
  "Easy setup",
  "Worth the price",
  "Reliable build",
];

const FALLBACK_REVIEW_ITEMS = [
  {
    id: "fallback-review-1",
    name: "Arjun S.",
    role: "Weekend guitarist",
    quote:
      "The finish feels premium and the setup was straightforward. It started feeling like part of my regular rig on day one.",
    useCase: "Home practice sessions and quick recording demos.",
    rating: 5,
    tags: ["Clear sound", "Easy setup"],
    verified: true,
  },
  {
    id: "fallback-review-2",
    name: "Neha P.",
    role: "Music teacher",
    quote:
      "Good balance between quality and price. I needed something dependable for repeated daily use and this has held up well.",
    useCase: "Student lessons and in-studio backup setup.",
    rating: 4,
    tags: ["Reliable build", "Worth the price"],
    verified: true,
  },
  {
    id: "fallback-review-3",
    name: "Rahul K.",
    role: "Gigging musician",
    quote:
      "It solved the exact friction I had with my previous setup. The overall feel is more consistent and easier to trust on stage.",
    useCase: "Live sets, rehearsals, and weekly venue rotations.",
    rating: 5,
    tags: ["Reliable build"],
    verified: true,
  },
];

const INITIAL_VISIBLE_REVIEWS = 3;
const LOAD_MORE_REVIEWS_COUNT = 3;

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          fill={star <= rating ? "var(--primary)" : "none"}
          stroke={star <= rating ? "var(--primary)" : "var(--border)"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const { reviews } = useProductDetailMockData();
  const [filter, setFilter] = useState<"all" | 5 | 4 | 3 | 2 | 1>("all");
  const [sortBy, setSortBy] = useState<"recent" | "helpful">("recent");
  const [visibleReviewCount, setVisibleReviewCount] = useState(
    INITIAL_VISIBLE_REVIEWS,
  );

  const reviewBreakdown =
    reviews.breakdown.length > 0
      ? reviews.breakdown
      : FALLBACK_REVIEW_BREAKDOWN;
  const reviewItems =
    reviews.items.length > 0 ? reviews.items : FALLBACK_REVIEW_ITEMS;
  const reviewTags =
    reviews.tags.length > 0 ? reviews.tags : FALLBACK_REVIEW_TAGS;
  const totalReviews = reviewBreakdown.reduce(
    (acc, item) => acc + item.count,
    0,
  );
  const weightedRatingTotal = reviewBreakdown.reduce(
    (acc, item) => acc + item.stars * item.count,
    0,
  );
  const averageRating =
    totalReviews > 0 ? (weightedRatingTotal / totalReviews).toFixed(1) : "—";
  const averageLabel =
    reviews.averageValue !== "—" ? reviews.averageValue : averageRating;
  const hasFallbackReviews =
    reviews.items.length === 0 && reviews.breakdown.length === 0;
  const filteredReviews =
    filter === "all"
      ? reviewItems
      : reviewItems.filter((review) => review.rating === filter);
  const sortedReviews =
    sortBy === "helpful" ? [...filteredReviews].reverse() : filteredReviews;
  const visibleReviews = sortedReviews.slice(0, visibleReviewCount);
  const hasMoreReviews = sortedReviews.length > visibleReviewCount;

  useEffect(() => {
    setVisibleReviewCount(INITIAL_VISIBLE_REVIEWS);
  }, [filter, sortBy, reviews.items]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          {reviews.title}
        </h3>
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            color: "var(--muted-foreground)",
          }}
        >
          {hasFallbackReviews
            ? "Sample customer feedback shown until product-specific reviews are available."
            : reviews.supporting}
        </div>
      </div>

      {/* Rating Summary Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: "32px",
          alignItems: "start",
        }}
      >
        {/* Left: Overall Rating Card */}
        <CardInstance variant="elevated" padding="lg">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "56px",
                  lineHeight: "1",
                  fontWeight: "800",
                  color: "var(--foreground)",
                  letterSpacing: "-0.02em",
                }}
              >
                {averageLabel}
              </div>
              <StarRating rating={Math.round(Number(averageLabel) || 0)} size={24} />
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "500",
                  color: "var(--muted-foreground)",
                }}
              >
                Based on {totalReviews.toLocaleString()} reviews
              </div>
            </div>

            <div
              style={{
                width: "100%",
                paddingTop: "12px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <ButtonInstance
                variant="primary"
                size="md"
                label={reviews.writeReviewLabel}
                onClick={() => console.log("Write review")}
              />
            </div>
          </div>
        </CardInstance>

        {/* Right: Rating Breakdown */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
              color: "var(--foreground)",
              marginBottom: "4px",
            }}
          >
            Rating Breakdown
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {reviewBreakdown.map((entry) => {
              const percentage = Math.round((entry.count / totalReviews) * 100);

              return (
                <button
                  key={entry.stars}
                  onClick={() =>
                    setFilter(
                      filter === entry.stars
                        ? "all"
                        : (entry.stars as 5 | 4 | 3 | 2 | 1),
                    )
                  }
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr 60px 48px",
                    gap: "12px",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    backgroundColor:
                      filter === entry.stars
                        ? "color-mix(in srgb, var(--primary) 5%, transparent)"
                        : "transparent",
                    transition: "background-color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (filter !== entry.stars) {
                      e.currentTarget.style.backgroundColor = "var(--muted)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (filter !== entry.stars) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <StarRating rating={entry.stars} size={14} />

                  <div
                    style={{
                      height: "10px",
                      borderRadius: "999px",
                      backgroundColor: "var(--muted)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: `${percentage}%`,
                        height: "100%",
                        backgroundColor: "var(--primary)",
                        borderRadius: "999px",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: "18px",
                      fontWeight: "500",
                      color: "var(--muted-foreground)",
                      textAlign: "right",
                    }}
                  >
                    {percentage}%
                  </div>

                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: "18px",
                      fontWeight: "600",
                      color: "var(--foreground)",
                      textAlign: "right",
                    }}
                  >
                    {entry.count}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tags */}
          {reviewTags.length > 0 ? (
            <div style={{ paddingTop: "8px" }}>
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "13px",
                  lineHeight: "18px",
                  fontWeight: "600",
                  color: "var(--muted-foreground)",
                  marginBottom: "10px",
                }}
              >
                Most mentioned
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {reviewTags.map((tag) => (
                  <BadgeInstance
                    key={tag}
                    label={tag}
                    variant="neutral"
                    size="sm"
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Filters and Sort */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "8px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "600",
            color: "var(--foreground)",
          }}
        >
          {filter === "all" ? "All Reviews" : `${filter} Star Reviews`}
          <span
            style={{
              fontWeight: "400",
              color: "var(--muted-foreground)",
              marginLeft: "8px",
            }}
          >
            ({sortedReviews.length})
          </span>
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "recent" | "helpful")}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "13px",
              lineHeight: "18px",
              fontWeight: "500",
              color: "var(--foreground)",
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "6px 12px",
              cursor: "pointer",
              appearance: "none",
              paddingRight: "32px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 5L6 8L9 5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
            }}
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>
      </div>

      {/* Review Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {visibleReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            verifiedLabel={reviews.verifiedLabel}
            useCasePrefix={reviews.useCasePrefix}
          />
        ))}
      </div>

      {/* Load More */}
      {hasMoreReviews ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
          }}
        >
          <ButtonInstance
            variant="secondary"
            size="lg"
            label={reviews.loadMoreLabel}
            onClick={() =>
              setVisibleReviewCount((current) =>
                Math.min(
                  current + LOAD_MORE_REVIEWS_COUNT,
                  sortedReviews.length,
                ),
              )
            }
          />
        </div>
      ) : null}
    </div>
  );
}

function ReviewCard({
  review,
  verifiedLabel,
  useCasePrefix,
}: {
  review: any;
  verifiedLabel: string;
  useCasePrefix: string;
}) {
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [helpfulCount, setHelpfulCount] = useState(
    Math.floor(Math.random() * 50) + 10,
  );

  return (
    <CardInstance variant="elevated" padding="lg">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <div
            style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
          >
            {/* Avatar */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                border: "2px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "18px",
                fontWeight: "600",
                color: "var(--primary)",
                flexShrink: 0,
              }}
            >
              {review.name.charAt(0)}
            </div>

            {/* User Info */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "15px",
                    lineHeight: "20px",
                    fontWeight: "600",
                    color: "var(--foreground)",
                  }}
                >
                  {review.name}
                </div>
                <BadgeInstance
                  label={verifiedLabel}
                  variant="neutral"
                  size="sm"
                />
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <StarRating rating={5} size={14} />
                <span
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "12px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "var(--muted-foreground)",
                  }}
                >
                  • 2 weeks ago
                </span>
              </div>

              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "13px",
                  lineHeight: "18px",
                  fontWeight: "500",
                  color: "var(--muted-foreground)",
                }}
              >
                {review.role}
              </div>
            </div>
          </div>
        </div>

        {/* Review Content */}
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "15px",
            lineHeight: "24px",
            fontWeight: "400",
            color: "var(--foreground)",
          }}
        >
          "{review.quote}"
        </div>

        {/* Use Case */}
        <div
          style={{
            padding: "12px 16px",
            backgroundColor: "var(--muted)",
            borderRadius: "8px",
            borderLeft: "3px solid var(--primary)",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "13px",
              lineHeight: "18px",
              fontWeight: "500",
              color: "var(--muted-foreground)",
            }}
          >
            <span style={{ fontWeight: "600", color: "var(--foreground)" }}>
              {useCasePrefix}
            </span>{" "}
            {review.useCase}
          </div>
        </div>

        {/* Tags */}
        {review.tags.length > 0 ? (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {review.tags.map((tag: string) => (
              <BadgeInstance
                key={tag}
                label={tag}
                variant="neutral"
                size="sm"
              />
            ))}
          </div>
        ) : null}

        {/* Footer Actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "12px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "13px",
              lineHeight: "18px",
              fontWeight: "500",
              color: "var(--muted-foreground)",
            }}
          >
            Was this helpful?
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => {
                if (helpful === true) {
                  setHelpful(null);
                  setHelpfulCount((c) => c - 1);
                } else {
                  if (helpful === false) setHelpfulCount((c) => c + 1);
                  else setHelpfulCount((c) => c + 1);
                  setHelpful(true);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                backgroundColor:
                  helpful === true
                    ? "color-mix(in srgb, var(--primary) 10%, transparent)"
                    : "var(--card)",
                color:
                  helpful === true
                    ? "var(--primary)"
                    : "var(--muted-foreground)",
                cursor: "pointer",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13px",
                fontWeight: "500",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (helpful !== true) {
                  e.currentTarget.style.backgroundColor = "var(--muted)";
                }
              }}
              onMouseLeave={(e) => {
                if (helpful !== true) {
                  e.currentTarget.style.backgroundColor = "var(--card)";
                }
              }}
            >
              <ThumbsUp
                size={14}
                fill={helpful === true ? "currentColor" : "none"}
              />
              <span>{helpful === true ? "Helpful" : "Yes"}</span>
              <span
                style={{
                  fontWeight: "600",
                  color:
                    helpful === true
                      ? "var(--primary)"
                      : "var(--foreground)",
                }}
              >
                ({helpfulCount})
              </span>
            </button>

            <button
              onClick={() => {
                if (helpful === false) {
                  setHelpful(null);
                } else {
                  if (helpful === true) setHelpfulCount((c) => c - 1);
                  setHelpful(false);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                backgroundColor:
                  helpful === false
                    ? "color-mix(in srgb, var(--destructive) 10%, transparent)"
                    : "var(--card)",
                color:
                  helpful === false
                    ? "var(--destructive)"
                    : "var(--muted-foreground)",
                cursor: "pointer",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13px",
                fontWeight: "500",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (helpful !== false) {
                  e.currentTarget.style.backgroundColor = "var(--muted)";
                }
              }}
              onMouseLeave={(e) => {
                if (helpful !== false) {
                  e.currentTarget.style.backgroundColor = "var(--card)";
                }
              }}
            >
              <ThumbsDown
                size={14}
                fill={helpful === false ? "currentColor" : "none"}
              />
              <span>No</span>
            </button>
          </div>
        </div>
      </div>
    </CardInstance>
  );
}
