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
import { useTracking } from "../_private/hooks/tracking";

export interface TextLinkProps
  extends Omit<TextLinkRendererProps, "children">,
    OptionalTrackableProps,
    Omit<LinkComponentProps, "className" | "style"> {}

const defaultDataId = "text-link";

export const TextLink = ({
  "data-id": dataId = defaultDataId,
  children,
  ...props
}: TextLinkProps) => {
  const { onClickCapture, ref } = useTracking({
    children,
    "data-id": dataId,
    type: TextLink.displayName,
  });
  return (
    <>
      <TextLinkRenderer>
        {({ textLinkStyles }) => (
          <a
            ref={ref}
            data-id={dataId}
            className={textLinkStyles}
            onClickCapture={onClickCapture}
            {...props}
          >
            {children}
          </a>
        )}
      </TextLinkRenderer>
    </>
  );
};

TextLink.defaultProps = {
  "data-id": defaultDataId,
};

TextLink.displayName = "TextLink";
