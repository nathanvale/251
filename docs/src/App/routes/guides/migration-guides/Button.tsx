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
  baseCompsURL,
  baseGuidesURL,
  baseMigrationGuidesURL,
  ComponentMigrationGuide,
  STYLE_GUIDE_URL,
} from "./consts";

const COMP_NAME = "Button";

export const buttonMigrationGuide: ComponentMigrationGuide = {
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
              Instead of <Emphasis>text</Emphasis> prop now use{" "}
              <Emphasis>children</Emphasis> for the text of the button.
            </ListItem>
            <ListItem>
              The <Emphasis>kind</Emphasis> prop is changed to{" "}
              <Emphasis>variant</Emphasis> prop where
              <Strong>"primary" {"->"} "contained"</Strong> and{" "}
              <Strong>"secondary" {"->"} "outlined"</Strong>.
            </ListItem>
            <ListItem>
              The values for <Emphasis>color</Emphasis> prop is changed to match
              more abstract theme colours:{" "}
              <Strong>"red" {"->"} "primary"</Strong> and{" "}
              <Strong>"grey" {"->"} "secondaryB"</Strong>.
            </ListItem>
            <ListItem>
              The <Emphasis>block</Emphasis> prop is now renamed to{" "}
              <Emphasis>fullWidth</Emphasis> which is now a{" "}
              <Strong>ResponsiveProp</Strong>, e.g. could be true or false
              depending on screen width.
            </ListItem>
            <ListItem>
              The boolean <Emphasis>reverseColor</Emphasis> prop is now renamed
              to <Emphasis>inverse</Emphasis>.
            </ListItem>
            <ListItem>
              The boolean <Emphasis>small</Emphasis> prop is now replaced with
              <Emphasis>size</Emphasis> which could be <Strong>"medium"</Strong>{" "}
              or <Strong>"small"</Strong>.
            </ListItem>
            <ListItem>
              ODS has a{" "}
              <TextLink href={`${baseGuidesURL}/tracking-guide`}>
                new tracking solution
              </TextLink>
              . Hence, <Emphasis>trackingDisabled</Emphasis> is no longer
              available. Use{" "}
              <TextLink href={`${baseCompsURL}/TrackingDisable`}>
                TrackingDisable
              </TextLink>{" "}
              component instead.
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
<Button
-  text="Submit"
 >
+  Submit
</Button>
<Button
-  kind="secondary"
+  variant="outlined"
-  color="red"
+  color="primary"
-  block
+  fullWidth={[true, false]}
-  reverseColor
+  inverse
-  small
+  size="small"
-  trackingDisabled
>
...
</Button>
\`\`\``}
          />
        ),
      },
      {
        title: "Previous Implementation",
        children: (
          <List>
            <ListItem>
              <TextLink href={`${STYLE_GUIDE_URL}/Button`}>
                Origin Style Guide
              </TextLink>
            </ListItem>
          </List>
        ),
      },
    ];

    return <Page title={`${COMP_NAME} Migration Guide`} sections={sections} />;
  },
};

export default buttonMigrationGuide;
