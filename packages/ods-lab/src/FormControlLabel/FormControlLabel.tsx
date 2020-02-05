import * as React from 'react';
import MuiFormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel';

interface IFormControlLabel extends FormControlLabelProps {
  'data-id'?: string;
}

export const FormControlLabel = (props: IFormControlLabel) => (
  <MuiFormControlLabel {...props}>{props.children}</MuiFormControlLabel>
);
