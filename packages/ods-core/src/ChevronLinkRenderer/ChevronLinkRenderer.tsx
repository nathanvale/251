import React, { ReactElement, useContext } from "react";
import {
  ChevronLinkRenderProps,
  ChevronContainerProps,
  ChevronVaraints,
} from "@origin-digital/ods-types";
import clsx from "clsx";
import { IconChevronRight } from "@origin-digital/ods-icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { TextContext } from "../Text/TextContext";
import {
  useLinkResetStyles,
  getTypographyForVariant,
} from "../_private/hooks/typography";
import { HeadingContext } from "../Heading/HeadingContext";
import { Box } from "../Box/Box";

export interface ChevronLinkRendererProps {
  children: (renderProps: ChevronLinkRenderProps) => ReactElement;
  variant: ChevronVaraints;
}
interface UseChevronLinkProps {
  variant: ChevronVaraints;
}

function ChevronContainer({ children }: ChevronContainerProps) {
  return (
    <Box display="flex">
      <IconChevronRight />
      <Box style={{ marginTop: "14px", marginBottom: "-1px" }}>
        <span>{children}</span>
      </Box>
    </Box>
  );
}

export function useChevronLinkStyles({ variant }: UseChevronLinkProps) {
  const linkResetStyles = useLinkResetStyles();
  const chevronLinkStyles = makeStyles(
    ({ colors, typography }) => {
      const color =
        variant === "secondary" ? colors["secondaryB"] : colors[variant];
      return {
        "chevron-link": {
          display: "inline-flex",
          padding: "12px",
          textDecoration: "none",
          color,
          "& * span": {
            ...getTypographyForVariant(typography)["body"],
            color,
            transform: "none",
          },
          "& * svg": {
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

  const { children, variant: tone = "primary" } = props;
  const chevronLinkStyles = useChevronLinkStyles({ variant: tone });
  return (
    <>
      {children({
        chevronLinkStyles,
        ChevronContainer,
      })}
    </>
  );
};

ChevronLinkRenderer.displayName = "ChevronLinkRenderer";
