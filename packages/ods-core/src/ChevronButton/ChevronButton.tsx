/* eslint-disable jsx-a11y/anchor-has-content */
import React, { AllHTMLAttributes } from "react";
import { ButtonColor } from "@origin-digital/ods-types";
import {
  ChevronLinkRenderer,
  ChevronLinkRendererProps,
} from "../ChevronLinkRenderer/ChevronLinkRenderer";
import { Text } from "../Text";
import { useTracking } from "../TrackingProvider";

export interface ChevronButtonProps
  extends Omit<ChevronLinkRendererProps, "children" | "color"> {
  color?: ButtonColor;
  onClick?: AllHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  domProps?: Omit<
    AllHTMLAttributes<HTMLButtonElement>,
    "onClick" | "children" | "type"
  >;
}
const defaultDataId = "chevron-button";
const defaultColor = "primary";
export const ChevronButton = ({
  "data-id": dataId = defaultDataId,
  color = defaultColor,
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
    <ChevronLinkRenderer color={color}>
      {({ chevronLinkStyles, IconChevron }) => (
        <button
          data-id={dataId}
          ref={ref}
          onClickCapture={onClickCapture}
          className={chevronLinkStyles}
          {...rest}
          {...domProps}
        >
          <IconChevron />
          <Text>{children}</Text>
        </button>
      )}
    </ChevronLinkRenderer>
  );
};

ChevronButton.defaultProps = {
  "data-id": defaultDataId,
  color: defaultColor,
};

ChevronButton.displayName = "ChevronButton";
