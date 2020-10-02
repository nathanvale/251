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

const COMP_NAME = "Heading";

export const textMigrationGuide: ComponentMigrationGuide = {
  compName: COMP_NAME,
  route: `${baseMigrationGuidesURL}/${COMP_NAME}`,
  ListItemComp: () => (
    <TextLink href={`${baseMigrationGuidesURL}/${COMP_NAME}`}>
      Heading(1,2,3,4) {"->"} {COMP_NAME}
    </TextLink>
  ),
  PageComp: () => {
    const sections: PageSection[] = [
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              The <Strong>Heading</Strong> component is completely rebuilt to
              simplify typography. Now instead of for{" "}
              <Strong>Heading1, Heading2, Heading3, Heading4</Strong> components
              there is only one <Strong>Heading</Strong> component. To achieve
              different heading levels use <Emphasis>variant</Emphasis> and{" "}
              <Emphasis>component</Emphasis> props.
            </ListItem>
            <ListItem>
              The <Emphasis>fontWeight</Emphasis> prop is renamed to{" "}
              <Emphasis>weight</Emphasis>. It is only applicable to{" "}
              <Strong>h1, h2</Strong> variants and will throw an error if used
              alongside <Strong>h3, h4</Strong>.
            </ListItem>
            <ListItem>
              The <Emphasis>weight</Emphasis> prop no longer has{" "}
              <Strong>"bold"</Strong> value. To make a text bold now you should
              use the <Strong>Strong</Strong> component, similar to{" "}
              <Strong>Emphasis</Strong> mentioned above.
            </ListItem>
            <ListItem>
              The <Emphasis>color, noSelect, overflow</Emphasis> props are now
              removed as they are no longer needed with the new implementation.
            </ListItem>
            <ListItem>
              The <Strong>Heading</Strong> component no longer had a bottom
              margin. Hence, the <Emphasis>marginBottom</Emphasis> prop is
              removed. For spacing under the headings please use the layout
              components.
            </ListItem>
            <ListItem>
              The <Emphasis>align</Emphasis> prop is now responsive and could
              have different values for different screen width. The{" "}
              <Strong>"justify"</Strong> value is no longer available.
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
-<Heading1 text="Compare plans" />
+<Heading variant="h1">Compare plans</Heading>
-<Heading2 text="Compare plans" />
+<Heading variant="h2">Compare plans</Heading>
-<Heading3 text="Compare plans" />
+<Heading variant="h3">Compare plans</Heading>
-<Heading4 text="Compare plans" />
+<Heading variant="h4">Compare plans</Heading>

<Heading
  ...
-  fontWeight="medium"
+  weight="medium"

-  color="red"
-  marginBottom
-  noSelect
-  overflow
>
  ...
</Heading>

<Heading
-  align="right"
+  align={["left", "right"]}
  ...
>
  ...
</Heading>
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

export default textMigrationGuide;
