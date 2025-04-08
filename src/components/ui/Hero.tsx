import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero-actions">
      <div className="hero-content">
        <div className="hero-title">Title</div>
        <div className="hero-subtitle">Subtitle</div>
      </div>
      <div className="button-group">
        <div className="btn btn-secondary btn-large">Button</div>
        <div className="btn btn-primary btn-large">Button</div>
      </div>
    </section>
  );
};

export default Hero;
