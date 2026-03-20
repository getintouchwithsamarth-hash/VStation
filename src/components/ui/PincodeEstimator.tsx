import { useEffect, useState } from "react";
import { ButtonInstance } from "./Button";
import { InputInstance } from "./Input";
import { checkEta, type EtaResponse } from "../../lib/eta";

function formatDisplayDate(value: string): string {
  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return value;
  }

  return `${day}-${month}-${year}`;
}

export function PincodeEstimator() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<EtaResponse | null>(null);
  const [networkError, setNetworkError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedPincode = window.localStorage.getItem("deliveryPincode");
    if (savedPincode) {
      setPincode(savedPincode);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (pincode.length > 0) {
      window.localStorage.setItem("deliveryPincode", pincode);
      return;
    }

    window.localStorage.removeItem("deliveryPincode");
  }, [pincode]);

  const hasInvalidFormat = touched && pincode.length > 0 && pincode.length !== 6;
  const statusTone = networkError
    ? "error"
    : result?.serviceable
      ? "success"
      : result
        ? "warning"
        : null;

  const handlePincodeChange = (value: string) => {
    setPincode(value.replace(/\D/g, "").slice(0, 6));
    setTouched(true);
    setNetworkError(null);
    setResult(null);
  };

  const handleCheckDelivery = async () => {
    const normalizedPincode = pincode.trim();
    setTouched(true);
    setNetworkError(null);
    setResult(null);

    if (!/^\d{6}$/.test(normalizedPincode)) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await checkEta(normalizedPincode);
      setResult(response);
    } catch (error) {
      setNetworkError(
        error instanceof Error
          ? error.message
          : "We could not check delivery right now. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const helperText = hasInvalidFormat
    ? "Enter a valid 6-digit pincode."
    : "Enter your 6-digit pincode to check delivery availability.";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <InputInstance
        label="Delivery pincode"
        placeholder="110001"
        helperText={helperText}
        error={hasInvalidFormat}
        value={pincode}
        onValueChange={handlePincodeChange}
        inputMode="numeric"
        maxLength={6}
        autoComplete="postal-code"
        name="deliveryPincode"
      />
      <div>
        <ButtonInstance
          variant="secondary"
          size="sm"
          label={isLoading ? "Checking..." : "Check delivery"}
          onClick={handleCheckDelivery}
          disabled={isLoading}
        />
      </div>

      {result || networkError ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            padding: "12px 14px",
            borderRadius: "12px",
            border:
              statusTone === "success"
                ? "1px solid rgba(34, 197, 94, 0.28)"
                : statusTone === "warning"
                  ? "1px solid rgba(245, 158, 11, 0.24)"
                  : "1px solid rgba(239, 68, 68, 0.24)",
            background:
              statusTone === "success"
                ? "rgba(34, 197, 94, 0.08)"
                : statusTone === "warning"
                  ? "rgba(245, 158, 11, 0.08)"
                  : "rgba(239, 68, 68, 0.08)",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              lineHeight: "18px",
              fontWeight: 600,
              color: "var(--foreground)",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            {networkError || result?.message}
          </div>

          {result?.serviceable && result.eta ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                fontSize: "12px",
                lineHeight: "18px",
                color: "var(--muted-foreground)",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              <span>
                Dispatch in {result.eta.dispatchBusinessDays} business day
                {result.eta.dispatchBusinessDays === 1 ? "" : "s"}.
              </span>
              <span>
                Transit {result.eta.transitMinBusinessDays}-
                {result.eta.transitMaxBusinessDays} business days from{" "}
                {result.originZone} to {result.destinationZone}.
              </span>
              <span>
                ETA window: {formatDisplayDate(result.eta.estimatedMinDate)} to{" "}
                {formatDisplayDate(result.eta.estimatedMaxDate)}
              </span>
            </div>
          ) : null}

          {result?.reasonCode ? (
            <div
              style={{
                fontSize: "11px",
                lineHeight: "16px",
                color: "var(--muted-foreground)",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Code: {result.reasonCode}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
