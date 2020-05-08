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
import { useTracking } from "../_private/hooks/tracking";

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
const defaultDataId = "chevron-button";
const defaultVariant = "primary";
export const ChevronButton = ({
  "data-id": dataId = defaultDataId,
  variant = defaultVariant,
  children,
  domProps,
  ...rest
}: ChevronButtonProps) => {
  const { onClickCapture, ref } = useTracking({
    children,
    "data-id": dataId,
    type: ChevronButton.displayName,
  });
  return (
    <ChevronLinkRenderer variant={variant}>
      {({ chevronLinkStyles, ChevronContainer }) => (
        <button
          {...domProps}
          data-id={dataId}
          ref={ref}
          onClickCapture={onClickCapture}
          className={chevronLinkStyles}
          {...rest}
        >
          <ChevronContainer>{children}</ChevronContainer>
        </button>
      )}
    </ChevronLinkRenderer>
  );
};

ChevronButton.defaultProps = {
  "data-id": defaultDataId,
  variant: defaultVariant,
};

ChevronButton.displayName = "ChevronButton";
