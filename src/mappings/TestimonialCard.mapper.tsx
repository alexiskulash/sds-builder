import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TestimonialCard } from "../components/ui/compositions/Cards/Cards";

// ❖ Testimonial Card
interface FigmaTestimonialCardProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Testimonial Card",
  componentKey: "a95a096f70a78ffff58b6bdc8ae356c148b83b63",
  mapper(figma: FigmaTestimonialCardProps) {
    // Extract quote from TextHeading
    const quote = figma.$findOneByName("Text Heading")?.$textContent ?? "";

    // Get avatar image URL from Avatar component
    const avatarSrc = figma.$findOneByName("Avatar")?.$imageUrl ?? "";

    // Extract title and description from Info frame
    const title = figma.$findOneByName("Title")?.$textContent ?? "";
    const description = figma.$findOneByName("Description")?.$textContent ?? "";

    return (
      <TestimonialCard
        quote={quote}
        avatarSrc={avatarSrc}
        title={title}
        description={description}
      />
    );
  },
});
