import React, { ReactNode } from "react";
import { Page } from "docs/src/types";
import { Text } from "@origin-digital/ods-lab";
import { TextStack } from "../../components/TextStack/TextStack";

const Heading = ({ children }: { children: ReactNode }) => (
  <Text color="grey56" weight="medium" size="xsmall">
    {children}
  </Text>
);

export const iconography: Page = {
  title: "Iconography",
  // eslint-disable-next-line react/display-name
  Component: () => {
    return (
      <TextStack>
        <Heading>Iconography</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </TextStack>
    );
  },
};
