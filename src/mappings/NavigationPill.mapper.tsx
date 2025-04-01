import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { NavigationPill } from "@/components/ui/primitives/Navigation/Navigation";

// ❖ Navigation Pill
interface FigmaNavigationPillProps extends BaseFigmaProps {
  Label?: string;
  State?: "Default" | "Active" | "Hover";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "8d0aca3bbe1af28b1eab3060737a7c70ef24af8a",
  mapper(figma: FigmaNavigationPillProps) {
    return (
      <NavigationPill isSelected={figma.State === "Active"}>
        {figma.Label ?? figma.$children[0]?.$textContent}
      </NavigationPill>
    );
  },
});
