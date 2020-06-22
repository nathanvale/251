import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { removeProps } from "@origin-digital/ods-helpers";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { Columns } from "../Columns/Columns";
import { Column } from "../Column/Column";
import { Box } from "../Box/Box";
import { baseFieldPropDesc } from "../TextFieldBase/TextFieldBase.docs";
import { SelectField, SelectFieldProps } from "./SelectField";

export const docs: ComponentDocs<SelectFieldProps> = {
  category: "Interaction",
  componentName: "SelectField",
  description: [
    "This component is used when we wanted the user to select an option from a finite set of options",
  ].join(" "),
  propDescriptions: {
    ...removeProps(baseFieldPropDesc("SelectField"), ["placeholder"]),
    children: [
      `An array of <option /> and/or <optgroup /> elements that will be rendered in the dropdown list.`,
      `Use this if you want control over rendering of the option elements. One example of using this`,
      `prop is when we want to group the options into sub-groups. In this case one can fully customise the`,
      `structure of the options children inside the ""select" element via passing down children to SelectField.`,
      `However, the preferred approach for most cases though is to use "options" prop.`,
    ].join(" "),
    options: [
      "An array of objects of the format {value, label} which will represent the option element in the",
      "dropdown of the SelectField. The values must be unique.",
    ].join(" "),
    displayEmpty: [
      `Adds an empty option with "" value at the top of the options.`,
      `aria-label prop for that option is by default set to "None" but could be overridden`,
      `via "emptyAriaLabel" prop.`,
    ].join(" "),
    emptyAriaLabel: [
      `Use this prop to override the default "aria-label" provided for the empty option when "displayEmpty" is set.`,
    ].join(" "),
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <SelectField
          id="select-field1"
          label="Cities"
          options={[
            { value: "syd", label: "Sydney" },
            { value: "mlb", label: "Melbourne" },
            { value: "prt", label: "Perth" },
          ]}
        />
      ),
    },
    additional: [
      {
        label: "Empty option",
        description: [
          `Adds an empty option with "" value at the top of the options.`,
          `aria-label prop for that option is by default set to "None" but could be overridden`,
          `via "emptyAriaLabel" prop.`,
        ].join(" "),
        Code: () => (
          <SelectField
            id="select-field3"
            label="City"
            helperText="City must be selected"
            displayEmpty
            emptyAriaLabel="Empty"
            error
            options={[
              { value: "syd", label: "Sydney" },
              { value: "mlb", label: "Melbourne" },
              { value: "prt", label: "Perth" },
            ]}
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
              <SelectField
                id="select-field4"
                label="City"
                helperText="Please select a city"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                options={[
                  { value: "cbr", label: "Canberra" },
                  { value: "brs", label: "Brisbane" },
                  { value: "adl", label: "Adelaide" },
                ]}
                displayEmpty
              />
              {value && <Text tone="positive">Selected city: {value}</Text>}
            </Stack>
          );
        },
        codeString: `const [value, setValue] = React.useState<string>();
return (<Stack space="medium">
  <SelectField
    id="select-field4"
    label="City"
    helperText="Please select a city"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    options={[
        { value: "cbr", label: "Canberra" },
        { value: "brs", label: "Brisbane" },
        { value: "adl", label: "Adelaide" },
    ]}
    displayEmpty
  />
  {value && <Text tone="positive">Selected city: {value}</Text>}
</Stack>)`,
      },
      {
        label: "How to set width",
        description: [
          "SelectField is always full width. So in order to set its width to a specific value",
          "it should be wrapped in a parent container which has its width set to the desired value.",
          "For most cases you should use Columns/Column as the parent to set the width to match",
          "our design system proportions. In case a pixel perfect width is needed wrap it with a",
          "Box component and set the width on the Box.",
        ].join(" "),
        Code: () => (
          <Stack space="medium">
            <Columns space="medium">
              <Column width="1/3">
                <SelectField
                  id="select-field5"
                  label="State"
                  helperText="Column parent 1/3"
                  options={[
                    { value: "nsw", label: "New South Wales" },
                    { value: "vic", label: "Victoria" },
                  ]}
                />
              </Column>
              <Column width="2/3">
                <SelectField
                  id="select-field6"
                  label="City"
                  helperText="Column parent 2/3"
                  options={[
                    { value: "syd", label: "Sydney" },
                    { value: "mlb", label: "Melbourne" },
                  ]}
                />
              </Column>
            </Columns>
            <Box style={{ width: "8ch" }}>
              <SelectField
                id="select-field7"
                label="Size"
                helperText="Box parent"
                options={[
                  { value: "sm", label: "Small" },
                  { value: "lg", label: "Large" },
                ]}
              />
            </Box>
          </Stack>
        ),
      },
      {
        label: "size",
        description:
          "SelectField could be compact taking less vertical space (48px instead of 56px)",
        Code: () => (
          <Columns space="medium">
            <Column>
              <SelectField
                id="select-field8"
                label="Compact"
                size="small"
                options={[
                  { value: "syd", label: "Sydney" },
                  { value: "mlb", label: "Melbourne" },
                ]}
              />
            </Column>
            <Column>
              <SelectField
                id="select-field9"
                label="Normal"
                options={[
                  { value: "syd", label: "Sydney" },
                  { value: "mlb", label: "Melbourne" },
                ]}
              />
            </Column>
          </Columns>
        ),
      },
      {
        label: "Customised options",
        description: [
          "There are cases where just providing an array of options is not enough. For example",
          "if we want to group the options into sub-groups. In this case one can fully customise the",
          "structure of the options children inside the `select` element via passing down children to SelectField.",
        ].join(" "),
        Code: () => (
          <SelectField
            id="select-field10"
            label="Cities"
            displayEmpty
            emptyAriaLabel="Nothing"
          >
            <optgroup label="NSW">
              <option value="sydney">Sydney</option>
              <option value="newcastle">New Castle</option>
            </optgroup>
            <optgroup label="VIC">
              <option value="melbourne">Melbourne</option>
              <option value="bendigo">Bendigo</option>
            </optgroup>
          </SelectField>
        ),
      },
      {
        label: "Keep helperText space",
        description: [
          "You can set a flag to reserve the space that might be used by helperText.",
          "This allows us have a better user experience by not dynamically changing",
          "the height of the SelectField which means the other components under it won't shift up and down.",
        ].join(" "),
        Code: () => (
          <Stack>
            <SelectField
              id="select-field11"
              label="Keeps space"
              reserveHelperTextSpace
              options={[{ value: "syd", label: "Sydney" }]}
            />
            <SelectField
              id="select-field12"
              label="Doesn't keep space"
              options={[{ value: "syd", label: "Sydney" }]}
            />
            <SelectField
              id="select-field13"
              label="Type here"
              helperText="This will be the error"
              options={[{ value: "syd", label: "Sydney" }]}
            />
          </Stack>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Basic",
      Code: () => (
        <SelectField
          id="select-field"
          label="label"
          helperText="details"
          options={[
            { value: "syd", label: "Sydney" },
            { value: "mlb", label: "Melbourne" },
          ]}
        />
      ),
    },
    {
      label: "With Empty option",
      Code: () => (
        <SelectField
          id="select-field"
          label="label"
          helperText="details"
          displayEmpty
          emptyAriaLabel="None"
          options={[
            { value: "syd", label: "Sydney" },
            { value: "mlb", label: "Melbourne" },
          ]}
        />
      ),
    },
    {
      label: "Error",
      Code: () => (
        <SelectField
          id="select-field"
          label="label"
          helperText="details"
          error
          options={[
            { value: "syd", label: "Sydney" },
            { value: "mlb", label: "Melbourne" },
          ]}
        />
      ),
    },
    {
      label: "Custom options",
      Code: () => (
        <SelectField
          id="select-field10"
          label="Cities"
          displayEmpty
          emptyAriaLabel="Nothing"
        >
          <optgroup label="NWS">
            <option value="sydney">Sydney</option>
            <option value="newcastle">New Castle</option>
          </optgroup>
          <optgroup label="VIC">
            <option value="melbourne">Melbourne</option>
            <option value="bendigo">Bendigo</option>
          </optgroup>
        </SelectField>
      ),
    },
    {
      label: "Receive changes",
      Code: () => (
        <SelectField
          id="select-field"
          label="label"
          helperText="details"
          onChange={(e) => {
            /* eslint-disable-next-line no-console */
            console.log("Change received: ", e.target.value);
          }}
          displayEmpty
          options={[
            { value: "syd", label: "Sydney" },
            { value: "mlb", label: "Melbourne" },
          ]}
        />
      ),
    },
  ],
};
