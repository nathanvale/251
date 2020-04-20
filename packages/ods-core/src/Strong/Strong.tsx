import React, { ReactNode, useContext } from "react";
import { useWeightStyles } from "../_private/hooks/typography";
import { TextContext } from "../Text/TextContext";

export interface StrongProps {
  children: ReactNode;
  "data-id"?: string;
}

export const Strong = ({ children, "data-id": dataId }: StrongProps) => {
  const inText = useContext(TextContext);
  return (
    <strong
      data-id={dataId}
      className={useWeightStyles(inText ? "medium" : "bold")}
    >
      {children}
    </strong>
  );
};

Strong.defaultProps = {
  "data-id": "strong",
};

Strong.displayName = "Strong";
