import * as React from "react";
import MuiRadio from "@material-ui/core/Radio";
import makeStyles from "@material-ui/styles/makeStyles";
import {AllColors} from "../AllColors/AllColors";
import {IRadioProps} from "./Radio";
import {FormControlLabel, FormHelperText, Typography} from "..";

export interface RadioBaseProps extends IRadioProps {
  "data-id"?: string;
  onChange?: (e: React.ChangeEvent<any>, checked: boolean) => void;
}

interface InputWrapperProps {
  children: React.ReactNode;
  border?: boolean;
  checked?: boolean;
}

const newStyles = makeStyles({
  inputWrapper: {
    border: (props: InputWrapperProps) => {
      return props.border ? `1px solid ${AllColors.grey56}` : "none";
    },
    borderColor: (props: InputWrapperProps) => {
      return props.border ? `1px solid ${AllColors.lightOrange}` : "none";
    },
    borderRadius: (props: InputWrapperProps) => {
      return props.border ? 10 : 0;
    },
    padding: (props: InputWrapperProps) => {
      return props.border ? 12 : 0;
    },
    marginBottom: (props: InputWrapperProps) => {
      return props.border ? 8 : 0;
    },
  },
  inlineWrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

const InputWrapper = (props: InputWrapperProps) => {
  const styles = newStyles(props);
  return <div className={styles.inputWrapper}>{props.children}</div>;
};

interface InlineWrapperProps {
  children: React.ReactNode;
}

const InlineWrapper = (props: InlineWrapperProps) => {
  const styles = newStyles(props);
  return <div className={styles.inlineWrapper}>{props.children}</div>;
};

export const RadioBase = (props: RadioBaseProps) => {
  const {
    "data-id": dataId,
    disabled,
    value,
    color,
    label,
    labelPlacement,
    helpText,
    checked,
    onChange,
    name,
    border,
    description,
    error,
  } = props;
  return (
    <InputWrapper border={border} checked={checked}>
      <InlineWrapper>
        <FormControlLabel
          key={value}
          data-id={dataId}
          disabled={disabled}
          value={value}
          checked={checked}
          onChange={onChange}
          color={color ? color : "default"}
          name={name}
          control={
            <MuiRadio
              inputProps={{"aria-label": props.label}}
              color={color ? color : "default"}
            />
          }
          labelPlacement={labelPlacement}
          label={label}
        />
        {description && (
          <Typography variant="caption">{description}</Typography>
        )}
      </InlineWrapper>
      {helpText && <FormHelperText error={error}>{helpText}</FormHelperText>}
    </InputWrapper>
  );
};
