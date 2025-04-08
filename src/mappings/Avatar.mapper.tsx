import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Avatar } from "../components/ui/primitives/Avatar/Avatar";

// ❖ Avatar
interface FigmaAvatarProps extends BaseFigmaProps {
  Initials?: string;
  Type?: "Initial" | "Image";
  Size?: "Large" | "Small" | "Medium";
  Shape?: "Circle" | "Square";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Avatar",
  componentKey: "953694aa741c614fd17e3433f2755c4e12da3863",
  mapper(figma: FigmaAvatarProps) {
    // Get initials either from prop or text content
    const initials =
      figma.Initials ?? figma.$findOneByName("Initials")?.$textContent ?? "";

    return (
      <Avatar
        type={figma.Type?.toLowerCase() as "initial" | "image"}
        size={figma.Size?.toLowerCase() as "large" | "small" | "medium"}
        shape={figma.Shape?.toLowerCase() as "circle" | "square"}
      >
        {initials}
      </Avatar>
    );
  },
});
