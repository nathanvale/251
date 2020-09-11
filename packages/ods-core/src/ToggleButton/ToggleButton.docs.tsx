import { ComponentDocs } from "@origin-digital/ods-types";
import { ToggleButtonProps } from "./ToggleButton";
import { generateToggleButton } from "./ToggleButton.helper";

export const docs: ComponentDocs<ToggleButtonProps> = {
  category: "Interaction",
  componentName: "ToggleButton",
  description: [
    "This component has similar functionality as a Radio.",
    "This is rarely used by itself and almost always should be used as a child of a ToggleButtonGroup.",
  ].join(" "),
  propDescriptions: {
    disabled: `If true wil render a disabled button`,
    "aria-label": [
      `A screen-reader friendly label for this button. If is not provided the internal ToggleButton`,
      `sets it to "value" prop`,
    ].join(" "),
    children: [
      `The main content that is rendered inside the ToggleButton.`,
      `In most cases it is just a string. But it is not limited to that and it could be any valid`,
      `React element such as Icons.`,
    ].join(" "),
    "data-id": `The id to be used for test purposes. By default is set to the "value" prop`,
    selected: [
      `Can be used to define the "selected state of the component. `,
      `If selected is true the button is rendered as visually selected.`,
    ].join(" "),
    value: [
      `This defines the accepted values that ToggleButtonGroup's value prop can have.`,
      `It always has to be set.`,
    ].join(" "),
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateToggleButton(),
    },
    additional: [
      {
        label: "Selected",
        Code: () => generateToggleButton({ selected: true }),
      },
      {
        label: "Disabled",
        Code: () => generateToggleButton({ disabled: true }),
      },
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => generateToggleButton(),
    },
  ],
};
