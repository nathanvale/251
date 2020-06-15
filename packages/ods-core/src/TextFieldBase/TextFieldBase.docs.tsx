import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { IconCheckCircle, IconError } from "@origin-digital/ods-icons";
import { InputAdornment } from "../InputAdornment/InputAdornment";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { Columns } from "../Columns/Columns";
import { Column } from "../Column/Column";
import { Box } from "../Box/Box";
import { TextFieldBase, TextFieldBaseProps } from "./TextFieldBase";

export const textFieldBasePropDescriptions: (
  compname: string
) => Partial<Record<keyof TextFieldBaseProps, string>> = (compName) => ({
  id:
    "The unique id of the input element inside the component. It is required for accessibility.",
  defaultValue:
    "The initial value of the input element. Use this if the form is uncontrolled",
  domProps:
    "The standard HTMLInput props. This will be directly passed down to the input element",
  endAdornment: [
    `Can be used to render an inline element at the end of the ${compName}.`,
    `This is mostly used to show an icon at the right hand side of the ${compName},`,
    `such as error, success or spinner icon. The best practice is to use "InputAdornment" as its immediate`,
    `child and set its position prop to "end".`,
  ].join(" "),
  startAdornment: [
    `Can be used to render an inline element at the beginning of the ${compName}.`,
    `This is mostly used to show an icon or a sign at the left hand side of the ${compName},`,
    `The best practice is to use "InputAdornment" as its immediate`,
    `child and set its position prop to "start".`,
  ].join(" "),
  helperText: [
    `Provide further details or error messages via this prop. To have more custom description you can pass any`,
    `react elements to this prop. For example, if character count is needed, simply pass down some JSX here`,
    `that includes visualisation and logic for character count. Or in case of requiring markdown support, pass`,
    `some JSX which renders markdown content.`,
  ].join(" "),
  label: `The label shown at the top of the ${compName}`,
  placeholder: `The text shown on the ${compName} when it is empty and focused.`,
  size: `Defines how much vertical space the ${compName} component will take.`,
  type: `Standard "type" attribute of HTML Input elements.`,
  variant: [
    `By default it is filled which will force a grey background. In this variant the component has no`,
    `left, top or right borders. Another variant is "outlined" which puts an outline border around the component`,
  ].join(" "),
  disabled: `Use this to disable/enable the component`,
  name: `The name property of the underlying input element, mostly used by form solutions`,
  value: [
    `Provide this value if you want ${compName} to be controlled. It will define the value shown on the input element.`,
  ].join(" "),
  inputRef: [
    `The ref object that will be passed down to the input element. Use it for imperative`,
    `operations such as focus().`,
  ].join(" "),
  error: `If set to true the ${compName} component will be rendered in error state.`,
  "data-id": [
    `The id used for e2e testing and analytics. If not provided will be default to`,
    `value of the "id" prop`,
  ].join(" "),
  onChange: [
    `Is called every time the user changes the value inside the input element.`,
    `To read the new value, use either "event.target.value" or "value" (the 2nd argument)`,
    `which are passed to the provided callback function.`,
  ].join(" "),
  onBlur: [
    `Is called whenever the ${compName} loses focus, either via keyboard or the user clicks outside`,
    `the component.`,
  ].join(" "),
  onFocus: [`Is called whenever the ${compName} receives focus.`].join(" "),
  onKeyDown: [
    `Is called whenever the user presses a key on input element.`,
  ].join(" "),
  onKeyUp: [
    `Is called whenever the user releases a key on input element.`,
  ].join(" "),
  reserveHelperTextSpace: [
    `If set to true, helperText will keep its space (height) even if it is empty`,
  ].join(" "),
});

