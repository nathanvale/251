import React, { ReactElement, useContext } from "react";
import { TextLinkRenderProps } from "@origin-digital/ods-types";
import { TextContext } from "../Text/TextContext";
import { useLinkStyles } from "../_private/hooks/typography";
import { HeadingContext } from "../Heading/HeadingContext";

export interface TextLinkRendererProps {
  children: (styleProps: TextLinkRenderProps) => ReactElement;
}

export const TextLinkRenderer = (props: TextLinkRendererProps) => {
  if (process.env.NODE_ENV !== "production") {
    // NODE_ENV is static so hook call is not conditional
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inText = useContext(TextContext);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inHeading = useContext(HeadingContext);

    if (!(inHeading || inText)) {
      throw new Error(
        "TextLink components must be rendered within a Text or Heading component only."
      );
    }
  }

  return <InlineLink {...props} />;
};

function InlineLink(props: TextLinkRendererProps) {
  const { children } = props;
  const className = useLinkStyles();
  return (
    <>
      {children({
        style: {},
        className,
      })}
    </>
  );
}

TextLinkRenderer.displayName = "TextLinkRenderer";
