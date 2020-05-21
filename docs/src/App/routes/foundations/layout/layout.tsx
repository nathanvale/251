import React from "react";
import {
  Text,
  Stack,
  Columns,
  Column,
  Box,
  Card,
  Heading,
  Divider,
  ChevronLink,
  Section,
  TextLink,
  CardStackSection,
  Placeholder,
} from "@origin-digital/ods-core";
import { SpaceVariants } from "@origin-digital/ods-types";
import { odsMasterTheme } from "@origin-digital/ods-themes";
import { TextStack } from "../../../TextStack/TextStack";
import { DocsPage } from "../../../../types";
import { PageSection, Page } from "../../../Page/Page";
import Code from "../../../Code/Code";

const spaceScale = [...Object.keys(odsMasterTheme.space)] as SpaceVariants[];
const lipsum1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit, vel egestas felis pharetra non. Cras malesuada, massa nec ultricies efficitur, lectus ante consequat magna, a porttitor massa ex ut quam.";

const lipsum2 =
  "Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus. Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien finibus. Aenean rutrum in sem a ullamcorper. Integer ut euismod urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

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
          <Stack space="small">
            {spaceScale
              .filter((space: any) => isNaN(space))
              .map((space, index) => (
                <Columns key={space} space="xsmall" alignY="center">
                  <Column width="content">
                    <Box style={{ width: 120 }} display="flex">
                      <Text>{space}</Text>
                      <Box paddingX="xxsmall" />
                      <Text variant="body-small">
                        ({odsMasterTheme.space[index]}px)
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
            {<TextLink href="#/components/Box">Box</TextLink>} is the most
            low-level layout component provided by ODS. Its job is to render an
            individual element on the screen.
          </Text>
          <Text>
            In terms of page layout,{" "}
            {<TextLink href="#/components/Box">Box</TextLink>} most notably
            provides a set of padding options which can be used to create
            container elements with internal spacing.
          </Text>
          <Box paddingLeft="xsmall">
            <Stack space="small">
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
          <Code>
            <Box padding="small">
              <Text>Lorem ipsum dolor sit amet.</Text>
            </Box>
          </Code>
          <Text>
            These also support the responsive props format which allows you to
            specify an array of values for different screen sizes.
          </Text>
          <Text>
            For example, if you wanted small spacing on mobile but medium
            spacing from tablet upwards:
          </Text>
          <Code>
            <Box padding={["small", "medium"]}>
              <Text>Lorem ipsum dolor sit amet.</Text>
            </Box>
          </Code>
          <Text>
            If required, youre also able to specify a different value for
            desktop screens.
          </Text>
          <Text>
            For example, if you wanted to set the previous examples spacing to
            large on desktop:
          </Text>
          <Code>
            <Box padding={["small", "large"]}>
              <Text>Lorem ipsum dolor sit amet.</Text>
            </Box>
          </Code>
        </TextStack>
      ),
    },
    {
      title: "Card",
      children: (
        <TextStack>
          <Text>
            Rather than nesting content in arbitrary{" "}
            {<TextLink href="#/components/Box">Box</TextLink>} elements, you may
            prefer to use standard{" "}
            {<TextLink href="#/components/Card">Card</TextLink>} elements
            instead.
          </Text>
          <Code>
            <Card>
              <Text>Lorem ipsum dolor sit amet.</Text>
            </Card>
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
            vertically. For this use case, ODS provides a{" "}
            {<TextLink href="#/components/Stack">Stack</TextLink>} component
            that accepts a space prop.
          </Text>
          <Text>
            For example, if you wanted to render a stack of{" "}
            {<TextLink href="#/components/Heading">Heading</TextLink>} and{" "}
            {<TextLink href="#/components/Text">Text</TextLink>} elements with
            large spacing between them:
          </Text>
          <Code>
            <Card>
              <Stack space="large">
                <Heading variant="h3">Heading</Heading>
                <Text>{lipsum1}</Text>
                <Text>{lipsum2}</Text>
              </Stack>
            </Card>
          </Code>
          <Text>
            Just like {<TextLink href="#/components/Box">Box</TextLink>}, you
            can also specify different spacing values for different screen
            sizes:
          </Text>
          <Code>
            <Card>
              <Stack space={["medium", "large"]}>
                <Heading variant="h3">Heading</Heading>
                <Text>{lipsum1}</Text>
                <Text>{lipsum2}</Text>
              </Stack>
            </Card>
          </Code>
          <Text>
            To visually break up content, you can insert dividers between all
            stack elements by setting the dividers prop on Stack:
          </Text>
          <Code>
            <Card>
              <Stack space="small" dividers={true}>
                <Heading variant="h3">Heading</Heading>
                <Text>{lipsum1}</Text>
                <Text>{lipsum2}</Text>
              </Stack>
            </Card>
          </Code>
          <Text>
            If youd prefer to take control over the placement of dividers, you
            can use the{" "}
            {<TextLink href="#/components/Divider">Divider</TextLink>} component
            directly:
          </Text>
          <Code>
            <Card>
              <Stack space="small">
                <Heading variant="h3">Heading</Heading>
                <Text>{lipsum1}</Text>
                <Divider />
                <Text>{lipsum2}</Text>
              </Stack>
            </Card>
          </Code>
          <Text>
            Multiple {<TextLink href="#/components/Stack">Stack</TextLink>}{" "}
            components can be nested to create more complex white space rules.
            For example, if you wanted to create multiple grouped blocks of text
            like you might see on a job summary card:
          </Text>
          <Code>
            <Card>
              <Stack space="small">
                <Heading variant="h4">Heading</Heading>
                <Stack space="small">
                  <Text>Line 1</Text>
                  <Text>Line 2</Text>
                  <Text>Line 3</Text>
                </Stack>
                <Stack space="small">
                  <Text>Line 1</Text>
                  <Text>Line 2</Text>
                  <Text>Line 3</Text>
                </Stack>
              </Stack>
            </Card>
          </Code>
          <Text>
            {<TextLink href="#/components/Stack">Stack</TextLink>} also supports
            horizontal alignment. For example, if you wanted to centre align all
            content within a card:
          </Text>
          <Code>
            <Card>
              <Stack space="medium" alignX="center">
                <Heading align="center" variant="h4">
                  Heading Text
                </Heading>
                <Text align="center">Lorem ipsum dolor sit amet.</Text>
              </Stack>
            </Card>
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
            {<TextLink href="#/components/Columns">Columns</TextLink>} and{" "}
            {<TextLink href="#/components/Column">Column</TextLink>} components:
          </Text>
          <Code>
            <Columns space="small">
              <Column>
                <Card>
                  <Text>Column 1</Text>
                </Card>
              </Column>
              <Column>
                <Card>
                  <Text>Column 2</Text>
                </Card>
              </Column>
            </Columns>
          </Code>
          <Text>
            If youd like the columns to stack vertically on smaller screens, you
            can provide the collapseBelow prop.
          </Text>
          <Text>
            For example, if you wanted cards to be rendered vertically on mobile
            but horizontally from tablet upwards:
          </Text>
          <Code>
            <Columns space="small" collapseBelow="md">
              <Column>
                <Card>
                  <Text>Column 1</Text>
                </Card>
              </Column>
              <Column>
                <Card>
                  <Text>Column 2</Text>
                </Card>
              </Column>
            </Columns>
          </Code>
          <Text>
            All columns are of equal width by default, but you can also
            customise the width of each column individually.
          </Text>
          <Text>
            For example, if you wanted to render a main content area and a
            sidebar, collapsing to a single column on mobile:
          </Text>
          <Code>
            <Columns space="small" collapseBelow="md">
              <Column width="1/3">
                <Card>
                  <Text>Sidebar</Text>
                </Card>
              </Column>
              <Column>
                <Card>
                  <Text>Main content</Text>
                </Card>
              </Column>
            </Columns>
          </Code>
          <Text>
            If you want a column to be as small as possible, you can also set
            its width to content which ensures that its only as wide as the
            content within it.
          </Text>
          <Text>
            For example, if you wanted a card with a left-aligned{" "}
            {<TextLink href="#/components/Heading">Heading</TextLink>} and a
            right-aligned{" "}
            {<TextLink href="#/components/ChevronLink">ChevronLink</TextLink>}:
          </Text>
          <Code>
            <Card>
              <Stack space="medium">
                <Columns space="small">
                  <Column>
                    <Heading variant="h3">Card heading</Heading>
                  </Column>
                  <Column width="content">
                    <ChevronLink href="">Find out more</ChevronLink>
                  </Column>
                </Columns>
                <Text>Card content</Text>
              </Stack>
            </Card>
          </Code>
          <Text>
            If you have Column elements that are of varying height, you can
            center them vertically with the alignY prop:
          </Text>
          <Code>
            <Columns space="small" alignY="center">
              <Column>
                <Card>
                  <Stack space="medium" alignX="center">
                    <Text>Column</Text>
                    <Text>Column</Text>
                  </Stack>
                </Card>
              </Column>
              <Column>
                <Card>
                  <Stack space="medium" alignX="center">
                    <Text>Column</Text>
                    <Text>Column</Text>
                    <Text>Column</Text>
                    <Text>Column</Text>
                  </Stack>
                </Card>
              </Column>
              <Column>
                <Card>
                  <Stack space="medium" alignX="center">
                    <Text>Column</Text>
                    <Text>Column</Text>
                  </Stack>
                </Card>
              </Column>
            </Columns>
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
            screen. In order to address this, ODS provides the{" "}
            {<TextLink href="#/components/Section">Section</TextLink>} component
            that sets a maximum width and centres content horizontally. This
            component should be at your root and not be nested.
          </Text>
          <Code>
            <Section>
              <Card>
                <Text>Hello World</Text>
              </Card>
            </Section>
          </Code>
          <Text>
            If youd like a wider content block, you can optionally provide the
            hideGutter prop:
          </Text>
          <Code>
            <Section hideGutter>
              <Card>
                <Text>Hello World</Text>
              </Card>
            </Section>
          </Code>
        </TextStack>
      ),
    },
    {
      title: "CardStackSection",
      children: (
        <TextStack>
          <Text>
            {
              <TextLink href="#/components/CardStackSection">
                CardStackSection
              </TextLink>
            }{" "}
            is a versatile vertical card stacking component that managers
            responsive max-widths, distributed space and paddingY. This
            component should be at your root and not be nested.
          </Text>
          <Code>
            <CardStackSection>
              <Card>
                <Placeholder />
              </Card>
              <Card>
                <Placeholder />
              </Card>
            </CardStackSection>
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
            With exception of{" "}
            {<TextLink href="#/components/Section">Section</TextLink>} and{" "}
            {
              <TextLink href="#/components/CardStackSection">
                CardStackSection
              </TextLink>
            }
            , all of the components referenced below can be infinitely nested
            within each other to create a wide variety of standard layouts.
            Getting a firm grasp of these components is an essential part of
            working effectively with ODS.
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
