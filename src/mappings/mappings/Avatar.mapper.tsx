import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Avatar } from "@/components/ui/primitives/Avatar/Avatar";

// ❖ Avatar
interface FigmaAvatarProps extends BaseFigmaProps {
  Type?: "Initial" | "Image";
  Size?: "Large" | "Small" | "Medium";
  Shape?: "Circle" | "Square";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "953694aa741c614fd17e3433f2755c4e12da3863",
  mapper(figma: FigmaAvatarProps) {
    return (
      <Avatar
        square={figma.Shape === "Square"}
        size={figma.Size?.toLowerCase() as "large" | "medium" | "small"}
        src={figma.Type === "Image" ? figma.$imageUrl : undefined}
      />
    );
  },
});
