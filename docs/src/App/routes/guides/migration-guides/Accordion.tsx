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

const COMP_NAME = "Accordion";

export const accordionMigrationGuide: ComponentMigrationGuide = {
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
              The new Accordion has a different visual appearance for hover
              state. It also animates between expanded and collapsed modes.
            </ListItem>
            <ListItem>
              Instead of grouping <Strong>Accordion</Strong>s via a generic{" "}
              <Strong>Box</Strong> component, now we have{" "}
              <Strong>AccordionGroup</Strong>. This smart component handles the
              borders of its child <Strong>Accordion</Strong>s properly and
              hence <Emphasis>topBorder</Emphasis> prop is no longer needed.
            </ListItem>
            <ListItem>
              For accessibility reasons, <Emphasis>id</Emphasis> is now a
              required prop.
            </ListItem>
            <ListItem>
              The <Emphasis>label</Emphasis> props is renamed to{" "}
              <Emphasis>summary</Emphasis>. This now also accepts any{" "}
              <Strong>ReactNode</Strong>. Hence, there is no longer a need for
              <Emphasis>subtitle</Emphasis> prop and it is removed. Look at
              below example for alternative.
            </ListItem>
            <ListItem>
              Instead of <Emphasis>(open, onToggle)</Emphasis> props for
              controlling the component now you need to use{" "}
              <Emphasis>(expanded, onChange)</Emphasis>.
            </ListItem>
            <ListItem>
              To have an uncontrolled accordion, which is initially open you now
              just set <Emphasis>defaultExpanded</Emphasis> to true. You also
              have to leave <Emphasis>expanded</Emphasis>
              undefined.
            </ListItem>
            <ListItem>
              To align with ODS language, <Emphasis>condensed</Emphasis> and{" "}
              <Emphasis>smallLabel</Emphasis> are now replaced by{" "}
              <Emphasis>size</Emphasis> prop. Use{" "}
              <Emphasis>size="small"</Emphasis> instead of those two boolean
              props.
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
-<Box>
+<AccordionGroup>
  <Accordion>
-    label="Accordion item"
+    summary="Accordion item"
-    condensed
-    smallLabel
+    size="small"
-    borderTop
-    trackingDisabled
+    defaultExpanded={false}
+    id="accordion1"
  >
    <Box>Some awesome content</Box>
  </Accordion>
  <Accordion
-    label="My second accordion"
-    subTitle="Subtitle"
+    summary={
+      <Stack>
+        <Heading variant="h4">My accordion</Heading>
+        <Text>There are hidden secrets in here</Text>
+      </Stack>
+    }
-    open={true}
+    expanded={true}
-    onToggle={() => { ... }}
+    onChange={() => { ... }}>
  >
    <Box>Some awesome content</Box>
  </Accordion>
-</Box>
+</AccordionGroup>
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

export default accordionMigrationGuide;
