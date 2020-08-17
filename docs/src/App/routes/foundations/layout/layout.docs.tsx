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
  CardStackSection,
  Placeholder,
} from "@origin-digital/ods-core";

const lipsum1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit, vel egestas felis pharetra non. Cras malesuada, massa nec ultricies efficitur, lectus ante consequat magna, a porttitor massa ex ut quam.";

const lipsum2 =
  "Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus. Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien finibus. Aenean rutrum in sem a ullamcorper. Integer ut euismod urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

export const docs = {
  Box: [
    {
      Code: () => (
        <Box padding="small">
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
      ),
    },
    {
      Code: () => (
        <Box padding={["small", "medium"]}>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
      ),
    },
    {
      Code: () => (
        <Box padding={["small", "large"]}>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
      ),
    },
  ],
  Card: [
    {
      Code: () => (
        <Card>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Card>
      ),
    },
  ],
  Stack: [
    {
      Code: () => (
        <Card>
          <Stack space="large">
            <Heading variant="h3">Heading</Heading>
            <Text>{lipsum1}</Text>
            <Text>{lipsum2}</Text>
          </Stack>
        </Card>
      ),
    },
    {
      Code: () => (
        <Card>
          <Stack space={["medium", "large"]}>
            <Heading variant="h3">Heading</Heading>
            <Text>{lipsum1}</Text>
            <Text>{lipsum2}</Text>
          </Stack>
        </Card>
      ),
    },
    {
      Code: () => (
        <Card>
          <Stack space="small" dividers={true}>
            <Heading variant="h3">Heading</Heading>
            <Text>{lipsum1}</Text>
            <Text>{lipsum2}</Text>
          </Stack>
        </Card>
      ),
    },
    {
      Code: () => (
        <Card>
          <Stack space="small">
            <Heading variant="h3">Heading</Heading>
            <Text>{lipsum1}</Text>
            <Divider />
            <Text>{lipsum2}</Text>
          </Stack>
        </Card>
      ),
    },
    {
      Code: () => (
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
      ),
    },
    {
      Code: () => (
        <Card>
          <Stack space="medium" alignX="center">
            <Heading align="center" variant="h4">
              Heading Text
            </Heading>
            <Text align="center">Lorem ipsum dolor sit amet.</Text>
          </Stack>
        </Card>
      ),
    },
  ],
  Columns: [
    {
      Code: () => (
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
      ),
    },
    {
      Code: () => (
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
      ),
    },
    {
      Code: () => (
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
      ),
    },
    {
      Code: () => (
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
      ),
    },
    {
      Code: () => (
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
      ),
    },
  ],
  Section: [
    {
      Code: () => (
        <Section>
          <Card>
            <Text>Hello World</Text>
          </Card>
        </Section>
      ),
    },
    {
      Code: () => (
        <Section hideGutter>
          <Card>
            <Text>Hello World</Text>
          </Card>
        </Section>
      ),
    },
  ],
  CardStackSection: [
    {
      Code: () => (
        <CardStackSection>
          <Card>
            <Placeholder />
          </Card>
          <Card>
            <Placeholder />
          </Card>
        </CardStackSection>
      ),
    },
  ],
};
