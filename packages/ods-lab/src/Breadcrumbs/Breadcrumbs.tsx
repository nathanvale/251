import React, { ReactElement } from "react";
import {
  Breadcrumbs as MUIBreadCrumbs,
  BreadcrumbsProps as MUIBreadcrumbsProps,
} from "@material-ui/core";
import { ComponentBaseProps } from "@origin-digital/ods-types";
import { BreadcrumbProps } from "../Breadcrumb/Breadcrumb";

export interface BreadCrumbsProps extends ComponentBaseProps {
  children: ReactElement<BreadcrumbProps>[] | ReactElement<BreadcrumbProps>;
  muiProps?: MUIBreadcrumbsProps;
  "aria-label"?: string;
}

export const Breadcrumbs = ({
  children,
  "data-id": dataId,
  "aria-label": ariaLabel,
  muiProps,
  ...rest
}: BreadCrumbsProps) => {
  return (
    <MUIBreadCrumbs
      data-id={dataId}
      aria-label={ariaLabel}
      separator="/"
      {...rest}
      {...(muiProps || {})}
    >
      {children}
    </MUIBreadCrumbs>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";

Breadcrumbs.defaultProps = {
  "data-id": "breadcrumbs",
  "aria-label": "breadcrumbs",
};