export const docs: ComponentDocs<TextFieldBaseProps> = {
  category: "Atomic",
  componentName: "TextFieldBase",
  description: [
    "This is the underlying component of a number of higher level Field components,",
    "such as TextField, SelectField, TextAreaField, etc.",
  ].join(" "),
  propDescriptions: textFieldBasePropDescriptions("TextFieldBase"),
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <TextFieldBase id="text-field" label="Filled input" />,
    },
    additional: [
      {
        label: "Icon",
        description: "TextFieldBase With a checked icon at the end",
        Code: () => (
          <TextFieldBase
            id="text-field1"
            label="Type here"
            helperText="This will be the error"
            placeholder="No values here"
            endAdornment={
              <InputAdornment position="end">
                <IconCheckCircle color="#a5bb48" />
              </InputAdornment>
            }
          />
        ),
      },
      {
        label: "Error - Icon",
        description:
          "TextFieldBase in error state with a custom icon at the end",
        Code: () => (
          <TextFieldBase
            id="text-field2"
            label="Type here"
            helperText="This will be the error"
            error={true}
            placeholder="This is a placeholder"
            endAdornment={
              <InputAdornment position="end">
                <IconError color="#ec0000" />
              </InputAdornment>
            }
          />
        ),
      },
      {
        label: "Default value",
        description: "One can set a default value for the TextFieldBase",
        Code: () => (
          <TextFieldBase
            id="text-field3"
            label="Name"
            helperText="Your name is required"
            defaultValue="John Smith"
          />
        ),
      },
      {
        label: "Handle change",
        description: "To handle change events pass in an onChange handler.",
        playroom: false,
        Code: () => {
          const [value, setValue] = React.useState<string>();
          return (
            <Stack space="medium">
              <TextFieldBase
                id="text-field4"
                label="Name"
                helperText="Enter your name please"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {value && <Text tone="positive">Entered name: {value}</Text>}
            </Stack>
          );
        },
        codeString: `const [value, setValue] = React.useState<string>();
return (<Stack space="medium">
  <TextFieldBase
    id="text-field4"
    label="Name"
    helperText="Enter you name please"
    value={value}
    onChange={e => setValue(e.target.value)}
  />
  {value && <Text>Entered name: {value}</Text>}
</Stack>)`,
      },
      {
        label: "How to set width",
        description: [
          "TextFieldBase is always full width. So in order to set its width to a specific value",
          "it should be wrapped in a parent container which has its width set to the desired value.",
          "For most cases you should use Columns/Column as the parent to set the width to match",
          "our design system proportions. In case a pixel perfect width is needed wrap it with a",
          "Box component and set the width on the Box.",
        ].join(" "),
        Code: () => (
          <Stack space="medium">
            <Columns space="medium">
              <Column width="1/3">
                <TextFieldBase
                  id="text-field5"
                  label="Account No"
                  helperText="Column parent 1/3"
                />
              </Column>
              <Column width="2/3">
                <TextFieldBase
                  id="text-field6"
                  label="Account Name"
                  helperText="Column parent 2/3"
                />
              </Column>
            </Columns>
            <Box style={{ width: "8ch" }}>
              <TextFieldBase
                id="text-field7"
                label="BSB"
                helperText="Box parent"
              />
            </Box>
          </Stack>
        ),
      },
      {
        label: "size",
        description:
          "TextFieldBase could be compact taking less vertical space",
        Code: () => (
          <Columns space="medium">
            <Column>
              <TextFieldBase id="text-field8" label="Compact" size="small" />
            </Column>
            <Column>
              <TextFieldBase id="text-field9" label="Normal" />
            </Column>
          </Columns>
        ),
      },
      {
        label: "startAdornment",
        description: [
          "TextFieldBase can also show an Icon before the Input.",
          "Note that if you use `InputAdornment` component as the root child for `startAdornment`",
          "its `position` prop should be set to `start` for the styles to look nice.",
        ].join(" "),
        Code: () => (
          <TextFieldBase
            id="text-field10"
            label="Type here"
            helperText="Icon on the left"
            placeholder="Placeholder is aligned with Icon"
            startAdornment={
              <InputAdornment position="start">
                <IconCheckCircle color="#505050" />
              </InputAdornment>
            }
          />
        ),
      },
      {
        label: "Outlined variant",
        description: ["TextFieldBase also has an Outlined variant."].join(" "),
        Code: () => (
          <TextFieldBase
            id="text-field11"
            label="Type here"
            variant="outlined"
            helperText="helper text for outlined input"
            placeholder="Placeholder"
          />
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Basic",
      Code: () => (
        <TextFieldBase
          id="text-field"
          label="label"
          placeholder="placeholder"
          helperText="details"
        />
      ),
    },
    {
      label: "Set width",
      Code: () => (
        <Stack space="medium">
          <Box style={{ width: "250px" }}>
            <TextFieldBase id="text-field" label="BSB" helperText="6 digits" />
          </Box>
        </Stack>
      ),
    },
    {
      label: "Receive changes",
      Code: () => (
        <TextFieldBase
          id="text-field"
          label="label"
          placeholder="placeholder"
          helperText="details"
          onChange={(e) => {
            /* eslint-disable-next-line no-console */
            console.log("Change received: ", e.target.value);
          }}
        />
      ),
    },
  ],
};
