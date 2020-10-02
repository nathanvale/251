import React, { ReactElement, useContext } from "react";
import {
  ButtonColor,
  ChevronLinkRenderProps,
  ComponentBaseProps,
} from "@origin-digital/ods-types";
import clsx from "clsx";
import { IconChevronRight } from "@origin-digital/ods-icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useTheme } from "@material-ui/core/styles";
import {
  useLinkResetStyles,
  getTypographyForVariant,
} from "@origin-digital/ods-typography";
import { TextContext } from "../Text";
import { HeadingContext } from "../Heading";
import { Box } from "../Box";

export interface ChevronLinkRendererProps
  extends Omit<ComponentBaseProps, "children"> {
  children: (renderProps: ChevronLinkRenderProps) => ReactElement;
  color: ButtonColor;
}
interface UseChevronLinkProps {
  color: ButtonColor;
}

function IconChevron() {
  const theme = useTheme();
  const basekickActive = theme.typography.basekickActive;

  return (
    <Box
      style={{
        marginLeft: "-8px",
        marginTop: basekickActive ? "-10px" : "0px",
        marginBottom: basekickActive ? "-14px" : "0px",
        height: basekickActive ? "auto" : "24px",
      }}
    >
      <IconChevronRight />
    </Box>
  );
}

function useChevronLinkStyles({ color: colorProp }: UseChevronLinkProps) {
  const linkResetStyles = useLinkResetStyles();
  const chevronLinkStyles = makeStyles(
    ({ palette, typography }) => {
      const color = palette.getColorVariantCSSColor(colorProp);
      return {
        "chevron-link": {
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color,
          "& > span": {
            ...getTypographyForVariant(typography)["body"],
            color,
            transform: "none",
            margin: undefined,
          },
          "& * svg": {
            color,
            "-webkit-transition": "transform 0.25s ease-out",
            transition: "transform 0.25s ease-out",
          },
          "&:hover": {
            "& * svg": {
              transform: "translate(4px, 0px)",
              "-webkit-transform": "translate(4px, 0px)",
            },
          },
        },
      };
    },
    { classNamePrefix: "typography" }
  )()["chevron-link"];
  return clsx(linkResetStyles, chevronLinkStyles);
}

export const ChevronLinkRenderer = (props: ChevronLinkRendererProps) => {
  if (process.env.NODE_ENV !== "production") {
    // NODE_ENV is static so hook call is not conditional
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inText = useContext(TextContext);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inHeading = useContext(HeadingContext);

    if (inHeading || inText) {
      throw new Error(
        "ChevronLink components cannot be rendered within a Text or Heading component."
      );
    }
  }

  const { children, color = "primary" } = props;
  const chevronLinkStyles = useChevronLinkStyles({ color });
  return (
    <>
      {children({
        chevronLinkStyles,
        IconChevron,
      })}
    </>
  );
};

ChevronLinkRenderer.displayName = "ChevronLinkRenderer";
