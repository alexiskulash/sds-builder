"use client";
import React from "react";
import AccordionItem from "./AccordionItem";

const FAQSection: React.FC = () => {
  return (
    <div className="faq-section">
      <div className="faq-header">
        <div className="faq-heading">Heading</div>
        <div className="faq-subheading">Subheading</div>
      </div>
      <div className="faq-accordion">
        <AccordionItem
          title="Title"
          content="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
          defaultOpen={true}
        />
        <AccordionItem
          title="Title"
          content="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
          defaultOpen={false}
        />
        <AccordionItem
          title="Title"
          content="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
          defaultOpen={false}
        />
        <AccordionItem
          title="Title"
          content="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
          defaultOpen={false}
        />
        <AccordionItem
          title="Title"
          content="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
          defaultOpen={false}
        />
      </div>
    </div>
  );
};

export default FAQSection;
