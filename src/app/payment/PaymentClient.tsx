"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PaymentClient() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "Unknown Plan";
  const duration = searchParams.get("duration") || "";
  const amount = searchParams.get("amount") || "";
  const isFlashSale = searchParams.get("flashsale") === "true";

  // Widget mapping based on plan + duration, with flash sale override
  let widgetSrc = "https://nowpayments.io/embeds/payment-widget?iid=5340208246"; // Default: 1 Month Silver
  if (isFlashSale) {
    widgetSrc = "https://nowpayments.io/embeds/payment-widget?iid=5404696763"; // Flash Sale Diamond Yearly
  } else if (plan === "silver" && duration === "monthly") {
    widgetSrc = "https://nowpayments.io/embeds/payment-widget?iid=5340208246";
  } else if (plan === "silver" && duration === "yearly") {
    widgetSrc = "https://nowpayments.io/embeds/payment-widget?iid=4793268494";
  } else if (plan === "gold" && duration === "monthly") {
    widgetSrc = "https://nowpayments.io/embeds/payment-widget?iid=5480122089";
  } else if (plan === "gold" && duration === "yearly") {
    widgetSrc = "https://nowpayments.io/embeds/payment-widget?iid=4369093264";
  } else if (plan === "diamond" && duration === "monthly") {
    widgetSrc = "https://nowpayments.io/embeds/payment-widget?iid=5677991646";
  } else if (plan === "diamond" && duration === "yearly") {
    widgetSrc = "https://nowpayments.io/embeds/payment-widget?iid=6032787400";
  }

  useEffect(() => {
    if (amount) {
      const widgetDiv = document.getElementById("nowpayments-widget");
      if (widgetDiv) widgetDiv.setAttribute("data-amount", amount);
    }
  }, [amount]);

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          backgroundColor: "#1a1a2e",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Pay for {plan.charAt(0).toUpperCase() + plan.slice(1)}{" "}
        {duration.charAt(0).toUpperCase() + duration.slice(1)} - ${amount}
      </h1>
      <p style={{ color: "#ffffff" }}>
        Complete your payment with Crypto below.
      </p>
      <iframe
        id="nowpayments-widget"
        src={widgetSrc}
        width="410"
        height="696"
        frameBorder="0"
        scrolling="no"
        style={{ overflowY: "hidden" }}
        title="Payment widget"
      >
        Can't load widget
      </iframe>
    </div>
  );
}