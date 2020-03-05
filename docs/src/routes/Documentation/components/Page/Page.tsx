import React, { ReactNode } from "react";
import { Stack } from "@origin-digital/ods-core";

export interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => (
  <Stack space="small">{children}</Stack>
);
