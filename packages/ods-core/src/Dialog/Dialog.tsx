import React from "react";
import {
  ComponentBaseProps,
  DialogMaxWidthVariants,
} from "@origin-digital/ods-types";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useTracking } from "../TrackingProvider";
import { IconButton } from "../IconButton";
import { Heading } from "../Heading";

export interface MuiProps {
  componentProps?: MuiDialogProps;
  titleProps?: MuiDialogTitleProps;
  contentProps?: MuiDialogContentProps;
}

export interface DialogProps extends ComponentBaseProps {
  id: string;
  onClose?: () => void;
  title: string | React.ReactNode;
  maxWidth?: DialogMaxWidthVariants;
  open?: boolean;
  hideClose?: boolean;
  noFullScreenOnMobile?: boolean;
  opaqueBackground?: boolean;
  muiProps?: MuiProps;
}

const useDialogTitleStyles = makeStyles(
  (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(4),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(3),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
  }),
  { classNamePrefix: "dialog-title" }
);

export interface DialogTitleProps extends ComponentBaseProps {
  onClose?: () => void;
  hideClose?: boolean;
  muiProps?: MuiDialogTitleProps;
}

const DialogTitle = ({
  id,
  "data-id": dataId,
  children,
  onClose,
  hideClose,
  muiProps,
}: DialogTitleProps) => {
  const classes = useDialogTitleStyles();
  return (
    <MuiDialogTitle
      id={id}
      data-id={dataId}
      disableTypography
      className={classes.root}
      {...muiProps}
    >
      <Heading variant="h3">{children}</Heading>
      {!hideClose ? (
        <IconButton
          data-id="close"
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon color="primary" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const useDialogContentStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(4),
      paddingTop: 0,
    },
  }),
  { classNamePrefix: "dialog-content" }
);

export interface DialogContentProps extends ComponentBaseProps {
  muiProps?: MuiDialogContentProps;
}

const DialogContent = ({
  id,
  "data-id": dataId,
  children,
  muiProps,
}: DialogContentProps) => {
  const classes = useDialogContentStyles();
  return (
    <MuiDialogContent data-id={dataId} classes={classes} id={id} {...muiProps}>
      {children}
    </MuiDialogContent>
  );
};

const useDialogStyles = makeStyles(
  {
    paperWidthSm: {
      maxWidth: "538px",
    },
    paperWidthMd: {
      maxWidth: "728px",
    },
    paperWidthLg: {
      maxWidth: "918px",
    },
  },
  { classNamePrefix: "dialog" }
);

const useBackdropStyles = makeStyles(
  {
    root: {
      backgroundColor: "rgb(80, 80, 80)",
    },
  },
  { classNamePrefix: "dialog-backdrop" }
);

export const Dialog = ({
  id,
  open,
  title,
  "data-id": dataId = id,
  children,
  maxWidth = "sm",
  noFullScreenOnMobile,
  opaqueBackground,
  onClose,
  hideClose,
  muiProps,
}: DialogProps) => {
  const titleId = `${id}-title`;
  const titleDataId = `${dataId}-title`;
  const contentId = `${id}-content`;
  const contentDataId = `${dataId}-content`;
  const theme = useTheme();
  const classes = useDialogStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const displayFullscreen = !noFullScreenOnMobile && mobile;
  const backdropClasses = useBackdropStyles();
  const { onClickCapture, ref } = useTracking({
    children,
    "data-id": dataId,
    type: Dialog.displayName,
    postClickState: "closed",
  });
  return (
    <MuiDialog
      id={id}
      classes={classes}
      BackdropProps={opaqueBackground ? { classes: backdropClasses } : {}}
      data-id={dataId}
      open={!!open}
      maxWidth={displayFullscreen ? false : maxWidth}
      fullWidth={true}
      fullScreen={displayFullscreen}
      scroll="paper"
      onClose={onClose}
      onExit={onClickCapture}
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={contentId}
      {...muiProps?.componentProps}
    >
      <DialogTitle
        id={titleId}
        data-id={titleDataId}
        onClose={onClose}
        hideClose={hideClose}
        muiProps={muiProps?.titleProps}
      >
        {title}
      </DialogTitle>
      <DialogContent
        data-id={contentDataId}
        id={contentId}
        muiProps={muiProps?.contentProps}
      >
        {children}
      </DialogContent>
    </MuiDialog>
  );
};

Dialog.displayName = "Dialog";
