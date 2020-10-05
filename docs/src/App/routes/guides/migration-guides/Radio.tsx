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

const COMP_NAME = "Radio";

export const radioMigrationGuide: ComponentMigrationGuide = {
  compName: COMP_NAME,
  route: `${baseMigrationGuidesURL}/${COMP_NAME}`,
  ListItemComp: () => (
    <TextLink href={`${baseMigrationGuidesURL}/${COMP_NAME}`}>
      RadioButton, RadioGroup {"->"} {COMP_NAME}(Group)
    </TextLink>
  ),
  PageComp: () => {
    const sections: PageSection[] = [
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              Changes to <Strong>Radio</Strong> API:
              <List type="disc">
                <ListItem>
                  For accessibility reasons, now the <Emphasis>id</Emphasis>{" "}
                  prop is mandatory instead of <Emphasis>name</Emphasis>.
                </ListItem>
                <ListItem>
                  The <Emphasis>onClick</Emphasis> prop is changed to{" "}
                  <Emphasis>onChange</Emphasis> and it is now optional.
                </ListItem>
                <ListItem>
                  The <Emphasis>helpText</Emphasis> prop is renamed to{" "}
                  <Emphasis>helperText</Emphasis>.
                </ListItem>
                <ListItem>
                  The <Emphasis>tabIndex</Emphasis> prop is removed.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Changes to <Strong>RadioGroup</Strong> API:
              <List type="disc">
                <ListItem>
                  The first argument <Emphasis>onChange</Emphasis> is now a
                  standard <Strong>ChangeEvent</Strong>. This means now one
                  should refer to
                  <Strong>e.target.value</Strong> instead of{" "}
                  <Strong>e.value</Strong> to receive the changed value.
                </ListItem>
                <ListItem>
                  Using the <Emphasis>defaultValue</Emphasis> prop now{" "}
                  <Strong>RadioGroup</Strong> can be used in an uncontrolled
                  manner as well.
                </ListItem>
              </List>
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
-<RadioButton
+<Radio
-  name="radio1"
+  id="radio1"

-  onClick={()=>{}}
+  onChange={()=>{}}

-  helpText="some text"
+  helperText="some text"

-  tabIndex={2}
  ...
/>

<RadioGroup
  name="cities"
  value={city}
-  onChange={e => setCity(e.value)}
+  onChange={e => setCity(e.target.value)}
>
-  <RadioButton
+  <Radio
    label="Melbourne"
-    name="mlb"
+    id="mlb"
+    value="mlb"
-    onClick={() => ({})}
  />
+  <Radio
    label="Sydney"
-    name="syd"
+    id="syd"
+    value="syd"
-    onClick={() => ({})}
  />
</RadioGroup>
\`\`\``}
          />
        ),
      },
      {
        title: "Previous Implementation",
        children: (
          <List>
            <ListItem>
              <TextLink href={`${STYLE_GUIDE_URL}/RadioButton`}>
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

export default radioMigrationGuide;
