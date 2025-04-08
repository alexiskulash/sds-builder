"use client";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`accordion-item ${isOpen ? "accordion-item-open" : ""}`}>
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-title-text">{title}</div>
        <img
          src={
            isOpen
              ? "https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/d613102a0213cf8335c04bc7aa0869d2f76cbaf2?placeholderIfAbsent=true"
              : "https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/dc42287d2c23d4b3123ff5b6ea3b219df341af84?placeholderIfAbsent=true"
          }
          className="accordion-icon"
          alt={isOpen ? "Collapse" : "Expand"}
        />
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
