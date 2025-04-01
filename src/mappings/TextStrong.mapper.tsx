import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextStrong } from "@/components/ui/primitives/Text/Text";

// ❖ Text Strong
interface FigmaTextStrongProps extends BaseFigmaProps {
  Text?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "13c172857d95cb90b49a470596dcffda180dfabf",
  mapper(figma: FigmaTextStrongProps) {
    return <TextStrong>{figma.Text ?? ""}</TextStrong>;
  },
});
