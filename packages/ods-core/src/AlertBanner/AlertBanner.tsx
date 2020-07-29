import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertProps } from "../Alert/Alert";
import { Box } from "../Box/Box";

const useAlertBannerStyles = makeStyles(
  () => ({
    sticky: {
      position: "sticky",
      top: ({ offset }: AlertBannerStylesProps) =>
        typeof offset === "string" ? offset : `${offset}px`,
      zIndex: 900,
    },
  }),
  { classNamePrefix: "AlertBanner" }
);

export interface AlertBannerProps extends AlertProps {
  offset?: number | string;
}

export type AlertBannerStylesProps = Pick<AlertBannerProps, "offset">;

const defaultProps: Pick<AlertBannerProps, "data-id" | "offset"> = {
  "data-id": "alert-banner",
  offset: 0,
};

export const AlertBanner = ({
  offset = defaultProps.offset,
  children,
  "data-id": dataId,
  ...props
}: AlertBannerProps) => {
  const { sticky } = useAlertBannerStyles({ offset });

  return (
    <Box className={clsx(sticky)} data-id={dataId}>
      <Alert {...props}>{children}</Alert>
    </Box>
  );
};

AlertBanner.defaultProps = defaultProps;

AlertBanner.displayName = "AlertBanner";
