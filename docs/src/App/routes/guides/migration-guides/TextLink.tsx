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

const COMP_NAME = "TextLink";

export const textLinkMigrationGuide: ComponentMigrationGuide = {
  compName: COMP_NAME,
  route: `${baseMigrationGuidesURL}/${COMP_NAME}`,
  ListItemComp: () => (
    <TextLink href={`${baseMigrationGuidesURL}/${COMP_NAME}`}>
      LinkText {"->"} {COMP_NAME}
    </TextLink>
  ),
  PageComp: () => {
    const sections: PageSection[] = [
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              The <Strong>LinkText</Strong> is now renamed to{" "}
              <Strong>TextLink</Strong> and any visual props are removed from
              its API. The new <Strong>TextLink</Strong> component must always
              be inside a <Strong>Text</Strong> component. It inherit all
              typography related designs (color, font size, font weight, etc.)
              from its containing
              <Strong>Text</Strong>.
            </ListItem>
            <ListItem>
              The <Emphasis>href</Emphasis> prop is mandatory now.
            </ListItem>
            <ListItem>
              The <Emphasis>text</Emphasis> prop is not removed. Use{" "}
              <Emphasis>children</Emphasis> instead.
            </ListItem>
            <ListItem>
              The <Emphasis>(color, hoverColor)</Emphasis> props are removed.
              Use <Emphasis>tone</Emphasis> on the parent <Strong>Text</Strong>{" "}
              instead.
            </ListItem>
            <ListItem>
              The <Emphasis>size</Emphasis> prop is removed. Use{" "}
              <Emphasis>variant</Emphasis> on the parent <Strong>Text</Strong>{" "}
              instead.
            </ListItem>
            <ListItem>
              The <Emphasis>title</Emphasis> prop is removed.
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
-<LinkText
-  color="red"
-  text="Click here"
->
-</LinkText>
+<Text
+ tone="critical"
+>
+  <TextLink>Click here</TextLink>
+</Text>

-<LinkText
+<Text>
+<TextLink
-  componentType="Dashboard link"
-  hoverColor="red"
-  size="md"
-  text="Go to Dashboard"
-  title="dashboard link"
-  trackingDisable
>
+  Go to Dashboard
+</TextLink>
+</Text>
-</LinkText>
\`\`\``}
          />
        ),
      },
      {
        title: "Previous Implementation",
        children: (
          <List>
            <ListItem>
              <TextLink href={`${STYLE_GUIDE_URL}/TextLink`}>
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

export default textLinkMigrationGuide;
