/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { LinkBaseProps } from "@origin-digital/ods-types";
import {
  TextLinkRenderer,
  TextLinkRendererProps,
} from "../TextLinkRenderer/TextLinkRenderer";
import { TrackedLink } from "..";

export interface TextLinkProps
  extends Omit<TextLinkRendererProps, "children">,
    LinkBaseProps {}

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
