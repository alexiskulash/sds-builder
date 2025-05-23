import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Avatar, AvatarBlock } from "../components/ui/primitives/Avatar/Avatar";
import { Text, TextHeading } from "../components/ui/primitives/Text/Text";

// ❖ Avatar Block
interface FigmaAvatarBlockProps extends BaseFigmaProps {
  Description?: string;
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Avatar Block",
  componentKey: "9e9c140467e6a125385b5170b243b0f426a29baa",
  mapper(figma: FigmaAvatarBlockProps) {
    return (
      <AvatarBlock>
        <Avatar>{figma.$findOneByName("Shape")?.$children}</Avatar>
        {(figma.Title || figma.Description) && (
          <div>
            {figma.Title && <TextHeading>{figma.Title}</TextHeading>}
            {figma.Description && <Text>{figma.Description}</Text>}
          </div>
        )}
      </AvatarBlock>
    );
  },
});
