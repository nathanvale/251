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
import { TrackedLink } from "../TrackedLink";

export interface ChevronLinkProps
  extends Omit<ChevronLinkRendererProps, "children" | "variant">,
    OptionalTrackableProps {
  variant?: ChevronVaraints;
  href: LinkComponentProps["href"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
  domProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}
const defaultDataId = "chevron-link";
const defaultVariant = "primary";
const defaultPadding = "none";
export const ChevronLink = ({
  "data-id": dataId = defaultDataId,
  variant = defaultVariant,
  children,
  domProps,
  target,
  ...rest
}: ChevronLinkProps) => {
  return (
    <ChevronLinkRenderer variant={variant}>
      {({ chevronLinkStyles, IconChevron }) => (
        <TrackedLink
          trackingType={ChevronLink.displayName}
          trackingLabel={children}
          data-id={dataId}
          target={target}
          {...rest}
          domProps={{
            ...domProps,
            className: chevronLinkStyles,
          }}
        >
          <IconChevron />
          <span>{children}</span>
        </TrackedLink>
      )}
    </ChevronLinkRenderer>
  );
};

ChevronLink.defaultProps = {
  "data-id": defaultDataId,
  variant: defaultVariant,
  padding: defaultPadding,
};

ChevronLink.displayName = "ChevronLink";
