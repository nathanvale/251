import * as React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  FormLabel,
  Grid,
} from "..";

export interface SegmentedControlProps extends ToggleButtonGroupProps {
  options: Array<{value: string | number; content: React.ReactNode}>;
  label: string;
}

export const SegmentedControl = (props: SegmentedControlProps) => {
  const {label, value, onChange, options} = props;
  return (
    <Grid container direction="column">
      <Grid item>
        <FormLabel>{label}</FormLabel>
      </Grid>
      <Grid item>
        <ToggleButtonGroup value={value} exclusive onChange={onChange}>
          {options.map(s => (
            <ToggleButton key={s.value} value={s.value}>
              {s.content}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};
