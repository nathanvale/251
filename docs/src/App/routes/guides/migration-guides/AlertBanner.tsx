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

const COMP_NAME = "AlertBanner";

export const alertBannerMigrationGuide: ComponentMigrationGuide = {
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
              <Strong>AlertBanner</Strong> is built on top of{" "}
              <Strong>Alert</Strong> component and extends its{" "}
              <TextLink href={`${baseCompsURL}/Alert`}>API</TextLink>.
            </ListItem>
            <ListItem>
              The <Emphasis>fixedPositions</Emphasis> props is removed and
              instead we have <Emphasis>offset</Emphasis> prop with which you
              can only provide the top offset of <Strong>AlertBanner</Strong>{" "}
              (within its parent element).
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
<AlertBanner
-  heading="Informative message"
+  title="Informative message"
-  type="info"
+  tone="info"
-  message="This is the body of the message"
  >
+    <Text>This is the body of the message</Text>
</AlertBanner>
<AlertBanner
-  message="This is a **bold** text"
  ...
 >
+  <MarkdownLite>
+    <Text>This is a **bold** text</Text>
+  </MarkdownLite>
</AlertBanner>
<AlertBanner
  ...
-  fixedPositions="{{SM:'20px', MD: '40px', LG: '60px'}}"
+  offset="40px"
-  onClose={() => {}}
+  onCloseClick={() => {}}
-  trackingDisabled
 >
  ...
</AlertBanner>
\`\`\``}
          />
        ),
      },
      {
        title: "Previous Implementation",
        children: (
          <List>
            <ListItem>
              <TextLink href={`${STYLE_GUIDE_URL}/AlertBanner`}>
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

export default alertBannerMigrationGuide;
