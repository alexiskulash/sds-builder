import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { InputField } from "@/components/ui/primitives/Input/Input";
import { Label } from "@/components/ui/primitives/Fieldset/Fieldset";
import { Description } from "@/components/ui/primitives/Fieldset/Fieldset";
import { FieldError } from "@/components/ui/primitives/Fieldset/Fieldset";

// ❖ Input Field
interface FigmaInputFieldProps extends BaseFigmaProps {
  Description?: string; // when "Has Description" is true
  Error?: string; // when "Has Error" is true
  "Has Label"?: boolean;
  "Has Error"?: boolean;
  Value?: string;
  "Has Description"?: boolean;
  Label?: string; // when "Has Label" is true
  State?: "Disabled" | "Default" | "Error";
  "Value Type"?: "Default" | "Placeholder";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Input Field",
  componentKey: "a53a309d432e37e0c0987116f5c9882ca9128043",
  mapper(figma: FigmaInputFieldProps) {
    const isDisabled = figma.State === "Disabled";
    const isError = figma.State === "Error";
    const isPlaceholder = figma["Value Type"] === "Placeholder";

    return (
      <InputField
        disabled={isDisabled}
        error={figma["Has Error"] ? figma.Error : undefined}
        label={figma["Has Label"] ? figma.Label : undefined}
        description={figma["Has Description"] ? figma.Description : undefined}
        placeholder={isPlaceholder ? figma.Value : undefined}
        value={!isPlaceholder ? figma.Value : undefined}
      />
    );
  },
});
