import React, { ReactElement, useContext } from "react";
import { TextLinkRenderProps } from "@origin-digital/ods-types";
import { TextContext } from "../Text/TextContext";
import { useTextLinkStyles } from "../_private/hooks/typography";
import { HeadingContext } from "../Heading/HeadingContext";

export interface TextLinkRendererProps {
  children: (renderProps: TextLinkRenderProps) => ReactElement;
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

  const { children } = props;
  const textLinkStyles = useTextLinkStyles();
  return (
    <>
      {children({
        textLinkStyles,
      })}
    </>
  );
};

TextLinkRenderer.displayName = "TextLinkRenderer";
