import makeStyles from "@material-ui/core/styles/makeStyles";

/**
 * Link reset styles
 */
export function useLinkResetStyles() {
  return makeStyles(
    () => {
      return {
        linkReset: {
          color: "inherit",
          margin: 0,
          padding: 0,
          border: 0,
          boxSizing: "border-box",
          cursor: "pointer",
          verticalAlign: "baseline",
          textDecoration: "underline",
          background: "none",
          outline: "none",
        },
      };
    },
    { classNamePrefix: "typography" }
  )().linkReset;
}
