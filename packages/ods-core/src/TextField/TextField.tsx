import React from "react";
import {
  TextFieldProps as MuiTextFieldProps,
  Theme,
  useTheme,
} from "@material-ui/core";
import { IconCheckCircle, IconError } from "@origin-digital/ods-icons";
import {
  TextFieldBase,
  TextFieldBaseProps,
} from "../TextFieldBase/TextFieldBase";
import { InputAdornment } from "../InputAdornment/InputAdornment";
import { Spinner } from "../Spinner/Spinner";
import {
  useFadeInAnimation,
  useBounceInAnimation,
} from "../_private/animations/animation-hooks";

export type EndIconType = "success" | "error" | "validating" | React.ReactNode;

export interface TextFieldProps
  extends Omit<TextFieldBaseProps, "startAdornment" | "endAdornment"> {
  domProps?: React.HTMLAttributes<HTMLInputElement>;
  endIcon?: EndIconType;
  startIcon?: React.ReactNode;
  muiProps?: MuiTextFieldProps;
}

export interface EndAdornmentProps {
  disabled?: boolean;
  error?: boolean;
  endIcon?: EndIconType;
  theme: Theme;
}

const TransitionContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <InputAdornment className={className} position="end">
    {children}
  </InputAdornment>
);

const EndAdornment = ({
  disabled,
  error,
  endIcon,
  theme,
}: EndAdornmentProps) => {
  const fadeInClassName = useFadeInAnimation({
    duration: theme.transitions.duration.complex,
  });

  const bounceInClassName = useBounceInAnimation({
    duration: theme.transitions.duration.complex,
  });

  if (typeof endIcon !== "undefined" && typeof endIcon !== "string") {
    return <TransitionContainer>{endIcon}</TransitionContainer>;
  }
  if (disabled) {
    return null;
  }
  if (endIcon === "error" || (error && !endIcon)) {
    return (
      <TransitionContainer className={fadeInClassName}>
        <IconError color={theme.palette.error.main} />
      </TransitionContainer>
    );
  }
  if (endIcon === "success") {
    return (
      <TransitionContainer className={bounceInClassName}>
        <IconCheckCircle color={theme.palette.success.light} />
      </TransitionContainer>
    );
  }

  if (endIcon === "validating") {
    return (
      <InputAdornment position="end">
        <Spinner />
      </InputAdornment>
    );
  }

  return null;
};

const StartAdornment = ({ startIcon }: { startIcon: React.ReactNode }) => {
  return <InputAdornment position="start">{startIcon}</InputAdornment>;
};
export const TextField = ({
  disabled,
  error,
  endIcon,
  startIcon,
  ...rest
}: TextFieldProps) => {
  const theme = useTheme();
  return (
    <TextFieldBase
      {...rest}
      endAdornment={
        (error || endIcon) && (
          <EndAdornment
            disabled={disabled}
            error={error}
            endIcon={endIcon}
            theme={theme}
          />
        )
      }
      startAdornment={startIcon && <StartAdornment startIcon={startIcon} />}
      disabled={disabled}
      error={error}
    />
  );
};

TextField.displayName = "TextField";
TextField.defaultProps = {
  variant: "filled",
  size: "medium",
};
