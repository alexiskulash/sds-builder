import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { HeaderAuth } from "@/components/ui/compositions/Headers/Headers";
import { Button } from "@/components/ui/primitives/Button/Button";
import { IconUser } from "@/components/ui/icons/IconUser";

// ❖ Header Auth
interface FigmaHeaderAuthProps extends BaseFigmaProps {
  State?: "Logged In" | "Logged Out" | "Logged In - Hover";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Header Auth",
  componentKey: "5e702b63f71453b4af2ed6a1b91ce3432150d5b8",
  mapper(figma: FigmaHeaderAuthProps) {
    // Helper function to get button content
    const getButtonContent = (buttonNode: FigmaNode) => {
      const iconStart = buttonNode.$findOneByName("Icon Start");
      const iconEnd = buttonNode.$findOneByName("Icon End");
      const label = buttonNode.$findOneByName("Button")?.$textContent;

      return (
        <Button>
          {iconStart && <IconUser />}
          {label}
          {iconEnd && <IconUser />}
        </Button>
      );
    };

    // Map buttons based on state
    const buttons = figma.$children?.map((child, index) => {
      if (child?.$type === "COMPONENT") {
        return getButtonContent(child);
      }
      return null;
    });

    return <HeaderAuth>{buttons}</HeaderAuth>;
  },
});
