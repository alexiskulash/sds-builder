import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextStrong, TextLinkList } from "@/components/ui/primitives/Text/Text";

// ❖ Text Link List
interface FigmaTextLinkListProps extends BaseFigmaProps {
  "Has Title"?: boolean;
  Density?: "Default" | "Tight";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "478e251479322e104ae0022b9db0d28df6d7b704",
  mapper(figma: FigmaTextLinkListProps) {
    // Normalize density prop casing
    const density = figma.Density?.toLowerCase() as "default" | "tight";

    // Get title content if "Has Title" is true
    const titleContent = figma["Has Title"]
      ? figma.$findOneByName("Text Strong")?.$textContent
      : undefined;

    return (
      <TextLinkList
        density={density}
        title={titleContent && <TextStrong>{titleContent}</TextStrong>}
      >
        {figma.$children}
      </TextLinkList>
    );
  },
});
