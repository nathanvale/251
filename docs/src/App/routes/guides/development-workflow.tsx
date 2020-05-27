import React from "react";
import {
  Text,
  Heading,
  TextLink,
  Strong,
  Card,
  Stack,
  Columns,
  Column,
  Box,
  Placeholder,
  Button,
} from "@origin-digital/ods-core";
import Code from "../../Code/Code";
import { DocsPage } from "../../../types";
import { Page, PageSection } from "../../Page/Page";
import { TextStack } from "../../TextStack/TextStack";

const odsSupportLink = (
  <TextLink href="https://origindigital.slack.com/archives/CQ6T5T0R0">
    #design-system-support
  </TextLink>
);

const DevelopmentWorkflow = () => {
  const sections: PageSection[] = [
    {
      title: "Working with components",
      children: (
        <TextStack>
          <Text>
            ODS provides consumers with a suite of components that are powered
            by an underlying themed styling system.
          </Text>
          <Text>
            The idealistic goal is that consumers should be able to build their
            experiences entirely from ODS components—using only the prop
            interfaces they expose. If done correctly, our products should be
            expressed exclusively using the design system’s language, which
            inherently means that they can be adapted to any theme that ODS
            supports.
          </Text>
          <Text>
            However, it’s expected that you’ll find gaps in the system, so ODS
            also provides lower level building blocks for generating custom
            components.
          </Text>
        </TextStack>
      ),
    },
    {
      title: "High level components",
      children: (
        <TextStack>
          <Text>
            ODS’s high level components are most likely the ones you would come
            to expect from a design system, e.g.{" "}
            <TextLink href="/components/Text">Text</TextLink>,{" "}
            <TextLink href="/components/Heading">Heading</TextLink>,{" "}
            <TextLink href="/components/Card">Card</TextLink>,{" "}
            <TextLink href="/components/Button">Button</TextLink>, etc.
          </Text>
          <Text>
            For these high layout level components, we have opted against
            supporting style overrides via <code>className</code> and{" "}
            <code>style</code> props. This ensures that gaps in the design
            system are surfaced rather than encouraging consumers to constantly
            apply workarounds. MUI components that support ‘muiProps’ are an
            expection to this rule.
          </Text>
          <Text>
            An example of composing a simple view leveraging some of these could
            be:
          </Text>
          <Code>
            <Card>
              <Heading variant="h4">Title</Heading>
              <Text>My first ODS component</Text>
              <Button>Click me</Button>
            </Card>
          </Code>
          <Text>
            You’ll notice that each of these components don’t provide any
            surrounding white space. This is where our layout components come
            in.
          </Text>
        </TextStack>
      ),
    },
    {
      title: "Layout components",
      children: (
        <TextStack>
          <Text>
            In order to distribute white space evenly between components, wrap
            sibling elements in a{" "}
            <TextLink href="/components/Stack">Stack</TextLink> component with a
            custom <code>space</code> property. For example, if you wanted{" "}
            <code>small</code> space between items in a{" "}
            <TextLink href="/components/Stack">Stack</TextLink>:
          </Text>
          <Code>
            <Card>
              <Stack space="small">
                <Heading variant="h4">Title</Heading>
                <Text>My first ODS component</Text>
                <Button>Click me</Button>
              </Stack>
            </Card>
          </Code>
          <Text>
            The <code>space</code> property is a responsive prop, which means
            that it can also accept an array of values representing each
            breakpoint. For example, if you wanted <code>small</code> space on
            mobile and <code>medium</code> space on desktop:
          </Text>
          <Code>
            <Card>
              <Stack space={["small", "medium"]}>
                <Heading variant="h4">Title</Heading>
                <Text>My first ODS component</Text>
                <Button>Click me</Button>
              </Stack>
            </Card>
          </Code>
          <Text>
            For more granular control across all 5 breakpoints, <code>xs</code>,{" "}
            <code>sm</code>, <code>md</code>, <code>lg</code> and{" "}
            <code>xl</code>, distributed space can be controlled responsively by
            passing in an object with breakpoints as keys and tshirt sizes as
            values.
          </Text>
          <Code>
            <Stack
              space={{
                lg: "large",
                md: "medium",
                sm: "small",
                xl: "xxlarge",
                xs: "none",
              }}
            >
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </Stack>
          </Code>
          <Text>
            For horizontal layouts,{" "}
            <TextLink href="/components/Columns">Columns</TextLink> provides
            various responsive rules for laying out content. For example, if you
            wanted to render a two-column layout that collapses to a single
            column on mobile:
          </Text>
          <Code>
            <Columns space="small" collapseBelow="md">
              <Column>
                <Card>
                  <Stack space="small">
                    <Heading variant="h4">Column 1</Heading>
                    <Text>My first ODS component</Text>
                  </Stack>
                </Card>
              </Column>
              <Column>
                <Card>
                  <Stack space="small">
                    <Heading variant="h4">Column 2</Heading>
                    <Text>My second ODS component</Text>
                  </Stack>
                </Card>
              </Column>
            </Columns>
          </Code>
          <Text>
            This <code>space</code> property is also responsive, supporting an
            array of values for each breakpoint. For example, if you wanted{" "}
            <code>xxsmall</code> space on mobile and <code>large</code> space on
            desktop:
          </Text>
          <Code>
            <Columns space={["xxsmall", "large"]} collapseBelow="md">
              <Column>
                <Card>
                  <Stack space="small">
                    <Heading variant="h4">Column 1</Heading>
                    <Text>My first ODS component</Text>
                  </Stack>
                </Card>
              </Column>
              <Column>
                <Card>
                  <Stack space="small">
                    <Heading variant="h4">Column 2</Heading>
                    <Text>My second ODS component</Text>
                  </Stack>
                </Card>
              </Column>
            </Columns>
          </Code>
        </TextStack>
      ),
    },
    {
      title: "Need a custom component?",
      children: (
        <TextStack>
          <Text>
            If you’re unable to satisfy a design using the built-in set of
            higher level components, ODS also provides consumers with the{" "}
            <TextLink href="/components/Box">Box</TextLink> component that
            provides direct access to the themed atomic styles that ODS uses
            internally, without the overhead of having to create and import a
            separate style sheet. A nice side-effect of this approach is that
            your application will be reusing existing CSS rules rather than
            generating new ones, keeping your bundle size to a minimum.
          </Text>
          <Text>
            The prop names for <TextLink href="/components/Box">Box</TextLink>{" "}
            mostly mimic standard CSS properties, while their values are more
            semantic.
          </Text>
          <Code>
            <Box boxShadow="large" padding="large">
              <Text>My first ODS component</Text>
            </Box>
          </Code>
          <Text>
            For more details, view the complete{" "}
            <TextLink href="/components/Box">Box documentation</TextLink>. For
            TypeScript users, you should also find that the Box API is available
            for autocompletion and type checking within your editor.
          </Text>
        </TextStack>
      ),
    },
    {
      title: "Need responsive styles?",
      children: (
        <TextStack>
          <Text>
            One of the main reasons for needing to create custom CSS has been to
            define responsive rules. The{" "}
            <TextLink href="/components/Box">Box</TextLink> component makes this
            possible via <Strong>responsive props,</Strong> which are provided
            as an array of values-one for screens smaller than desktop and one
            for screens at desktop or larger.
          </Text>
          <Text>
            For example, if we wanted to change the value for{" "}
            <code>display</code> responsively:
          </Text>
          <Code>
            <Box display={["flex", "block"]}>
              <Heading variant="h4">Flex on small screen</Heading>
              <Heading variant="h4">Block on large screen</Heading>
            </Box>
          </Code>
          <Text>
            For a fine tuned approach to responsive breakpoints, responsive
            props can also be provided as an object with breakpoints as keys and
            tshirt sizes as values:
          </Text>
          <Code>
            <Box
              padding={{
                xs: "xxsmall",
                sm: "xsmall",
                md: "small",
                lg: "medium",
                xl: "large",
              }}
            >
              <Heading variant="h4">Responsive padding</Heading>
            </Box>
          </Code>
          <Text>
            For a list of low-level responsive props, check out the{" "}
            <TextLink href="/components/Box">Box documentation.</TextLink>
          </Text>
          <Text>
            Other components also support responsive props. Keep an eye out for
            props that are of type {`ResponsiveProp<any>`}.
          </Text>
        </TextStack>
      ),
    },
    {
      title: "Need semantic markup?",
      children: (
        <TextStack>
          {" "}
          <Text>
            A key difference with ODS is that it doesn’t use a standard global
            CSS reset. Instead, element styles are reset at the component level
            via <TextLink href="/components/Box">Box</TextLink> and its{" "}
            <code>component</code> prop.
          </Text>
          <Text>
            For example, in order to render a semantic <code>pre</code> element
            without the native browser styles:
          </Text>
          <Code>
            <Card>
              <Box component="pre">
                <code>console.log("Hello World!");</code>
              </Box>
            </Card>
          </Code>
        </TextStack>
      ),
    },
    {
      title: "Have a question that wasn’t answered?",
      children: (
        <>
          <Text>Reach out to us in {odsSupportLink}.</Text>
        </>
      ),
    },
  ];
  return (
    <Page
      title="Development workflow"
      description="This document aims to provide guidance for consumers on how best to build
      interfaces that properly leverage ODS."
      sections={sections}
    />
  );
};

const page: DocsPage = {
  title: "Development workflow",
  component: DevelopmentWorkflow,
};

export default page;
