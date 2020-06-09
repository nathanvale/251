import React, { ReactElement } from "react";
import {
  Breadcrumbs as MUIBreadCrumbs,
  BreadcrumbsProps as MUIBreadcrumbsProps,
} from "@material-ui/core";
import { OptionalTrackableProps } from "@origin-digital/ods-types";
import { BreadcrumbProps } from "../Breadcrumb/Breadcrumb";

export interface BreadCrumbsProps extends OptionalTrackableProps {
  children: ReactElement<BreadcrumbProps>[] | ReactElement<BreadcrumbProps>;
  muiProps?: MUIBreadcrumbsProps;
  "aria-label"?: string;
}

export const Breadcrumbs = ({
  children,
  "data-id": dataId,
  "aria-label": ariaLabel,
  muiProps,
}: BreadCrumbsProps) => {
  return (
    <MUIBreadCrumbs
      data-id={dataId}
      aria-label={ariaLabel}
      separator="/"
      {...muiProps}
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
