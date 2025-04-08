import React from "react";

interface TestimonialCardProps {
  quote: string;
  avatarSrc: string;
  title: string;
  description: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  avatarSrc,
  title,
  description,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">{quote}</div>
      <div className="avatar-block">
        <img src={avatarSrc} className="avatar-image" alt="Avatar" />
        <div className="info">
          <div className="info-title">{title}</div>
          <div className="info-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
