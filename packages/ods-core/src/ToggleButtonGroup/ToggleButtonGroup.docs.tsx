import React from "react";

import { ComponentDocs } from "@origin-digital/ods-types";
import {
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from "../ToggleButtonGroup/ToggleButtonGroup";
import { Text } from "../Text";
import { Stack } from "../Stack";
import {
  generateToggleButtonGroup,
  toggleButtons,
  toggleButtonsObject,
} from "./ToggleButtonGroup.helper";

export const docs: ComponentDocs<ToggleButtonGroupProps> = {
  category: "Interaction",
  componentName: "ToggleButtonGroup",
  description: [
    "This component is similar to a RadioGroup. It allows selection of 1 out of all options.",
    "This component could be use either Uncontrolled (if defaultValue is set) or Controlled (if its value) is set.",
  ].join(" "),
  propDescriptions: {
    className: `The CSS classname to be applied to the group component.`,
    "aria-label": `Use this to provide a mre useful label for the group which will be used by screen readers`,
    children: [
      `Use this to manually render the child ToggleButton components.`,
      `If provided, the "options" prop will be ignored.`,
      `You can use this to have full control over how the toggle buttons are rendered.`,
    ].join(" "),
    "data-id": `USe this to provide an id for test purposes`,
    defaultValue: `In case of uncontrolled ToggleButtonGroup, this can be used to provide the initial value`,
    id: `The unique id of the ToggleButtonGroup, required for accessibility.`,
    onChange: [
      `Is called every time the selected ToggleButton is changed.`,
      `To read the new value, use either "event.target.value" or "value" (the 2nd argument).`,
    ].join(" "),
    options: [
      `The list of ToggleButton values. This can have two formats. If it is of type "string[]"`,
      `for each string it will render a ToggleButton with that text being the ToggleButton's child.`,
      `If it is of the form "{label: string; value: string | number}[]" then again for each object`,
      `in the array it renders a ToggleButton with its value being the value of the object and its child`,
      `being the label of the object.`,
    ].join(" "),
    size: `Defines the height of its child ToggleButtons`,
    value: [
      `If passed in, makes ToggleButtonGroup a controlled component.`,
      `It will also automatically select the corresponding ToggleButton.`,
      `If this value is unset initially, the ToggleButtonGroup will be Uncontrolled.`,
    ].join(" "),
    width: [
      `By defualt it is "full" which means the ToggleButtonGroup will take up 100% width of its parent`,
      `and the widths of all child ToggleButtons will be equal.`,
      `If it is "content" each child ToggleButton takes up the width based on its child content and`,
      `as a result each ToggleButton will of a different width.`,
    ].join(" "),
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateToggleButtonGroup({ defaultValue: toggleButtons[2] }),
    },
    additional: [
      {
        label: "Uncontrolled - setting defaultValue",
        Code: () =>
          generateToggleButtonGroup({ defaultValue: toggleButtons[1] }),
      },
      {
        label: "Controlled, passing down value and onChange props",
        playroom: false,
        Code: () => {
          const [value, setValue] = React.useState<string>(toggleButtons[2]);
          return (
            <Stack space="small">
              <Text weight="medium" tone="positive">
                value: {value}
              </Text>
              <ToggleButtonGroup
                value={value}
                id="Australian city"
                options={toggleButtons}
                onChange={(_, v) => setValue(v)}
              />
            </Stack>
          );
        },
        codeString: `const [value, setValue] = React.useState<string>("${
          toggleButtons[3]
        }");
return <Stack space="small">
  <Text weight="medium" tone="positive">
    value: {value}
  </Text>
  <ToggleButtonGroup
    value={value}
    id="Australian city"
    onChange={(_, val) => setValue(val)}
    options={${JSON.stringify(toggleButtons, null, 2)}}
  />
</Stack>;`,
      },
      {
        label: "Different (label, value) pair for options",
        Code: () =>
          generateToggleButtonGroup(
            {
              defaultValue: toggleButtonsObject[2].value,
            },
            "object"
          ),
      },
      {
        label: "Custom ToggleButtons via children prop",
        Code: () =>
          generateToggleButtonGroup(
            {
              defaultValue: toggleButtonsObject[1].value,
            },
            "ReactNode"
          ),
      },
      {
        label: "Content width, each ToggleButton has the size of its content",
        Code: () =>
          generateToggleButtonGroup({
            defaultValue: toggleButtons[1],
            width: "content",
          }),
      },
      {
        label: "disabled ToggleButtons",
        Code: () =>
          generateToggleButtonGroup(
            {
              defaultValue: toggleButtonsObject[1].value,
            },
            "ReactNode",
            2
          ),
      },
      {
        label: "Different sizes",
        Code: () => (
          <Stack space="small">
            Small
            {generateToggleButtonGroup({
              defaultValue: toggleButtons[1],
              size: "small",
            })}
            Medium
            {generateToggleButtonGroup({
              defaultValue: toggleButtons[1],
            })}
          </Stack>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => generateToggleButtonGroup({ defaultValue: toggleButtons[2] }),
    },
    {
      label: "(label, value) pair",
      Code: () =>
        generateToggleButtonGroup(
          { defaultValue: toggleButtonsObject[1].value },
          "object"
        ),
    },
    {
      label: "Explicit children",
      Code: () =>
        generateToggleButtonGroup(
          { defaultValue: toggleButtonsObject[3].value },
          "ReactNode"
        ),
    },
  ],
};
