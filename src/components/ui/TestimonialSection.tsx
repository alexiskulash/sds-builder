import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: '"Quote"',
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/7a2399e3b88bf6d2d907ea27b3d34f6c4f27c917?placeholderIfAbsent=true",
      title: "Title",
      description: "Description",
    },
    {
      id: 2,
      quote: '"Quote"',
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/43c64e08370f1bfc55dae9d772ad53cb7b337cd6?placeholderIfAbsent=true",
      title: "Title",
      description: "Description",
    },
    {
      id: 3,
      quote: '"Quote"',
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/818d9e10ca5125923cd92727b848d0a89f44ffd5?placeholderIfAbsent=true",
      title: "Title",
      description: "Description",
    },
    {
      id: 4,
      quote: '"Quote"',
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/7a2399e3b88bf6d2d907ea27b3d34f6c4f27c917?placeholderIfAbsent=true",
      title: "Title",
      description: "Description",
    },
    {
      id: 5,
      quote: '"Quote"',
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/43c64e08370f1bfc55dae9d772ad53cb7b337cd6?placeholderIfAbsent=true",
      title: "Title",
      description: "Description",
    },
    {
      id: 6,
      quote: '"Quote"',
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/818d9e10ca5125923cd92727b848d0a89f44ffd5?placeholderIfAbsent=true",
      title: "Title",
      description: "Description",
    },
  ];

  return (
    <section className="card-grid-testimonials">
      <div className="section-header">
        <div className="section-heading">Heading</div>
        <div className="section-subheading">Subheading</div>
      </div>
      <div className="card-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            avatarSrc={testimonial.avatarSrc}
            title={testimonial.title}
            description={testimonial.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
