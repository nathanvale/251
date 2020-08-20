import React, { useContext, useMemo } from "react";
import clsx from "clsx";
import {
  IconButtonProps as MuiIconButtonProps,
  IconButton as MuiIconButton,
  Theme,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import {
  ComponentBaseProps,
  IconButtonColor,
  SvgIconToneVariants,
} from "@origin-digital/ods-types";
import { SvgIconContext, SvgIconProps } from "@origin-digital/ods-icons";
import { ButtonActionProps } from "../Button/Button";
import { TextContext, UseTextProps } from "../Text/TextContextProvider";

export interface IconButtonProps extends ComponentBaseProps, ButtonActionProps {
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
      backgroundColor: fade(theme.palette.common.black, 0.08),
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
