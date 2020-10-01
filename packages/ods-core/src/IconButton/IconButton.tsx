import React, { useContext, useMemo } from "react";
import clsx from "clsx";
import {
  IconButtonProps as MuiIconButtonProps,
  IconButton as MuiIconButton,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButtonColor,
  MuiBasedComponentBaseProps,
  SvgIconToneVariants,
} from "@origin-digital/ods-types";
import { SvgIconContext, SvgIconProps } from "@origin-digital/ods-icons";
import { ButtonProps, ButtonActionProps } from "../Button";
import { TextContext, UseTextProps } from "../Text";

export interface IconButtonProps
  extends MuiBasedComponentBaseProps,
    ButtonActionProps,
    Pick<ButtonProps, "href" | "target"> {
  children: React.ReactElement<SvgIconProps>;
  "aria-label"?: string;
  color?: IconButtonColor;
  muiProps?: MuiIconButtonProps;
  noIconPadding?: boolean;
}

const defaultProps: Required<Pick<IconButtonProps, "color" | "data-id">> = {
  color: "primary",
  "data-id": "icon-button",
};

const useIconButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    verticalAlign: "initial",
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },
  },
  noIconPadding: {
    margin: "-12px",
  },
}));

export const getSvgTone = (
  color: IconButtonColor,
  disabled?: boolean,
  textContext?: false | UseTextProps
): SvgIconToneVariants => {
  if (disabled) {
    return "disabled";
  }
  if (color === "inherit" && textContext && textContext.tone) {
    return textContext.tone;
  }
  return color;
};

export const IconButton = ({
  children,
  color = defaultProps.color,
  noIconPadding,
  disabled,
  ...props
}: IconButtonProps) => {
  const styles = useIconButtonStyles();
  const textContext = useContext(TextContext);
  const tone = useMemo(() => getSvgTone(color, disabled, textContext), [
    color,
    disabled,
    textContext,
  ]);

  return (
    <MuiIconButton
      className={clsx(styles.root, noIconPadding && styles.noIconPadding)}
      disabled={disabled}
      size="medium"
      {...props}
      {...props.muiProps}
    >
      <SvgIconContext.Provider value={tone}>{children}</SvgIconContext.Provider>
    </MuiIconButton>
  );
};

IconButton.displayName = "IconButton";

IconButton.defaultProps = defaultProps;
