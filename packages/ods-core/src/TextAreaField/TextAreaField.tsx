import React from "react";
import { BaseFieldProps, TextFieldBase } from "../TextFieldBase/TextFieldBase";

export interface TextAreaFieldProps extends BaseFieldProps {
  domProps?: React.HTMLAttributes<HTMLTextAreaElement>;
  rows?: number | string;
  rowsMax?: number | string;
}

export const TextAreaField = ({ ...rest }: TextAreaFieldProps) => {
  return <TextFieldBase {...rest} multiline={true} />;
};

TextAreaField.displayName = "TextAreaField";
TextAreaField.defaultProps = {
  variant: "filled",
  size: "medium",
};
