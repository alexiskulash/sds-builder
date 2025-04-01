import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextContentHeading } from "@/components/ui/primitives/Text/Text";

// ❖ Text Content Heading
interface FigmaTextContentHeadingProps extends BaseFigmaProps {
  Subheading?: string; // when "Has Subheading" is true
  Heading?: string;
  "Has Subheading"?: boolean;
  Align?: "Start" | "Center";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "ec1a0d373ce73d1853062d42b855b37f2c1f0740",
  mapper(figma: FigmaTextContentHeadingProps) {
    return (
      <TextContentHeading
        align={figma.Align?.toLowerCase() as "center" | "start"}
        heading={figma.Heading ?? ""}
        subheading={figma["Has Subheading"] ? figma.Subheading : undefined}
      />
    );
  },
});
