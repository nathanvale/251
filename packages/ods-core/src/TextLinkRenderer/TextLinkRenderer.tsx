import React, { ReactElement, useContext } from "react";
import { TextLinkRenderProps } from "@origin-digital/ods-types";
import { useLinkResetStyles } from "@origin-digital/ods-typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import { TextContext, UseTextProps } from "../Text";
import { HeadingContext } from "../Heading";

export interface TextLinkRendererProps {
  children: (renderProps: TextLinkRenderProps) => ReactElement;
}

function useTextLinkStyles() {
  const inText = useContext(TextContext);
  const inHeading = useContext(HeadingContext);
  let tone: UseTextProps["tone"];

  if (inText) {
    tone = inText.tone || "neutral";
  }
  if (inHeading) {
    tone = "neutralDark";
  }
  const linkResetStyles = useLinkResetStyles();
  const textLinkStyles = makeStyles(
    ({ palette }) => {
      const hoverColor =
        tone === "neutral" || tone === "neutralDark"
          ? palette.getColorVariantCSSColor("primary")
          : palette.getColorVariantCSSColor(tone || "neutral");
      return {
        link: {
          fontSize: "100%",
          font: "inherit",
          "&:hover": {
            textDecoration: "none",
            color: hoverColor,
          },
        },
      };
    },
    { classNamePrefix: `typography-${tone}-tone` }
  )().link;
  return clsx(linkResetStyles, textLinkStyles);
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
