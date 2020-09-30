import React, { ReactNode, useContext } from "react";
import clsx from "clsx";
import { useWeightStyles } from "@origin-digital/ods-typography";
import { ComponentBaseProps } from "@origin-digital/ods-types";
import { TextContext } from "../Text/TextContextProvider";

export interface StrongProps extends ComponentBaseProps {
  children: ReactNode;
}

export const Strong = ({
  children,
  "data-id": dataId,
  className,
  ...rest
}: StrongProps) => {
  const inText = useContext(TextContext);
  return (
    <strong
      data-id={dataId}
      className={clsx(useWeightStyles(inText ? "medium" : "bold"), className)}
      {...rest}
    >
      {children}
    </strong>
  );
};

Strong.defaultProps = {
  "data-id": "strong",
};

Strong.displayName = "Strong";
