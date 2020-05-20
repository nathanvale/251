import React from "react";
import { Stack, StackProps } from "@origin-digital/ods-core";

interface TextStackProps {
  children: React.ReactNode;
  space?: StackProps["space"];
}

export const TextStack = ({
  space = ["medium", "large"],
  children,
}: TextStackProps) => <Stack space={space}>{children}</Stack>;
