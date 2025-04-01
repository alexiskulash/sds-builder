import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Avatar } from "@/components/ui/primitives/Avatar/Avatar";

// ❖ Avatar
interface FigmaAvatarProps extends BaseFigmaProps {
  Initials?: string;
  Type?: "Initial" | "Image";
  Size?: "Large" | "Small" | "Medium";
  Shape?: "Circle" | "Square";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "953694aa741c614fd17e3433f2755c4e12da3863",
  mapper(figma: FigmaAvatarProps) {
    // Convert size to lowercase to match React component expectations
    const size = figma.Size?.toLowerCase() as "large" | "medium" | "small";

    // Convert Shape enum to square boolean
    const square = figma.Shape === "Square";

    // For Image type, we'd need a src, but since it's not provided in the Figma props
    // we'll default to using initials
    const src = figma.Type === "Image" ? undefined : undefined;

    return (
      <Avatar
        size={size}
        square={square}
        src={src}
        initials={figma.Initials}
        alt={figma.Initials ? `Avatar for ${figma.Initials}` : undefined}
      />
    );
  },
});
