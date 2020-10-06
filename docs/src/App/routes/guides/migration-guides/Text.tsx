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

const COMP_NAME = "Text";

export const textMigrationGuide: ComponentMigrationGuide = {
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
              The <Strong>Text</Strong> component is completely rebuilt to
              simplify typography. Now, the <Strong>Text</Strong> can now be
              nested and each component will inherit proper props (such as{" "}
              <Emphasis>weight, tone, variant</Emphasis>) from its parent
              component.
            </ListItem>
            <ListItem>
              The <Emphasis>italic</Emphasis> prop is now removed. To make a
              text italic now there is a new component called{" "}
              <Strong>Emphasis</Strong>, similar to <Strong>em</Strong> in html.
              You can wrap any part of your content in <Strong>Emphasis</Strong>{" "}
              and it will become italic. Note that the <Strong>Emphasis</Strong>{" "}
              component always need to be embedded in either a{" "}
              <Strong>Text</Strong> component or a <Strong>Heading</Strong> and
              is not a standalone component.
            </ListItem>
            <ListItem>
              The <Emphasis>weight</Emphasis> prop no longer has{" "}
              <Strong>"bold"</Strong> value. To make a text bold now you should
              use the <Strong>Strong</Strong> component, similar to{" "}
              <Strong>Emphasis</Strong> mentioned above.
            </ListItem>
            <ListItem>
              The <Emphasis>color</Emphasis> prop is removed. Now use{" "}
              <Emphasis>tone</Emphasis> prop instead. The color names are picked
              up from the theme palette.
            </ListItem>
            <ListItem>
              The <Emphasis>fontWeight</Emphasis> prop is renamed to{" "}
              <Emphasis>weight</Emphasis>.
            </ListItem>
            <ListItem>
              To follow the theme-base language of ODS, the{" "}
              <Emphasis>size</Emphasis> prop is now removed. You should use{" "}
              <Emphasis>variant</Emphasis> prop instead. Here is the mapping:
              <List type="disc">
                <ListItem>
                  <Strong>xs</Strong> -{">"} <Strong>body-small</Strong>
                </ListItem>
                <ListItem>
                  <Strong>sm</Strong> -{">"} <Strong>body</Strong>
                </ListItem>
                <ListItem>
                  <Strong>md</Strong> -{">"} <Strong>subtitle-small</Strong>
                </ListItem>
                <ListItem>
                  <Strong>lg</Strong> -{">"} <Strong>subtitle</Strong>
                </ListItem>
                <ListItem>
                  <Strong>xl</Strong> -{">"} No corresponding value
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              The <Emphasis>align</Emphasis> prop is now responsive and could
              have different values for different screen width. The{" "}
              <Strong>"justify"</Strong> value is no longer available.
            </ListItem>
            <ListItem>
              ODS has a{" "}
              <TextLink href={`${baseCompsURL}/MarkdownLite`}>
                new markdown component
              </TextLink>{" "}
              called <Strong>MarkdownLite</Strong>. As a result{" "}
              <Emphasis>markdown, markdownLinkMutator</Emphasis> props are
              removed from the API.
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
<Text
-  color="red"
+  tone="critical"
-  fontWeight="medium"
+  weight="medium"
-  overflow
>
  This text is the actual content.
</Text>

<Text
-  size="lg"
+  variant="subtitle"
>
  Some large text content.
</Text>

<Text
-  italic
>
-  This text is italic.
+  <Emphasis>This text is italic.</Emphasis>
</Text>

<Text
-  fontWeight="bold"
>
-  This text is bold.
+  <Strong>This text is bold.</Strong>
</Text>

<Text
-  align="right"
+  align={["left", "right"]}
  >
  This text is the actual content.
</Text>

<Text
-  markdown
-  markdownLinkMutator={ ()=>{} }
  >
+  <MarkdownLite>
    This text is **bold** text.
+  </MarkdownLite>
</Text>
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
