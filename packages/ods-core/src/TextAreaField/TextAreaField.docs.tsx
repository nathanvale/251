import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { baseFieldPropDesc } from "../TextFieldBase/TextFieldBase.docs";
import { TextAreaField, TextAreaFieldProps } from "./TextAreaField";

export const docs: ComponentDocs<TextAreaFieldProps> = {
  category: "Interaction",
  componentName: "TextAreaField",
  description: [
    "This is the underlying component of a number higher level Field components,",
    "such as TextField, SelectField, TextAreaField, etc.",
  ].join(" "),
  propDescriptions: {
    ...baseFieldPropDesc("TextField"),
    rows: `Number of rows to display. Default is 1.`,
    rowsMax: `Maximum number of rows to display. If the rows exceed this value, a vertical scrollbar appears.`,
    domProps:
      "The standard HTMLTextArea props. This will be directly passed down to the textarea element.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <TextAreaField id="taf-1" label="A text field" />,
    },
    additional: [
      {
        label: "rows and rowsMax",
        description: [
          "rows define the initial number of rows that the TextAreaField should take.",
          "rowsMax defines the maximum height of the TextAreaField.",
        ].join(" "),
        Code: () => (
          <TextAreaField id="taf-2" label="3 rows" rows="3" rowsMax="6" />
        ),
      },
      {
        label: "Handle change",
        description:
          "To handle change listen on onChange and provide the value prop",
        playroom: false,
        Code: () => {
          const [value, setValue] = React.useState<string>();
          return (
            <Stack space="medium">
              <TextAreaField
                id="text-field3"
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
  <TextAreaField
    id="text-field4"
    label="Name"
    helperText="Enter you name please"
    value={value}
    onChange={e => setValue(e.target.value)}
  />
  {value && <Text tone="positive">Entered name: {value}</Text>}
</Stack>)`,
      },
      {
        label: "Outlined variant",
        description: ["TextField also has an Outlined variant."].join(" "),
        Code: () => (
          <TextAreaField
            id="text-field11"
            label="Type here"
            variant="outlined"
            helperText="helper text for outlined input"
            placeholder="Placeholder"
            rows="5"
          />
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Basic",
      Code: () => (
        <TextAreaField
          id="taf"
          label="label"
          placeholder="placeholder"
          helperText="details"
        />
      ),
    },
    {
      label: "rows and rowsMax",
      Code: () => (
        <TextAreaField id="taf" label="3 rows" rows="3" rowsMax="6" />
      ),
    },
  ],
};
