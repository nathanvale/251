/* eslint-disable jsx-a11y/anchor-has-content */
import React, { AnchorHTMLAttributes } from "react";
import {
  OptionalTrackableProps,
  LinkComponentProps,
  ChevronVaraints,
} from "@origin-digital/ods-types";
import {
  ChevronLinkRenderer,
  ChevronLinkRendererProps,
} from "../ChevronLinkRenderer/ChevronLinkRenderer";

export interface ChevronLinkProps
  extends Omit<ChevronLinkRendererProps, "children" | "variant">,
    OptionalTrackableProps {
  variant?: ChevronVaraints;
  href: LinkComponentProps["href"];
  children?: React.ReactNode;
  domProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;
}

const defaultVariant = "primary";
export const ChevronLink = ({
  "data-id": dataId,
  variant = defaultVariant,
  children,
  domProps,
  ...rest
}: ChevronLinkProps) => (
  <ChevronLinkRenderer variant={variant}>
    {({ chevronLinkStyles, ChevronContainer }) => (
      <a {...domProps} data-id={dataId} {...rest} className={chevronLinkStyles}>
        <ChevronContainer>{children}</ChevronContainer>
      </a>
    )}
  </ChevronLinkRenderer>
);

ChevronLink.defaultProps = {
  "data-id": "chevron-link",
  variant: defaultVariant,
};

ChevronLink.displayName = "ChevronLink";
