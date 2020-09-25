import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Emphasis,
  List,
  ListItem,
  Stack,
  Strong,
  Text,
  TextLink,
} from "@origin-digital/ods-core";
import { DiffCodeBlock } from "../../../DiffCodeBlock/DiffCodeBlock";
import { Page, PageSection } from "../../../Page/Page";
import {
  baseMigrationGuidesURL,
  ComponentMigrationGuide,
  STYLE_GUIDE_URL,
} from "./consts";

const COMP_NAME = "SelectField";

export const selectFieldMigrationGuide: ComponentMigrationGuide = {
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
        title: "Overview",
        children: (
          <Stack>
            <Text>
              As <Strong>SelectField</Strong> has most of its API in common with
              the <Strong>TextField</Strong> please refer to{" "}
              <TextLink href={`${baseMigrationGuidesURL}/TextField`}>
                TextField migration guide
              </TextLink>{" "}
              first, for shared props. Here we only provide migration guides
              that are unique to <Strong>SelectField</Strong>.
            </Text>
          </Stack>
        ),
      },
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              The <Emphasis>promp</Emphasis> prop is renamed to{" "}
              <Emphasis>displayEmpty</Emphasis>. For improved accessibility the
              new <Strong>SelectField</Strong> also has the{" "}
              <Emphasis>emptyAriaLabel</Emphasis> prop which can provide a
              readable label for the empty option. It is set to{" "}
              <Strong>"None"</Strong> by default.
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
<SelectField
  ...
-  prompt={true}
+  displayEmpty={true}
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

    return <Page title={`${COMP_NAME} Migration Guide`} sections={sections} />;
  },
};

export default selectFieldMigrationGuide;
