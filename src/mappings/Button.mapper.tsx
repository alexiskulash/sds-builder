import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Button } from "@/components/ui/primitives/Button/Button";

// ❖ Button
interface FigmaButtonProps extends BaseFigmaProps {
  "Has Icon Start"?: boolean;
  "Icon Start"?: ChildrenNode; // when "Has Icon Start" is true
  "Has Icon End"?: boolean;
  "Icon End"?: ChildrenNode; // when "Has Icon End" is true
  Label?: string;
  Variant?: "Primary" | "Neutral" | "Subtle";
  State?: "Default" | "Hover" | "Disabled";
  Size?: "Medium" | "Small";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "a0b4f21671148f5b7471b16da162ea182179da17",
  mapper(figma: FigmaButtonProps) {
    return (
      <Button
        variant={
          figma.Variant?.toLowerCase() as "primary" | "neutral" | "subtle"
        }
        size={figma.Size?.toLowerCase() as "medium" | "small"}
        isDisabled={figma.State === "Disabled"}
      >
        {figma["Has Icon Start"] && figma["Icon Start"]}
        {figma.Label}
        {figma["Has Icon End"] && figma["Icon End"]}
      </Button>
    );
  },
});
