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
  baseMigrationGuidesURL,
  ComponentMigrationGuide,
  STYLE_GUIDE_URL,
} from "./consts";

const COMP_NAME = "Alert";

export const alertMigrationGuide: ComponentMigrationGuide = {
  compName: COMP_NAME,
  route: `${baseMigrationGuidesURL}/${COMP_NAME}`,
  ListItemComp: () => (
    <TextLink href={`${baseMigrationGuidesURL}/${COMP_NAME}`}>
      AlertBox, PromoBox -&#62; {COMP_NAME}
    </TextLink>
  ),
  PageComp: () => {
    const sections: PageSection[] = [
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              <Strong>Alert</Strong> consolidates the visuals of both
              <Strong>AlertBox</Strong> and <Strong>PromoBox</Strong> into one
              component.
            </ListItem>
            <ListItem>
              The <Emphasis>heading</Emphasis> props is renamed to{" "}
              <Emphasis>title</Emphasis> which now also accepts
              <Strong>ReactNode</Strong> children for richer visual titles.
            </ListItem>
            <ListItem>
              The <Emphasis>message</Emphasis> prop is now removed and{" "}
              <Emphasis>children</Emphasis>
              should be used for the content.
            </ListItem>
            <ListItem>
              The <Emphasis>type</Emphasis> prop is changed to{" "}
              <Emphasis>tone</Emphasis> which also supports all visual variants
              that <Strong>PromoBox</Strong> used to provide.
            </ListItem>
            <ListItem>
              <Strong>Alert</Strong> has default icons for each{" "}
              <Emphasis>tone</Emphasis> but its <Emphasis>icon</Emphasis> prop
              now allows you to customise the icon.
            </ListItem>
            <ListItem>
              If <Emphasis>onCloseClick</Emphasis> callback prop is provided it
              shows a close icon on the right hand side.
            </ListItem>
            <ListItem>
              ODS has a{" "}
              <TextLink href={`${baseCompsURL}/MarkdownLite`}>
                new markdown component
              </TextLink>{" "}
              called <Strong>MarkdownLite</Strong>. As a result{" "}
              <Emphasis>markdown</Emphasis> prop is removed from the API.
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
-<AlertBox
+<Alert
-  heading="Informative message"
+  title="Informative message"
-  type="info"
+  tone="info"
-  message="This is the body of the message"
  >
+    <Text>This is the body of the message</Text>
-</AlertBox>
+</Alert>
-<AlertBox
+<Alert
-  message="This is a **bold** text"
  ...
 >
+  <Text>
+    <MarkdownLite>This is a **bold** text</MarkdownLite>
+  </Text>
-</AlertBox>
+</Alert>
\`\`\``}
          />
        ),
      },
      {
        title: "Previous Implementation",
        children: (
          <List>
            <ListItem>
              <TextLink href={`${STYLE_GUIDE_URL}/AlertBox`}>
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

export default alertMigrationGuide;
