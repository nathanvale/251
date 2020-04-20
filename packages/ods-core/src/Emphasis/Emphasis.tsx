import React, { ReactNode } from "react";

export interface EmphasisProps {
  children: ReactNode;
  "data-id"?: string;
}

export const Emphasis = ({ children, "data-id": dataId }: EmphasisProps) => (
  <em data-id={dataId}>{children}</em>
);

Emphasis.defaultProps = {
  "data-id": "emphasis",
};

Emphasis.displayName = "Emphasis";
