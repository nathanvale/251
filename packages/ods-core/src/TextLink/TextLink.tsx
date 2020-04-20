/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import {
  OptionalTrackableProps,
  LinkComponentProps,
} from "@origin-digital/ods-types";
import {
  TextLinkRenderer,
  TextLinkRendererProps,
} from "../TextLinkRenderer/TextLinkRenderer";

export interface TextLinkProps
  extends Omit<TextLinkRendererProps, "children">,
    OptionalTrackableProps,
    Omit<LinkComponentProps, "className" | "style"> {}

export const TextLink = ({ "data-id": dataId, ...props }: TextLinkProps) => (
  <TextLinkRenderer data-id={dataId}>
    {(styleProps) => <a {...props} {...styleProps} />}
  </TextLinkRenderer>
);

TextLink.defaultProps = {
  "data-id": "text-link",
};

TextLink.displayName = "TextLink";
