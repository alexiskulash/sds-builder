import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  variant: "light" | "dark";
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  buttonText,
  variant,
}) => {
  return (
    <div
      className={`pricing-card ${variant === "dark" ? "pricing-card-dark" : ""}`}
    >
      <div className="pricing-card-top">
        <div className="pricing-card-title">{title}</div>
        <div className="pricing-card-price-container">
          <div className="pricing-card-price">
            <div className="pricing-card-currency">$</div>
            <div className="pricing-card-amount">{price}</div>
          </div>
          <div className="pricing-card-period">/ {period}</div>
        </div>
        <div className="pricing-card-features">
          {features.map((feature, index) => (
            <div key={index} className="pricing-card-feature">
              {feature}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`pricing-card-button ${variant === "dark" ? "pricing-card-button-light" : "pricing-card-button-dark"}`}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default PricingCard;
