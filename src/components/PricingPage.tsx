"use client";
import React from "react";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import PricingSection from "./ui/PricingSection";
import FAQSection from "./ui/FAQSection";
import Footer from "./ui/Footer";
import "../styles/pricing.css";

const PricingPage: React.FC = () => {
  return (
    <div className="platform-desktop">
      <Header />
      <div className="hero-basic">
        <div className="hero-content">
          <div className="hero-title">Title</div>
          <div className="hero-subtitle">Subtitle</div>
        </div>
      </div>
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default PricingPage;
