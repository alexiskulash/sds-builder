import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextareaField } from "@/components/ui/primitives/Textarea/Textarea";

// ❖ Textarea Field
interface FigmaTextareaFieldProps extends BaseFigmaProps {
  Value?: string;
  "Has Description"?: boolean;
  Description?: string; // when "Has Description" is true
  Label?: string; // when "Has Label" is true
  Error?: string; // when "Has Error" is true
  "Has Error"?: boolean;
  "Has Label"?: boolean;
  State?: "Default" | "Error" | "Disabled";
  "Value Type"?: "Default" | "Placeholder";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Textarea Field",
  componentKey: "70d464c9b6cf15fb439f4ee4f73ac929babddf55",
  mapper(figma: FigmaTextareaFieldProps) {
    // Extract text content
    const label = figma["Has Label"] ? figma.Label : undefined;
    const description = figma["Has Description"]
      ? figma.Description
      : undefined;
    const error = figma["Has Error"] ? figma.Error : undefined;

    // Determine if value should be treated as placeholder
    const value =
      figma["Value Type"] === "Placeholder" ? undefined : figma.Value;
    const placeholder =
      figma["Value Type"] === "Placeholder" ? figma.Value : undefined;

    // Map component state
    const disabled = figma.State === "Disabled";
    const hasError = figma.State === "Error";

    return (
      <TextareaField
        label={label}
        description={description}
        error={error}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        hasError={hasError}
      />
    );
  },
});
