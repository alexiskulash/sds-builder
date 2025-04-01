import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Avatar, AvatarBlock } from "@/components/ui/primitives/Avatar/Avatar";

// ❖ Avatar Block
interface FigmaAvatarBlockProps extends BaseFigmaProps {
  Description?: string;
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "9e9c140467e6a125385b5170b243b0f426a29baa",
  mapper(figma: FigmaAvatarBlockProps) {
    return (
      <AvatarBlock title={figma.Title ?? ""} description={figma.Description}>
        <Avatar />
      </AvatarBlock>
    );
  },
});
