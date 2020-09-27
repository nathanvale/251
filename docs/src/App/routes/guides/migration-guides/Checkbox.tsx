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

const COMP_NAME = "Checkbox";

export const checkboxMigrationGuide: ComponentMigrationGuide = {
  compName: COMP_NAME,
  route: `${baseMigrationGuidesURL}/${COMP_NAME}`,
  ListItemComp: () => (
    <TextLink href={`${baseMigrationGuidesURL}/${COMP_NAME}`}>
      {COMP_NAME}
    </TextLink>
  ),
  PageComp: () => {
    const sections: PageSection[] = [
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              The <Emphasis>name</Emphasis> prop is now optional. To meet the
              accessibility requirements, we now have made{" "}
              <Emphasis>id</Emphasis> mandatory.
            </ListItem>
            <ListItem>
              The <Emphasis>label</Emphasis> props is also now mandatory to
              improve accessibility. It is however now a{" "}
              <Strong>ReactNode</Strong> for further customisation of the label
              if needed.
            </ListItem>
            <ListItem>
              To align with MUI terminology, <Emphasis>helpText</Emphasis> prop
              is renamed to <Emphasis>helperText</Emphasis> and now it is a{" "}
              <Strong>ReactNode</Strong>.
            </ListItem>
            <ListItem>
              The <Emphasis>error</Emphasis> prop is now changed from a{" "}
              <Strong>string</Strong> to
              <Strong>boolean</Strong>. To show an error message, you now need
              to wrap the <Strong>Checkbox</Strong> inside a{" "}
              <Strong>CheckboxGroup</Strong> as that is the only way to show
              error messages for 1 or more checkboxes. When using this approach
              you do NOT need to set the <Emphasis>error</Emphasis> prop on the{" "}
              <Strong>Checkbox</Strong>. Instead set it on{" "}
              <Strong>CheckboxGroup</Strong>.
            </ListItem>
            <ListItem>
              Now <Strong>Checkbox</Strong>s could be grouped via{" "}
              <Strong>CheckboxGroup</Strong>.
            </ListItem>
            <ListItem>
              The <Strong>Checkbox</Strong> component can now be used as an
              uncontrolled input as well. Just leave the{" "}
              <Emphasis>checked</Emphasis> value <Strong>undefined</Strong>. The{" "}
              <Emphasis>onClick</Emphasis> prop is now changed to{" "}
              <Emphasis>onChange</Emphasis>. The second argument of{" "}
              <Emphasis>onChange</Emphasis> is the new value of{" "}
              <Emphasis>checked</Emphasis> which can be used to set the value
              correctly in both controlled and uncontrolled usages.
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
<Checkbox
  label="T's & C's"
-  name="checkbox1"
+  id="checkbox1"
-  helpText="Please tick"
+  helperText="Please tick"
/>

+<CheckboxGroup
+  error={true}
+  helperText="Error Message"
+>
  <Checkbox
    ...
-    error="Error Message"
  />
+</CheckboxGroup>

<Checkbox
  ...
  checked={ticked}
-  onClick={() => setTicked(!ticked)}
+  onChange{(_, checkedValue) => setTicked(checkedValue)}
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
      <Page title={`${COMP_NAME}(Group) Migration Guide`} sections={sections} />
    );
  },
};

export default checkboxMigrationGuide;
