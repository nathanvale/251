import React, { ReactNode } from "react";
import { ComponentBaseProps } from "@origin-digital/ods-types";

export interface EmphasisProps extends Omit<ComponentBaseProps, "children"> {
  children: ReactNode;
}

export const Emphasis = ({ children, "data-id": dataId }: EmphasisProps) => (
  <em data-id={dataId}>{children}</em>
);

Emphasis.defaultProps = {
  "data-id": "emphasis",
};

Emphasis.displayName = "Emphasis";
