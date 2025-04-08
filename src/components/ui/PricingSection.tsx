"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <div className="pricing-section">
      <div className="pricing-tabs">
        <div
          className={`pricing-tab ${billingPeriod === "monthly" ? "active" : ""}`}
          onClick={() => setBillingPeriod("monthly")}
        >
          Monthly
        </div>
        <div
          className={`pricing-tab ${billingPeriod === "yearly" ? "active" : ""}`}
          onClick={() => setBillingPeriod("yearly")}
        >
          Yearly
        </div>
        <div className="pricing-tab">Link</div>
      </div>
      <div className="pricing-cards-grid">
        <PricingCard
          title="Title"
          price="50"
          period="mo"
          features={[
            "List item",
            "List item",
            "List item",
            "List item",
            "List item",
          ]}
          buttonText="Button"
          variant="light"
        />
        <PricingCard
          title="Title"
          price="50"
          period="mo"
          features={[
            "List item",
            "List item",
            "List item",
            "List item",
            "List item",
          ]}
          buttonText="Button"
          variant="dark"
        />
        <PricingCard
          title="Title"
          price="50"
          period="mo"
          features={[
            "List item",
            "List item",
            "List item",
            "List item",
            "List item",
          ]}
          buttonText="Button"
          variant="light"
        />
      </div>
    </div>
  );
};

export default PricingSection;
