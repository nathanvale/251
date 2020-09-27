import React from "react";
import {
  Emphasis,
  List,
  ListItem,
  Stack,
  Strong,
  Text,
  TextLink,
} from "@origin-digital/ods-core";
import { DocsPage } from "../../../../types";
import { Page, PageSection } from "../../../Page/Page";
import { ComponentMigrationGuide, ODS_ADDRESS } from "./consts";
import { migrationGuides } from "./migration-guide-list";

const odsSupportLink = (
  <TextLink href="https://origindigital.slack.com/archives/CQ6T5T0R0">
    #design-system-support
  </TextLink>
);

const MigrationGuide = () => {
  const sections: PageSection[] = [
    {
      title: "Technical considerations",
      children: (
        <Stack>
          <Text>
            Component APIs have been revisited, rather than being straight
            ports. Across the board, we've taken this as an opportunity to
            improve APIs with the benefit of hindsight. Whenever migrating a
            component to ODS, please make sure you reference ODS's{" "}
            <TextLink href={ODS_ADDRESS}>API documentation</TextLink>.
          </Text>
          <Text>
            ODS is mostly built on top of the popular and open source
            Material-UI (MUI) library. This means the actual implementation of
            most of our components are provided via MUI. This helps us reduce
            our maintenance and development costs moving forward.
          </Text>
          <Text>
            Accessibility is another key feature of ODS that is achieved by
            adopting MUI as the underlying implementation.
          </Text>
          <Text>
            ODS is a <Emphasis>theme-based</Emphasis> library and every app that
            uses it must provide the <Strong>OriginThemeProvider</Strong> at the
            root of the app.
          </Text>
          <Text>
            We have designed ODS for maximum consistency in the API language. As
            this consistency is critical to reduce the fatigue of consumers we
            are very strict about not violating it. In most cases where it made
            sense we tend to keep our API as close to MUI as possible. However,
            there are a number of cases where we simplified the consumer
            experience by making opinion and providing our own API. There might
            be cases that our API does not support a functionality while the
            underlying MUI component provides it. In such cases, and to provide
            maximum flexibility, we have provided a scape hatch for all MUI
            based components (a prop called <Strong>muiProps</Strong>).
          </Text>
          <Text>
            There are a number of components for which MUI lacks a proper
            counterpart, e.g. Layout components. These components are built from
            scratch and as a result will not expose <Strong>muiProps</Strong>{" "}
            prop.
          </Text>
          <Text>
            ODS has a philosophy about layout and that is to avoid pixel-perfect
            designs. We made decision to follow this philosophy as it will
            liberate developers from spending long hours pixel-perfecting their
            app according to designs and hence move faster in their development.
            To do this, we have a state-of-the-art Layout system that provides
            all the necessary spacings/sizing one might need both horizontally
            and vertically. It is all mobile-first and responsive as well. This
            mean you cannot define <Strong>width</Strong> or{" "}
            <Strong>height</Strong> of any components in pixel. Most components
            either have a <Emphasis>content width</Emphasis>,
            <Emphasis>full width</Emphasis> or a T-shirt sized list of values.
          </Text>
        </Stack>
      ),
    },
    {
      title: "Component migration guides",
      children: (
        <>
          <Text>
            Select a link below to see the migration guides for the
            corresponding component:
          </Text>
          <List space="xxsmall">
            {migrationGuides.map(
              ({ ListItemComp }: ComponentMigrationGuide, idx) => (
                <ListItem key={idx}>{(ListItemComp as any)()}</ListItem>
              )
            )}
          </List>
        </>
      ),
    },
  ];
  return (
    <Page
      title="Migration guide"
      description={
        <Stack>
          <Text>
            This document provides guidance for migrating from{" "}
            <Strong>style-guide</Strong> package to Origin Desgin System (ODS)
            components, and most importantly the ones in{" "}
            <Strong>@origin-digitall/ods-core</Strong>.
          </Text>
          <Text>
            If you have any questions or concerns or need assistance in
            migrating your app from <Strong>style-guide</Strong>, please reach
            out to us in {odsSupportLink} channel.
          </Text>
        </Stack>
      }
      sections={sections}
    />
  );
};

const page: DocsPage = {
  title: "Migration guide",
  component: MigrationGuide,
};

export default page;
