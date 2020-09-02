import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { IconCheck } from "@origin-digital/ods-icons";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { Columns } from "../Columns/Columns";
import { Column } from "../Column/Column";
import { Box } from "../Box/Box";
import { baseFieldPropDesc } from "../TextFieldBase/TextFieldBase.docs";
import { TextField, TextFieldProps } from "./TextField";

export const docs: ComponentDocs<TextFieldProps> = {
  category: "Interaction",
  componentName: "TextField",
  description: ["The main component to receive user inputs."].join(" "),
  propDescriptions: {
    ...baseFieldPropDesc("TextField"),
    endIcon: [
      `Provide an icon to be shown at the right end of the TextField. If the value is string and one of`,
      `"success" | "error" | "validating", it will show the corresponding icon.`,
      `It also accepts any general icon as a react node, or in fact any element could be passed down to it,`,
      `e.g. an IconButton. If disabled={true} and endIcon is a string, the icon will not be shown. However,`,
      `custom icons will always be shown. It is the consumers responsibility to handle the visuals of the icon`,
      `for "disabled" and "error" states.`,
    ].join(" "),
    startIcon: [
      `Renders the received react element (mainly an icon) before (on the left of) the text in TextField`,
    ].join(" "),
    domProps:
      "The standard HTMLInput props. This will be directly passed down to the input element",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <TextField id="text-field" label="Filled input" />,
    },
    additional: [
      {
        label: "Hiding helperText space",
        description: [
          "You can set a flag to hide the space that might be used by helperText.",
          "This allows us have a better user experience by not dynamically changing",
          "the height of the TextField which means the other components under it won't shift up and down.",
        ].join(" "),
        Code: () => (
          <Stack>
            <TextField
              id="text-field12"
              label="Keeps space"
              endIcon="success"
              hideHelperTextSpace
            />
            <TextField id="text-field13" label="" />
            <TextField
              id="text-field14"
              label="Type here"
              helperText="This will be the error"
            />
          </Stack>
        ),
      },
      {
        label: "Success",
        description:
          "TextField with a green check icon, the TextField is in success state",
        Code: () => (
          <TextField
            id="text-field1"
            label="Type here"
            helperText="This will be the error"
            endIcon="success"
          />
        ),
      },
      {
        label: "Error",
        description: "TextField is in error state",
        Code: () => (
          <TextField
            id="text-field1"
            label="Type here"
            helperText="This will be the error"
            error
          />
        ),
      },
      {
        label: "Validating",
        description: "TextField is in validating state",
        Code: () => (
          <TextField
            id="text-field1"
            label="Type here"
            helperText="This will be the error"
            endIcon="validating"
          />
        ),
      },
      {
        label: "Custom Icon at the end",
        description:
          "TextField accepts any custom icon to render after the text",
        Code: () => (
          <TextField
            id="text-field15"
            label="Type here"
            helperText="This will be the error"
            endIcon={<IconCheck tone="critical" />}
          />
        ),
      },
      {
        label: "Custom Icon at the start",
        description:
          "TextField accepts any custom icon to render before of the text",
        Code: () => (
          <TextField
            id="text-field16"
            label="Type here"
            helperText="This will be the error"
            startIcon={<IconCheck tone="critical" />}
          />
        ),
      },
      {
        label: "Default value",
        description: "One can set a default value for the TextField",
        Code: () => (
          <TextField
            id="text-field3"
            label="Name"
            helperText="Your name is required"
            defaultValue="John Smith"
          />
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
              <TextField
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
  <TextField
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
        label: "How to set width",
        description: [
          "TextField is always full width. So in order to set its width to a specific value",
          "it should be wrapped in a parent container which has its width set to the desired value.",
          "For most cases you should use Columns/Column as the parent to set the width to match",
          "our design system proportions. In case a pixel perfect width is needed wrap it with a",
          "Box component and set the width on the Box.",
        ].join(" "),
        Code: () => (
          <Stack space="medium">
            <Columns space="medium">
              <Column width="1/3">
                <TextField
                  id="text-field5"
                  label="Account No"
                  helperText="Column parent 1/3"
                />
              </Column>
              <Column width="2/3">
                <TextField
                  id="text-field6"
                  label="Account Name"
                  helperText="Column parent 2/3"
                />
              </Column>
            </Columns>
            <Box style={{ width: "8ch" }}>
              <TextField id="text-field7" label="BSB" helperText="Box parent" />
            </Box>
          </Stack>
        ),
      },
      {
        label: "size",
        description: "TextField could be compact taking less vertical space",
        Code: () => (
          <Columns space="medium">
            <Column>
              <TextField id="text-field8" label="Compact" size="small" />
            </Column>
            <Column>
              <TextField id="text-field9" label="Normal" />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Placeholder",
        description: [
          "TextField components can show a placeholder for text.",
          "If the field has a label, the placeholder only shows up when the field is focused on.",
        ].join(" "),
        Code: () => (
          <TextField
            id="text-field11"
            label="Type here"
            placeholder="Placeholder is shown here"
          />
        ),
      },
      {
        label: "Character count - visuals for Playroom",
        description: [
          "helperText does not have to be only text. It could be a full react node",
          "which allows it to be easily customised. For example, in below we provide",
          "a character count at the bottom right of the TextField by passing a",
          "structured ReactNode (using our Layout components).",
        ].join(" "),
        Code: () => (
          <TextField
            id="text-field12"
            label="Character count"
            helperText={
              <Columns>
                <Column>BSB is 7 chars max</Column>
                <Column width="content">3/7</Column>
              </Columns>
            }
          />
        ),
      },
      {
        label: "Character count - working example",
        description: [
          "This is a working example of how one can easily provide character count for the TextField.",
        ].join(" "),
        playroom: false,
        Code: () => {
          const [value, setValue] = React.useState<string>();
          return (
            <TextField
              id="text-field12"
              label="Character count"
              maxLength={7}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              helperText={
                <Columns>
                  <Column>BSB is 7 chars max</Column>
                  <Column width="content">{value?.length ?? 0}/7</Column>
                </Columns>
              }
            />
          );
        },
        codeString: `const [value, setValue] = React.useState<string>();
return (<TextField
    id="text-field12"
    label="Character count"
    maxLength={7}
    value={value}
    onChange={e => setValue(e.target.value)}
    helperText={
      <Columns>
        <Column>BSB is 7 chars max</Column>
        <Column width="content">{value?.length ?? 0}/7</Column>
      </Columns>
    }
  />);`,
      },
    ],
  },
  snippets: [
    {
      label: "Basic",
      Code: () => (
        <TextField id="text-field" label="label" helperText="details" />
      ),
    },
    {
      label: "Error",
      Code: () => (
        <TextField
          id="text-field"
          label="label"
          helperText="details"
          error={true}
        />
      ),
    },
    {
      label: "Success",
      Code: () => (
        <TextField
          id="text-field"
          label="label"
          helperText="details"
          endIcon="success"
        />
      ),
    },
    {
      label: "Validating",
      Code: () => (
        <TextField
          id="text-field"
          label="label"
          helperText="details"
          endIcon="validating"
        />
      ),
    },
    {
      label: "Custom endIcon",
      Code: () => (
        <TextField
          id="text-field"
          label="label"
          helperText="details"
          endIcon={<IconCheck tone="critical" />}
        />
      ),
    },
    {
      label: "Custom startIcon",
      Code: () => (
        <TextField
          id="text-field"
          label="label"
          helperText="details"
          startIcon={<IconCheck tone="critical" />}
        />
      ),
    },
    {
      label: "Set width",
      Code: () => (
        <Stack space="medium">
          <Box style={{ width: "250px" }}>
            <TextField id="text-field" label="BSB" helperText="6 digits" />
          </Box>
        </Stack>
      ),
    },
    {
      label: "Receive changes",
      Code: () => (
        <TextField
          id="text-field"
          label="label"
          helperText="details"
          onChange={(e) => {
            /* eslint-disable-next-line no-console */
            console.log("Change received: ", e.target.value);
          }}
        />
      ),
    },
    {
      label: "Character count - customise helperText",
      Code: () => (
        <TextField
          id="text-field"
          label="Character count"
          helperText={
            <Columns>
              <Column>BSB is 7 chars max</Column>
              <Column width="content">3/7</Column>
            </Columns>
          }
        />
      ),
    },
  ],
};
