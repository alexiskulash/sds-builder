import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Button, ButtonGroup } from "@/components/ui/primitives/Button/Button";

// ❖ Button Group
interface FigmaButtonGroupProps extends BaseFigmaProps {
  "Button End"?: boolean;
  "Button Start"?: boolean;
  Align?: "Justify" | "Start" | "End" | "Center" | "Stack";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "8b4d244286a234f4de0681966fdf8aba769e06a7",
  mapper(figma: FigmaButtonGroupProps) {
    // Convert Figma alignment to React alignment (lowercase)
    const align = figma.Align?.toLowerCase() as
      | "center"
      | "end"
      | "justify"
      | "stack"
      | "start";

    return (
      <ButtonGroup align={align}>
        {/* Render start button if visible */}
        {figma["Button Start"] && (
          <Button>
            {figma.$findOneByName("Icon Start")}
            {figma.$findOneByName("Button")?.$textContent}
          </Button>
        )}

        {/* Render end button if visible */}
        {figma["Button End"] && (
          <Button>
            {figma.$findOneByName("Icon End")}
            {figma.$findOneByName("Button")?.$textContent}
          </Button>
        )}
      </ButtonGroup>
    );
  },
});
