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
import { TrackedLink } from "..";

export interface ChevronLinkProps
  extends Omit<ChevronLinkRendererProps, "children" | "variant">,
    OptionalTrackableProps {
  variant?: ChevronVaraints;
  href: LinkComponentProps["href"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
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
          domProps={{ ...domProps, className: chevronLinkStyles }}
          trackingType={ChevronLink.displayName}
          trackingLabel={children}
          data-id={dataId}
          target={target}
          {...rest}
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
