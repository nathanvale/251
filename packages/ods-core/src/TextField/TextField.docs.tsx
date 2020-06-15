import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { removeProps } from "@origin-digital/ods-helpers";
import { IconCheck } from "@origin-digital/ods-icons";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { Columns } from "../Columns/Columns";
import { Column } from "../Column/Column";
import { Box } from "../Box/Box";
import { textFieldBasePropDescriptions } from "../TextFieldBase/TextFieldBase.docs";
import { TextField, TextFieldProps } from "./TextField";

export const docs: ComponentDocs<TextFieldProps> = {
  category: "Interaction",
  componentName: "TextField",
  description: [
    "This is the underlying component of a number higher level Field components,",
    "such as TextField, SelectField, TextAreaField, etc.",
  ].join(" "),
  propDescriptions: {
    ...removeProps(textFieldBasePropDescriptions("TextField"), [
      "startAdornment",
      "endAdornment",
    ]),
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
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <TextField id="text-field" label="Filled input" />,
    },
    additional: [
      {
        label: "Keep helperText space",
        description: [
          "You can set a flag to reserve the space that might be used by helperText.",
          "This allows us have a better user experience by not dynamically changing",
          "the height of the TextField which means the other components under it won't shift up and down.",
        ].join(" "),
        Code: () => (
          <Stack>
            <TextField
              id="text-field12"
              label="This keeps space for helperText even though it is empty"
              endIcon="success"
              reserveHelperTextSpace
            />
            <TextField
              id="text-field13"
              label="This does not take up space for helperText"
            />
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
            placeholder="No values here"
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
            placeholder="No values here"
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
            placeholder="No values here"
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
            placeholder="No values here"
            endIcon={<IconCheck color="#a5bb48" />}
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
            placeholder="No values here"
            startIcon={<IconCheck color="#a5bb48" />}
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
  {value && <Text>Entered name: {value}</Text>}
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
        label: "Outlined variant",
        description: ["TextField also has an Outlined variant."].join(" "),
        Code: () => (
          <TextField
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
        <TextField
          id="text-field"
          label="label"
          placeholder="placeholder"
          helperText="details"
        />
      ),
    },
    {
      label: "Error",
      Code: () => (
        <TextField
          id="text-field"
          label="label"
          placeholder="placeholder"
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
          placeholder="placeholder"
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
          placeholder="placeholder"
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
          placeholder="placeholder"
          helperText="details"
          endIcon={<IconCheck color="#a5bb48" />}
        />
      ),
    },
    {
      label: "Custom startIcon",
      Code: () => (
        <TextField
          id="text-field"
          label="label"
          placeholder="placeholder"
          helperText="details"
          startIcon={<IconCheck color="#a5bb48" />}
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
