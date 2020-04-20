import React, { ReactNode } from "react";
import { Page } from "docs/src/types";
import { DocsText } from "@origin-digital/ods-lab";
import { TextStack } from "../../components/TextStack/TextStack";

const Heading = ({ children }: { children: ReactNode }) => (
  <DocsText color="grey600" weight="medium" size="xsmall">
    {children}
  </DocsText>
);

export const page: Page = {
  title: "Layout",
  // eslint-disable-next-line react/display-name
  Component: () => {
    return (
      <TextStack>
        <Heading>Layout</Heading>
        <DocsText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </DocsText>
      </TextStack>
    );
  },
};
