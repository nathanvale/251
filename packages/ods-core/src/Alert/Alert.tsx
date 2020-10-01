import React, { useMemo } from "react";
import clsx from "clsx";
import { makeStyles, lighten } from "@material-ui/core/styles";
import MuiAlert, { AlertProps as MuiAlertProps } from "@material-ui/lab/Alert";
import {
  IconWarning,
  IconError,
  IconCheckCircle,
  IconInfo,
  IconCancel,
  IconLocalOffer,
} from "@origin-digital/ods-icons";
import {
  MuiBasedComponentBaseProps,
  MuiProps,
} from "@origin-digital/ods-types";
import { Strong } from "../Strong";
import { Stack } from "../Stack";
import { IconButton } from "../IconButton";
import { Box } from "../Box";
import { Text, TextContextProvider } from "../Text";

const createStandardStyle = (
  color: string,
  backgroundColor: string,
  lightenBgColor = true
) => ({
  backgroundColor: lightenBgColor
    ? lighten(backgroundColor, 0.92)
    : backgroundColor,

  "& .MuiAlert-icon svg": {
    color: lightenBgColor ? backgroundColor : color,
  },
  "& .MuiAlert-action svg": {
    color,
  },
});

const createFilledStyle = (color: string, backgroundColor: string) => ({
  backgroundColor,

  "& div > span": {
    color,

    "& a:hover, & a:focus": {
      color: "inherit",
    },
  },

  "& .MuiAlert-icon svg": {
    color,
  },
  "& .MuiAlert-action svg": {
    color,
  },
});

const useAlertStyles = makeStyles(
  () => ({
    alert: {
      padding: "8px 16px 4px",

      "& .MuiAlert-icon": {
        padding: "8px 0",
      },

      "& .MuiAlert-message": {
        width: "100%",
      },

      "& .MuiAlert-action": {
        alignItems: "start",
        margin: "-4px -12px 0 0",
        paddingLeft: "8px",
      },
    },
  }),
  { classNamePrefix: "Alert" }
);

const useStandardStyles = makeStyles(
  (theme) => ({
    critical: createStandardStyle(
      theme.palette.grey[500],
      theme.palette.error.main
    ),
    caution: createStandardStyle(
      theme.palette.grey[500],
      theme.palette.warning.main
    ),
    info: createStandardStyle(theme.palette.grey[500], theme.palette.info.main),
    neutral: createStandardStyle(
      theme.palette.grey[500],
      theme.palette.grey[50],
      false
    ),
    positive: createStandardStyle(
      theme.palette.grey[500],
      theme.palette.success.main
    ),
    promote: createStandardStyle(
      theme.palette.grey[500],
      theme.palette.info.main
    ),
  }),
  { classNamePrefix: "Alert" }
);

const useFilledStyles = makeStyles(
  (theme) => ({
    critical: createFilledStyle(
      theme.palette.error.contrastText,
      theme.palette.error.main
    ),
    caution: createFilledStyle(
      theme.palette.warning.contrastText,
      theme.palette.warning.main
    ),
    info: createFilledStyle(
      theme.palette.info.contrastText,
      theme.palette.info.main
    ),
    neutral: createFilledStyle(
      theme.palette.common.white,
      theme.palette.grey[500]
    ),
    positive: createFilledStyle(
      theme.palette.success.contrastText,
      theme.palette.success.main
    ),
    promote: createFilledStyle(
      theme.palette.info.contrastText,
      theme.palette.info.main
    ),
  }),
  { classNamePrefix: "Alert" }
);

export interface AlertProps
  extends Omit<MuiBasedComponentBaseProps, "disabled">,
    MuiProps<MuiAlertProps> {
  children: React.ReactNode;
  title?: React.ReactNode;
  tone?: "critical" | "caution" | "info" | "neutral" | "positive" | "promote";
  variant?: "standard" | "filled";
  icon?: React.ReactNode | false;
  onCloseClick?: () => void;
}

const defaultProps: Pick<AlertProps, "data-id" | "tone" | "variant"> = {
  "data-id": "alert",
  tone: "info",
  variant: "standard",
};

const AlertIcon = ({ tone }: Pick<AlertProps, "tone">) => {
  switch (tone) {
    case "critical":
      return <IconError />;
    case "caution":
      return <IconWarning />;
    case "positive":
      return <IconCheckCircle />;
    case "promote":
      return <IconLocalOffer />;
    default:
      return <IconInfo />;
  }
};

const AlertInner = ({
  children,
  classes,
  className,
  icon,
  title,
  onCloseClick,
  tone = defaultProps.tone,
  variant = defaultProps.variant,
  "data-id": dataId,
  muiProps,
}: AlertProps) => {
  const { alert } = useAlertStyles();

  const standard = useStandardStyles();
  const filled = useFilledStyles();

  const { action, tones, alertIcon } = useMemo(
    () => ({
      tones: variant === "filled" ? filled : standard,
      action:
        typeof onCloseClick === "function" ? (
          <IconButton
            aria-label="close"
            onClick={onCloseClick}
            data-id={`${dataId}-close`}
          >
            <IconCancel />
          </IconButton>
        ) : undefined,
      alertIcon: icon !== undefined ? icon : <AlertIcon tone={tone} />,
    }),
    [variant, filled, standard, onCloseClick, dataId, icon, tone]
  );

  return (
    <MuiAlert
      className={clsx(className, alert, tones[tone!])}
      classes={classes}
      icon={alertIcon}
      action={action}
      data-id={dataId}
      {...(muiProps || {})}
    >
      <Stack space="xsmall">
        {title && (
          <Text data-id={`${dataId}-title`} component="h4">
            <Strong>{title}</Strong>
          </Text>
        )}
        <Box data-id={`${dataId}-content`}>
          {typeof children === "string" ? <Text>{children}</Text> : children}
        </Box>
      </Stack>
    </MuiAlert>
  );
};

export const Alert = (props: AlertProps) => {
  return (
    <TextContextProvider tone="neutral" variant="body" weight="regular">
      <AlertInner {...props} />
    </TextContextProvider>
  );
};

Alert.defaultProps = defaultProps;

Alert.displayName = "Alert";
