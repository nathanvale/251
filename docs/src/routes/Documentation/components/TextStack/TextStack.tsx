import React, { ReactElement } from "react";
import { Box, Stack, StackProps } from "@origin-digital/ods-core";

interface TextStackProps {
  children: ReactNodeNoStrings;
  space?: StackProps["space"];
}

interface ReactNodeArray extends Array<ReactNodeNoStrings> {}

type ReactNodeNoStrings =
  | ReactElement
  | ReactNodeArray
  | boolean
  | null
  | undefined;

export const TextStack = ({ space = "xlarge", children }: TextStackProps) => (
  <Box>
    <Stack space={space}>{children}</Stack>
  </Box>
);
