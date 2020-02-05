import * as React from 'react';
import MuiFormHelperText, {
  FormHelperTextProps,
} from '@material-ui/core/FormHelperText';

interface IFormHelperText extends FormHelperTextProps {
  'data-id'?: string;
}

export const FormHelperText = (props: IFormHelperText) => (
  <MuiFormHelperText {...props}>{props.children}</MuiFormHelperText>
);
