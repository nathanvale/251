/* eslint-disable jsx-a11y/anchor-has-content */
import React, { AnchorHTMLAttributes } from "react";
import {
  OptionalTrackableProps,
  LinkComponentProps,
} from "@origin-digital/ods-types";
import {
  TextLinkRenderer,
  TextLinkRendererProps,
} from "../TextLinkRenderer/TextLinkRenderer";
import { TrackedLink } from "..";

export interface TextLinkProps
  extends Omit<TextLinkRendererProps, "children">,
    OptionalTrackableProps {
  href: LinkComponentProps["href"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  children?: React.ReactNode;
  domProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

const defaultDataId = "text-link";

export const TextLink = ({
  "data-id": dataId = defaultDataId,
  children,
  domProps,
  target,
  ...rest
}: TextLinkProps) => {
  return (
    <TextLinkRenderer>
      {({ textLinkStyles }) => (
        <TrackedLink
          domProps={{ ...domProps, className: textLinkStyles }}
          trackingType={TextLink.displayName}
          trackingLabel={children}
          data-id={dataId}
          target={target}
          {...rest}
        >
          {children}
        </TrackedLink>
      )}
    </TextLinkRenderer>
  );
};

TextLink.defaultProps = {
  "data-id": defaultDataId,
};

TextLink.displayName = "TextLink";
