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

const COMP_NAME = "Dialog";

export const dialogMigrationGuide: ComponentMigrationGuide = {
  compName: COMP_NAME,
  route: `${baseMigrationGuidesURL}/${COMP_NAME}`,
  ListItemComp: () => (
    <TextLink href={`${baseMigrationGuidesURL}/${COMP_NAME}`}>
      Modal -> {COMP_NAME}
    </TextLink>
  ),
  PageComp: () => {
    const sections: PageSection[] = [
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              The <Strong>Modal</Strong> is now called <Strong>Dialog</Strong>{" "}
              in ODS.
            </ListItem>
            <ListItem>
              Instead of conditionally rendering a <Strong>Modal</Strong>, now
              you can use <Emphasis>open</Emphasis> prop to control when the{" "}
              <Strong>Dialog</Strong> is shown.
            </ListItem>
            <ListItem>
              The <Emphasis>accessibilityModalLabel</Emphasis> prop is now
              removed. Instead, use the <Emphasis>id</Emphasis> prop (which is
              mandatory).
            </ListItem>
            <ListItem>
              The <Emphasis>title</Emphasis> prop is now mandatory for
              accessibility reasons.
            </ListItem>
            <ListItem>
              The <Emphasis>onDismiss</Emphasis> prop is renamed to{" "}
              <Emphasis>onClose</Emphasis>.
            </ListItem>
            <ListItem>
              The <Emphasis>transparent</Emphasis> prop is renamed to{" "}
              <Emphasis>opaqueBackground</Emphasis>. As a result the default the{" "}
              <Strong>Dialog</Strong> has a transparent background. Set{" "}
              <Emphasis>opaqueBackground</Emphasis> to <Emphasis>true</Emphasis>{" "}
              to make the background opaque.
            </ListItem>
            <ListItem>
              The <Emphasis>width</Emphasis> prop is now removed. You can use{" "}
              <Emphasis>maxWidth</Emphasis> which uses T-shirt sizes for the
              maximum width of the <Strong>Dialog</Strong>.
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
-{showModal &&
-  <Modal
    ...
  >
  ...
-  </Modal>
-}
+<Dialog
+  open={showModal}
+  ...
>
...
+</Dialog>


-<Modal
+<Dialog
-  accessibilityModalLabel="My Modal"
+  id="My Modal"

-  onDismiss={ ()=>{} }
+  onClose={ ()=>{} }

-  transparent={true}
+  opaqueBackground={false}

-  width="500px"
+  maxWidth="md"

-  accessibilityCloseLabel="Close Modal"
>
  <Text>Some awesome content</Text>
-</Modal>
+</Dialog>
\`\`\``}
          />
        ),
      },
      {
        title: "Previous Implementation",
        children: (
          <List>
            <ListItem>
              <TextLink href={`${STYLE_GUIDE_URL}/Modal`}>
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

export default dialogMigrationGuide;
