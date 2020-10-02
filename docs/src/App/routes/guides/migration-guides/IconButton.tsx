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
  baseGuidesURL,
  baseMigrationGuidesURL,
  ComponentMigrationGuide,
  STYLE_GUIDE_URL,
} from "./consts";

const COMP_NAME = "IconButton";

export const iconButtonMigrationGuide: ComponentMigrationGuide = {
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
              The <Emphasis>icon</Emphasis> prop is now removed. Use,{" "}
              <Emphasis>children</Emphasis> instead. Contrary to the{" "}
              <Emphasis>icon</Emphasis> prop, which used to receive the icon
              component function, in the new API the consumer is responsible for
              rendering the child icon.
            </ListItem>
            <ListItem>
              The valid values for the <Emphasis>color</Emphasis> prop are
              changed to reflect ODS's theme language. Here is only the
              available options and their legacy counter parts in Style Guide:
              <List type="disc">
                <ListItem>
                  <Strong>"Primary"</Strong>: used to be <Strong>"red"</Strong>.
                </ListItem>
                <ListItem>
                  <Strong>"secondaryB"</Strong>: used to be{" "}
                  <Strong>"grey"</Strong>.
                </ListItem>
                <ListItem>
                  <Strong>"inherit"</Strong>: This does not have an equivalent
                  in Style Guide. The new <Strong>IconButton</Strong> in ODS is
                  now context aware and if its <Emphasis>color</Emphasis> props
                  is set to <Strong>"inherit"</Strong>, it will pick up the
                  appropriate color from its typography context, i.e. the{" "}
                  <Emphasis>tone</Emphasis> provided by a parent{" "}
                  <Strong>Text, Heading, List</Strong> component.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              To align with HTML terminology{" "}
              <Emphasis>accessibilityLabel</Emphasis> is now renamed to{" "}
              <Emphasis>aria-label</Emphasis>. Also,{" "}
              <Emphasis>accessibilityExpanded, accessibilityHaspopup</Emphasis>{" "}
              props are removed.
            </ListItem>
            <ListItem>
              ODS has a{" "}
              <TextLink href={`${baseGuidesURL}/tracking-guide`}>
                new tracking solution
              </TextLink>
              . Hence, the <Emphasis>tracking</Emphasis> prop is no longer
              available. Use <Emphasis>data-id</Emphasis> instead.
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
<IconButton
-  color="grey"
+  color="secondaryB"

-  tracking="sales-form:example"
+  data-id="sales-form:example"

-  accessibilityLabel="Gas"
+  aria-label="Gas"

-  accessibilityExpanded
-  accessibilityHaspopup

-  icon={GasIcon}
 >
+  <IconGas />
</IconButton>
\`\`\``}
          />
        ),
      },
      {
        title: "Previous Implementation",
        children: (
          <List>
            <ListItem>
              <TextLink href={`${STYLE_GUIDE_URL}/IconButton`}>
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

export default iconButtonMigrationGuide;
