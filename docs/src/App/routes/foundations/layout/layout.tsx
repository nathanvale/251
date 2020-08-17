import React from "react";
import { Text, Stack, Columns, Column, Box } from "@origin-digital/ods-core";
import { SpaceVariants } from "@origin-digital/ods-types";
import { coreLayoutTheme } from "@origin-digital/ods-themes";
import { TextStack } from "../../../TextStack/TextStack";
import { DocsPage } from "../../../../types";
import { PageSection, Page } from "../../../Page/Page";
import Code from "../../../Code/Code";
import { missingSnippet } from "../../../ComponentDoc/ComponentDoc";
import { docs } from "./layout.docs";

let snippets: any;
try {
  snippets = require("../../../../snippets-layout.json");
} catch (error) {}

const spaceScale = [...Object.keys(coreLayoutTheme.space)] as SpaceVariants[];

const Layout = () => {
  const sections: PageSection[] = [
    {
      title: "Spacing",
      children: (
        <TextStack>
          <Text>
            ODS provides a standard white space scale that is available across
            the entire component suite. As much as possible, ODS tries to make
            use of this scale rather than generating custom spacing rules.
          </Text>
          <Stack space="xxsmall">
            {spaceScale
              .filter((space: any) => isNaN(space))
              .map((space, index) => (
                <Columns key={space} space="xsmall" alignY="center">
                  <Column width="content">
                    <Box style={{ width: 120 }} display="flex">
                      <Text>{space}</Text>
                      <Box paddingX="xxsmall" />
                      <Text variant="body-small">
                        ({coreLayoutTheme.space[index]}px)
                      </Text>
                    </Box>
                  </Column>
                  <Column width="content">
                    <Box display="flex">
                      <Box
                        backgroundColor="positive"
                        paddingLeft={space}
                        paddingTop="medium"
                      />
                    </Box>
                  </Column>
                </Columns>
              ))}
          </Stack>
        </TextStack>
      ),
    },
    {
      title: "Box",
      children: (
        <TextStack>
          <Text>
            Box is the most low-level layout component provided by ODS. Its job
            is to render an individual element on the screen.
          </Text>
          <Text>
            In terms of page layout, Box most notably provides a set of padding
            options which can be used to create container elements with internal
            spacing.
          </Text>
          <Box paddingLeft="xsmall">
            <Stack space="xxsmall">
              <Text>- padding</Text>
              <Text>- paddingX</Text>
              <Text>- paddingY</Text>
              <Text>- paddingTop</Text>
              <Text>- paddingBottom</Text>
              <Text>- paddingLeft</Text>
              <Text>- paddingRight</Text>
            </Stack>
          </Box>

          <Text>These options accept a value from our white space scale.</Text>
          <Text>
            For example, if you wanted to create a container element with small
            spacing on all sides:
          </Text>
          <Code codeString={snippets?.Box[0] || missingSnippet}>
            {docs.Box[0].Code()}
          </Code>
          <Text>
            These also support the responsive props format which allows you to
            specify an array of values for different screen sizes.
          </Text>
          <Text>
            For example, if you wanted small spacing on mobile but medium
            spacing from tablet upwards:
          </Text>
          <Code codeString={snippets?.Box[1] || missingSnippet}>
            {docs.Box[1].Code()}
          </Code>
          <Text>
            If required, youre also able to specify a different value for
            desktop screens.
          </Text>
          <Text>
            For example, if you wanted to set the previous examples spacing to
            large on desktop:
          </Text>
          <Code codeString={snippets?.Box[2] || missingSnippet}>
            {docs.Box[2].Code()}
          </Code>
        </TextStack>
      ),
    },
    {
      title: "Card",
      children: (
        <TextStack>
          <Text>
            Rather than nesting content in arbitrary Box elements, you may
            prefer to use standard Card elements instead.
          </Text>
          <Code codeString={snippets?.Card[0] || missingSnippet}>
            {docs.Card[0].Code()}
          </Code>
        </TextStack>
      ),
    },
    {
      title: "Stack",
      children: (
        <TextStack>
          <Text>
            The most common white space on screen is between elements stacked
            vertically. For this use case, ODS provides a Stack component that
            accepts a space prop.
          </Text>
          <Text>
            For example, if you wanted to render a stack of Heading and Text
            elements with large spacing between them:
          </Text>
          <Code codeString={snippets?.Stack[0] || missingSnippet}>
            {docs.Stack[0].Code()}
          </Code>
          <Text>
            Just like Box, you can also specify different spacing values for
            different screen sizes:
          </Text>
          <Code codeString={snippets?.Stack[1] || missingSnippet}>
            {docs.Stack[1].Code()}
          </Code>
          <Text>
            To visually break up content, you can insert dividers between all
            stack elements by setting the dividers prop on Stack:
          </Text>
          <Code codeString={snippets?.Stack[2] || missingSnippet}>
            {docs.Stack[2].Code()}
          </Code>
          <Text>
            If youd prefer to take control over the placement of dividers, you
            can use the Divider component directly:
          </Text>
          <Code codeString={snippets?.Stack[3] || missingSnippet}>
            {docs.Stack[3].Code()}
          </Code>
          <Text>
            Multiple Stack components can be nested to create more complex white
            space rules. For example, if you wanted to create multiple grouped
            blocks of text like you might see on a job summary card:
          </Text>
          <Code codeString={snippets?.Stack[4] || missingSnippet}>
            {docs.Stack[4].Code()}
          </Code>
          <Text>
            Stack also supports horizontal alignment. For example, if you wanted
            to centre align all content within a card:
          </Text>
          <Code codeString={snippets?.Stack[5] || missingSnippet}>
            {docs.Stack[5].Code()}
          </Code>
        </TextStack>
      ),
    },
    {
      title: "Columns",
      children: (
        <TextStack>
          <Text>
            If you need to lay out content horizontally, ODS provides the{" "}
            Columns and Column components:
          </Text>
          <Code codeString={snippets?.Columns[0] || missingSnippet}>
            {docs.Columns[0].Code()}
          </Code>
          <Text>
            If youd like the columns to stack vertically on smaller screens, you
            can provide the collapseBelow prop.
          </Text>
          <Text>
            For example, if you wanted cards to be rendered vertically on mobile
            but horizontally from tablet upwards:
          </Text>
          <Code codeString={snippets?.Columns[1] || missingSnippet}>
            {docs.Columns[1].Code()}
          </Code>
          <Text>
            All columns are of equal width by default, but you can also
            customise the width of each column individually.
          </Text>
          <Text>
            For example, if you wanted to render a main content area and a
            sidebar, collapsing to a single column on mobile:
          </Text>
          <Code codeString={snippets?.Columns[2] || missingSnippet}>
            {docs.Columns[2].Code()}
          </Code>
          <Text>
            If you want a column to be as small as possible, you can also set
            its width to content which ensures that its only as wide as the
            content within it.
          </Text>
          <Text>
            For example, if you wanted a card with a left-aligned Heading and a
            right-aligned ChevronLink:
          </Text>
          <Code codeString={snippets?.Columns[3] || missingSnippet}>
            {docs.Columns[3].Code()}
          </Code>
          <Text>
            If you have Column elements that are of varying height, you can
            center them vertically with the alignY prop:
          </Text>
          <Code codeString={snippets?.Columns[4] || missingSnippet}>
            {docs.Columns[4].Code()}
          </Code>
        </TextStack>
      ),
    },
    {
      title: "Section",
      children: (
        <TextStack>
          <Text>
            By default, all layout components will render full width. However,
            most applications will want to limit the width of content on the
            screen. In order to address this, ODS provides the Section component
            that sets a maximum width and centres content horizontally. This
            component should be at your root and not be nested.
          </Text>
          <Code codeString={snippets?.Section[0] || missingSnippet}>
            {docs.Section[0].Code()}
          </Code>
          <Text>
            If youd like a wider content block, you can optionally provide the
            hideGutter prop:
          </Text>
          <Code codeString={snippets?.Section[1] || missingSnippet}>
            {docs.Section[1].Code()}
          </Code>
        </TextStack>
      ),
    },
    {
      title: "CardStackSection",
      children: (
        <TextStack>
          <Text>
            CardStackSection is a versatile vertical card stacking component
            that managers responsive max-widths, distributed space and paddingY.
            This component should be at your root and not be nested.
          </Text>
          <Code codeString={snippets?.CardStackSection[0] || missingSnippet}>
            {docs.CardStackSection[0].Code()}
          </Code>
        </TextStack>
      ),
    },
  ];
  return (
    <Page
      title="Layout"
      description={
        <TextStack>
          <Text>
            The guiding principle for layout in ODS is that components should
            not provide surrounding white space. Instead, spacing between
            elements is owned entirely by layout components. This approach
            ensures that the system is as composable as possible while keeping
            white space completely predictable.
          </Text>
          <Text>
            With exception of Section and CardStackSection, all of the
            components referenced below can be infinitely nested within each
            other to create a wide variety of standard layouts. Getting a firm
            grasp of these components is an essential part of working
            effectively with ODS.
          </Text>
        </TextStack>
      }
      sections={sections}
      hideAnchorLinks
    />
  );
};

const page: DocsPage = {
  title: "Layout",
  component: Layout,
};

export default page;
