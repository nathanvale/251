import React, { ReactElement } from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";

export interface NavLinkRenderProps {
  navLinkStyles: string;
}

export interface NavLinkRendererProps {
  children: (renderProps: NavLinkRenderProps) => ReactElement;
  current?: boolean;
}

function useLinkResetStyles() {
  return makeStyles(
    () => {
      return {
        linkReset: {
          color: "inherit",
          margin: 0,
          padding: 0,
          border: 0,
          boxSizing: "border-box",
          cursor: "pointer",
          verticalAlign: "baseline",
          textDecoration: "none",
          background: "none",
        },
      };
    },
    { classNamePrefix: "typography" }
  )().linkReset;
}

function useTextLinkStyles(current?: boolean) {
  const linkResetStyles = useLinkResetStyles();
  const navLinkStyles = makeStyles(
    ({ palette }) => {
      const hoverColor = palette.primary.main;
      return {
        "nav-link": {
          color: current ? palette.primary.main : "inherit",
          fontSize: "100%",
          font: "inherit",
          "&:hover": {
            color: hoverColor,
          },
        },
      };
    },
    { classNamePrefix: "typography" }
  )()["nav-link"];
  return clsx(linkResetStyles, navLinkStyles);
}

export const NavLinkRenderer = (props: NavLinkRendererProps) => {
  const { children, current } = props;
  const navLinkStyles = useTextLinkStyles(current);
  return (
    <>
      {children({
        navLinkStyles,
      })}
    </>
  );
};

NavLinkRenderer.displayName = "NavLinkRenderer";
