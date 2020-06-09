import React from "react";
import { TrackedLink } from "@origin-digital/ods-core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import {
  useLinkResetStyles,
  useBasekickStyles,
} from "@origin-digital/ods-typography";
import { LinkBaseProps } from "@origin-digital/ods-types";

export interface BreadcrumbProps extends LinkBaseProps {
  active?: boolean;
}

function useBreadcrumbStyles(active: boolean) {
  const linkResetStyles = useLinkResetStyles();
  const basekickStyles = useBasekickStyles({ variant: "body" });
  const textLinkStyles = makeStyles(
    ({ palette }) => {
      return {
        breadcrumb: {
          cursor: active ? "default" : "pointer",
          color: active ? palette.grey[600] : palette.grey[400],
          textDecoration: "none",
          "&:hover": {
            color: active || palette.primary.main,
          },
        },
      };
    },
    { classNamePrefix: `typography` }
  )().breadcrumb;
  return clsx(linkResetStyles, textLinkStyles, basekickStyles);
}

export const Breadcrumb = ({
  "data-id": dataId,
  children,
  domProps,
  target,
  onClick,
  href,
  active = false,
}: BreadcrumbProps) => {
  const breadcrumbStyles = useBreadcrumbStyles(active);
  return (
    <TrackedLink
      data-id={dataId}
      domProps={{ className: breadcrumbStyles, ...domProps }}
      trackingType={Breadcrumb.displayName}
      trackingLabel={children}
      href={href || ""}
      target={target}
      onClick={onClick}
    >
      {children}
    </TrackedLink>
  );
};

Breadcrumb.displayName = "Breadcrumb";

Breadcrumb.defaultProps = {
  "data-id": "breadcrumb",
  active: false,
};
