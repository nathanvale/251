import makeStyles from "@material-ui/core/styles/makeStyles";

/**
 * Used for applying truncate styles
 */
export function useTruncateStyles() {
  return makeStyles(
    {
      truncate: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
    { classNamePrefix: "typography" }
  )().truncate;
}
