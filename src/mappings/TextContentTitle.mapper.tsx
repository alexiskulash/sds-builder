import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextContentTitle } from "@/components/ui/primitives/Text/Text";

// ❖ Text Content Title
interface FigmaTextContentTitleProps extends BaseFigmaProps {
  Title?: string;
  "Has Subtitle"?: boolean;
  Subtitle?: string; // when "Has Subtitle" is true
  Align?: "Start" | "Center";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "48400100186bdbdbe9ef8495fc47fa73c995b2a4",
  mapper(figma: FigmaTextContentTitleProps) {
    return (
      <TextContentTitle
        title={figma.Title ?? ""}
        subtitle={figma["Has Subtitle"] ? figma.Subtitle : undefined}
        align={figma.Align?.toLowerCase() as "center" | "start"}
      />
    );
  },
});
