import React from "react";

import {
  Text,
  Stack,
  Columns,
  Column,
  Box,
  Card,
  Heading,
  Placeholder,
  Button,
} from "@origin-digital/ods-core";

export const docs = {
  HighLevelComponents: [
    {
      Code: () => (
        <Card>
          <Heading variant="h4">Title</Heading>
          <Text>My first ODS component</Text>
          <Button>Click me</Button>
        </Card>
      ),
    },
  ],
  LayoutComponents: [
    {
      Code: () => (
        <Card>
          <Stack space="small">
            <Heading variant="h4">Title</Heading>
            <Text>My first ODS component</Text>
            <Button>Click me</Button>
          </Stack>
        </Card>
      ),
    },
    {
      Code: () => (
        <Card>
          <Stack space={["small", "medium"]}>
            <Heading variant="h4">Title</Heading>
            <Text>My first ODS component</Text>
            <Button>Click me</Button>
          </Stack>
        </Card>
      ),
    },
    {
      Code: () => (
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
      ),
    },
    {
      Code: () => (
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
      ),
    },
    {
      Code: () => (
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
      ),
    },
  ],
  NeedACustomComponent: [
    {
      Code: () => (
        <Box boxShadow="large" padding="large">
          <Text>My first ODS component</Text>
        </Box>
      ),
    },
  ],
  NeedResponsiveStyles: [
    {
      Code: () => (
        <Box display={["flex", "block"]}>
          <Heading variant="h4">Flex on small screen</Heading>
          <Heading variant="h4">Block on large screen</Heading>
        </Box>
      ),
    },
    {
      Code: () => (
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
      ),
    },
  ],
  NeedSemanticMarkup: [
    {
      Code: () => (
        <Card>
          <Box component="pre">
            <code>console.log("Hello World!");</code>
          </Box>
        </Card>
      ),
    },
  ],
};
