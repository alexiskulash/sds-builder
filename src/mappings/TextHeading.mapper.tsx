import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextHeading } from "@/components/ui/primitives/Text/Text";

// ❖ Text Heading
interface FigmaTextHeadingProps extends BaseFigmaProps {
  Text?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "1e97dd027f6d7690b7e02ba8058f369484e8c5b9",
  mapper(figma: FigmaTextHeadingProps) {
    return <TextHeading>{figma.Text ?? ""}</TextHeading>;
  },
});
