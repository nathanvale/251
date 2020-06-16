import { makeStyles } from "@material-ui/core/styles";

/**
 * TODO: We should align to MUI structure and let formHelperText just pick up caption colour from the Theme.
 * Currently our design is inconsistent and that is why we use this hook to customise it to match our current designs.
 */
export const useGreyHelperText = () => {
  return makeStyles(
    (theme) => ({
      "grey400-colour": {
        color: theme.palette.grey[400],
      },
    }),
    { classNamePrefix: "form-helper-text" }
  )()["grey400-colour"];
};
