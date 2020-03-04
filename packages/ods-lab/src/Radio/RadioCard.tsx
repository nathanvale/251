import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import {Divider} from "@origin-digital/ods-core";
import {
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  FormLabel,
  RadioBaseProps,
  RadioBase,
  RadioProps,
} from "..";

export interface ExtendedRadioBaseProps extends RadioBaseProps {
  content?: React.ReactNode;
}

export interface RadioCardProps extends RadioProps {
  "data-id": string;
  label: string;
  options: Array<ExtendedRadioBaseProps>;
  handleChange: (e: string | number) => void;
  value: number | string;
}

const useStyles = makeStyles({
  largerToggleButtonGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // "& .MuiDivider-root": {
    //   marginRight: -12,
    //   marginLeft: -12,
    // },
  },
  toggleButton: {
    minWidth: 184,
    minHeight: 266,
    marginRight: 24,
    marginBottom: 24,
    "&:hover": {
      "& .MuiRadio-root": {
        background: "unset",
      },
    },
    "& > .Mui-checked": {
      background: "unset",
    },
  },
});

export const RadioCard = (props: RadioCardProps) => {
  const styles = useStyles({});
  const {value, options, label, handleChange, "data-id": dataId} = props;
  const updateToggleGroup = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: string,
  ) => {
    handleChange(newValue);
  };
  const updateRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
    event.stopPropagation();
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <FormLabel>{label}</FormLabel>
      </Grid>
      <Grid item>
        <ToggleButtonGroup
          classes={{root: styles.largerToggleButtonGroup}}
          value={value}
          exclusive
          onChange={updateToggleGroup}
        >
          {options.map(r => (
            <ToggleButton
              classes={{root: styles.toggleButton}}
              value={r.value}
              key={r.value}
              selected={r.value === value}
            >
              <Grid container direction="column">
                <Grid item>
                  <RadioBase
                    key={`${r.value}-${r.label}`}
                    data-id={dataId}
                    value={r.value}
                    checked={r.value === value}
                    onChange={updateRadio}
                    disabled={r.disabled}
                    color={r.color ? r.color : "default"}
                    labelPlacement={r.labelPlacement}
                    label={r.label}
                    helpText={r.helpText}
                  />
                </Grid>
                <Grid item>
                  {r.content && (
                    <>
                      <Divider />
                      {r.content}
                    </>
                  )}
                </Grid>
              </Grid>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};
