import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TestimonialCard } from "@/components/ui/compositions/Cards/Cards";

// ❖ Testimonial Card
interface FigmaTestimonialCardProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "a95a096f70a78ffff58b6bdc8ae356c148b83b63",
  mapper(figma: FigmaTestimonialCardProps) {
    // Extract testimonial content with fallbacks
    const heading =
      figma.$findOneByName("heading")?.$textContent ??
      "Default testimonial message";
    const name = figma.$findOneByName("name")?.$textContent ?? "John Doe";
    const username =
      figma.$findOneByName("username")?.$textContent ?? "@johndoe";

    // Optional avatar props
    const initials = figma.$findOneByName("initials")?.$textContent;
    const avatarNode = figma.$findOneByName("avatar");
    const src = avatarNode?.$imageUrl;

    return (
      <TestimonialCard
        heading={heading}
        name={name}
        username={username}
        initials={initials}
        src={src}
      />
    );
  },
});
