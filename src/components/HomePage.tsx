"use client";
import React from "react";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import TestimonialSection from "./ui/TestimonialSection";
import Footer from "./ui/Footer";
import "../styles/homepage.css";

const HomePage: React.FC = () => {
  return (
    <div className="platform-desktop">
      <Header />
      <Hero />
      <img src="https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/d613102a0213cf8335c04bc7aa0869d2f76cbaf2?placeholderIfAbsent=true" className="full-width-image" alt="Platform showcase" />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default HomePage;
