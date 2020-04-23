/* eslint-disable jsx-a11y/anchor-has-content */
import React, { AllHTMLAttributes } from "react";
import {
  OptionalTrackableProps,
  ChevronVaraints,
} from "@origin-digital/ods-types";
import {
  ChevronLinkRenderer,
  ChevronLinkRendererProps,
} from "../ChevronLinkRenderer/ChevronLinkRenderer";

export interface ChevronButtonProps
  extends Omit<ChevronLinkRendererProps, "children" | "variant">,
    OptionalTrackableProps {
  variant?: ChevronVaraints;
  onClick?: AllHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  domProps?: Omit<
    AllHTMLAttributes<HTMLButtonElement>,
    "onClick" | "children" | "type"
  >;
}

const defaultVariant = "primary";
export const ChevronButton = ({
  "data-id": dataId,
  variant = defaultVariant,
  children,
  domProps,
  ...rest
}: ChevronButtonProps) => (
  <ChevronLinkRenderer variant={variant}>
    {({ chevronLinkStyles, ChevronContainer }) => (
      <button
        {...domProps}
        data-id={dataId}
        {...rest}
        className={chevronLinkStyles}
      >
        <ChevronContainer>{children}</ChevronContainer>
      </button>
    )}
  </ChevronLinkRenderer>
);

ChevronButton.defaultProps = {
  "data-id": "chevron-button",
  variant: defaultVariant,
};

ChevronButton.displayName = "ChevronButton";
