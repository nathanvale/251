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
  baseCompsURL,
  baseMigrationGuidesURL,
  ComponentMigrationGuide,
  STYLE_GUIDE_URL,
} from "./consts";

const COMP_NAME = "TextField";

export const textFieldMigrationGuide: ComponentMigrationGuide = {
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
              The original <Strong>TextField</Strong> component in style guide
              was bloated with complicated APIs. In order to simplify its
              consumption as well as implementation we have completely
              redesigned it API. During this process we removed a number of
              complex yet rarely used features from <Strong>TextField</Strong>.
              The new component though is very flexible and those features could
              be easily implemented on top of it via the consumer.
            </Text>
            <Text>
              That being said, whenever it made sense we kept the API similar so
              that the migration is as smooth as possible.
            </Text>
          </Stack>
        ),
      },
      {
        title: "API Changes",
        children: (
          <List>
            <ListItem>
              As in all other field component, the <Emphasis>error</Emphasis>{" "}
              prop is now changed from a <Strong>string</Strong> to{" "}
              <Strong>boolean</Strong>. To show an error message, you now need
              to set the <Strong>helperText</Strong> prop when{" "}
              <Emphasis>error</Emphasis> is <Strong>true</Strong>.
            </ListItem>
            <ListItem>
              The <Emphasis>helpText</Emphasis> is renamed to{" "}
              <Emphasis>helperText</Emphasis>. The new prop also accepts any{" "}
              <Strong>ReactNode</Strong> allowing maximum customisability of the
              helper text.
            </ListItem>
            <ListItem>
              For accessibility reasons, <Emphasis>id</Emphasis> is now a
              required prop and replaces the old <Emphasis>name</Emphasis> prop.
            </ListItem>
            <ListItem>
              The <Emphasis>disableIcon</Emphasis> prop is removed. The new{" "}
              <Strong>TextField</Strong> component never shows an icon by
              default unless <Emphasis>endIcon</Emphasis> prop is explicitly
              set.
            </ListItem>
            <ListItem>
              The <Emphasis>icon</Emphasis> prop is replaced with{" "}
              <Emphasis>endIcon</Emphasis>. The <Emphasis>endIcon</Emphasis>{" "}
              could be any of below values:
              <List type="disc" space="xsmall">
                <ListItem>
                  <Strong>"success"</Strong>: will render the green tick
                </ListItem>
                <ListItem>
                  <Strong>"error"</Strong>: will render the red error icon
                </ListItem>
                <ListItem>
                  <Strong>"validating"</Strong>: will render the spinner
                </ListItem>
                <ListItem>
                  any other <Strong>ReactNode</Strong>: will render that node
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              The <Emphasis>setInputRef</Emphasis> prop is now renamed to{" "}
              <Emphasis>inputRed</Emphasis> to match Material UI conventions.
            </ListItem>
            <ListItem>
              The <Emphasis>spinner</Emphasis> prop is no longer available. To
              show the spinner now you should set <Emphasis>endIcon</Emphasis>{" "}
              to <Strong>"validating"</Strong>.
            </ListItem>
            <ListItem>
              All below props which were in charge of masking the component are
              now removed. If a use case comes up they should be implemented by
              the consumer:
              <List type="disc" space="xsmall">
                <ListItem>
                  <Emphasis>maxLengthExcludeChars</Emphasis>
                </ListItem>
                <ListItem>
                  <Emphasis>maxLengthToDisplay</Emphasis>
                </ListItem>
                <ListItem>
                  <Emphasis>showCharacterCount</Emphasis>
                </ListItem>
                <ListItem>
                  <Emphasis>transform</Emphasis>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              The <Emphasis>orderHiddenInputLast</Emphasis> prop is no longer
              available as the bug it was fixing is no longer available in the
              new implementation.
            </ListItem>
            <ListItem>
              The <Emphasis>renderOverlay</Emphasis> prop is no longer
              available. One can use <Emphasis>muiProps</Emphasis> for lower
              level customisations of the component.
            </ListItem>
            <ListItem>
              The <Emphasis>touched</Emphasis> prop is not a concern of a visual
              component (<Strong>TextField</Strong> is focused with visual
              concerns). It belongs to a <Strong>Form</Strong> solution. Hence,
              this prop is also removed.
            </ListItem>
            <ListItem>
              The <Emphasis>width</Emphasis> prop is now removed as the{" "}
              <Strong>TextField</Strong> is always full width.
            </ListItem>
            <ListItem>
              ODS has a{" "}
              <TextLink href={`${baseCompsURL}/MarkdownLite`}>
                new markdown component
              </TextLink>{" "}
              called <Strong>MarkdownLite</Strong>. As a result the{" "}
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
<TextField
  ...
-  error="Error Message"
+  error={true}
+  helperText="Error Message"

-  name="dp1"
+  id="dp1"

-  icon={IconCheck}
+  endIcon={<IconCheck />}

-  setInputRef={ ()=>{} }
+  inputRef={ ()=>{} }

-  spinner
+  endIcon="validating"

-  disableIcon
-  maxLengthExcludeChars={["-"]}
-  maxLengthToDisplay={7}
-  orderHiddenInputLast
-  renderOverlay={ ()=>{} }
-  showCharacterCount
-  touched
-  transform
-  width="200px"
/>

<TextField
-  showCharacterCount
-  helpText="BSB is 7 chars max"
+  helperText={
+    <Columns>
+      <Column>BSB is 7 chars max</Column>
+      <Column width="content">3/7</Column>
+    </Columns>
+  }
/>

<TextField
-  helpText="Some info"
+  helperText="Some info"
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

export default textFieldMigrationGuide;
