import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Emphasis,
  List,
  ListItem,
  Strong,
  TextLink,
} from "@origin-digital/ods-core";
import { DiffCodeBlock } from "../../../DiffCodeBlock/DiffCodeBlock";
import { Page, PageSection } from "../../../Page/Page";
import {
  baseMigrationGuidesURL,
  ComponentMigrationGuide,
  STYLE_GUIDE_URL,
} from "./consts";

const COMP_NAME = "DatePicker";

export const datePickerMigrationGuide: ComponentMigrationGuide = {
  compName: COMP_NAME,
  route: `${baseMigrationGuidesURL}/${COMP_NAME}`,
  ListItemComp: () => (
    <TextLink href={`${baseMigrationGuidesURL}/${COMP_NAME}`}>
      {COMP_NAME} -> {COMP_NAME} / Keyboard{COMP_NAME}
    </TextLink>
  ),
  PageComp: () => {
    const sections: PageSection[] = [
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              All date picker components from{" "}
              <Strong>@origin-digital/ods-pickers</Strong> package can work with
              multiple date utility libraries. In order to provide a date
              library apps must include <Strong>DatePickerProvider</Strong> at
              their <Strong>root</Strong> level. It uses{" "}
              <Strong>date-fn</Strong> library by default.
            </ListItem>
            <ListItem>
              The <Emphasis>helpText</Emphasis> is renamed to{" "}
              <Emphasis>helperText</Emphasis>.
            </ListItem>
            <ListItem>
              For accessibility reasons, <Emphasis>id</Emphasis> is now a
              required prop and replaces the old <Emphasis>name</Emphasis> prop.
            </ListItem>
            <ListItem>
              The <Emphasis>allowManualEntry</Emphasis> prop is removed. If you
              need to allow manual entry, use{" "}
              <Strong>KeyboardDatePicker</Strong> instead.
            </ListItem>
            <ListItem>
              Instead of <Emphasis>(value, handleDateChange)</Emphasis> props
              for controlling the component now you need to use{" "}
              <Emphasis>(value, onChange)</Emphasis>.
            </ListItem>
            <ListItem>
              The <Emphasis>value</Emphasis> no longer accepts strings and is
              always a <Strong>Date</Strong> object.
            </ListItem>
            <ListItem>
              The <Strong>(Keyboard)DatePicker</Strong> can be used in
              uncontrolled manner. To do this, just leave{" "}
              <Emphasis>value</Emphasis> to be <Strong>undefined</Strong>. You
              can use <Emphasis>defaultValue</Emphasis> to provide an initial
              date for the component.
            </ListItem>
            <ListItem>
              The <Emphasis>error</Emphasis> prop is now changed from a{" "}
              <Strong>string</Strong> to <Strong>boolean</Strong>. To show an
              error message, you now need to set the <Strong>helperText</Strong>{" "}
              prop when <Emphasis>error</Emphasis> is <Strong>true</Strong>.
            </ListItem>
            <ListItem>
              The <Emphasis>fullWidth</Emphasis> prop is now removed as the{" "}
              <Strong>(Keyboard)DatePicker</Strong> is always full width.
            </ListItem>
          </List>
        ),
      },
      {
        title: "Diff",
        children: (
          <ReactMarkdown
            renderers={{ code: DiffCodeBlock }}
            source={`\`\`\`diff
+<DatePickerProvider>
...
<DatePicker
  ..
/>
...
+</DatePickerProvider>


<DatePicker
-  error="Error Message"
+  error={true}
+  helperText="Error Message"

-  name="dp1"
+  id="dp1"

-  fullWidth
-  dayPickerProps
/>

<DatePicker
-  value="11/08/2020"
+  value={new Date(2020, 7, 11)}
-  handleDateChange={ ()=>{} }
+  onChange={ ()=>{} }
/>

<DatePicker
-  helpText="Some info"
+  helperText="Some info"
/>

-<DatePicker
-  allowManualEntry
+<KeyboardDatePicker
/>

\`\`\``}
          />
        ),
      },
      {
        title: "Previous Implementation",
        children: (
          <List>
            <ListItem>
              <TextLink href={`${STYLE_GUIDE_URL}/${COMP_NAME}`}>
                Origin Style Guide
              </TextLink>
            </ListItem>
          </List>
        ),
      },
    ];

    return (
      <Page
        title={`(Keyboard)${COMP_NAME} Migration Guide`}
        sections={sections}
      />
    );
  },
};

export default datePickerMigrationGuide;
