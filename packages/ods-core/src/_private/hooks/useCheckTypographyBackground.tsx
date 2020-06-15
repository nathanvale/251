import { useBackgroundColor } from "../../Box/BackgroundContext";

/**
 * This is a helper hook that lets a consumer know when they are using a
 * typography component on an invalid background
 */
export function useCheckTypographyBackground() {
  const backgroundColor = useBackgroundColor();
  const hasValidBackground =
    backgroundColor === "white" ||
    backgroundColor === "transparent" ||
    backgroundColor === "grey50" ||
    !backgroundColor;
  if (!hasValidBackground && process.env.NODE_ENV !== "production") {
    throw new Error(
      `Typography background colors must be "white", "backgroundDefault", "transparent" or "undefined`
    );
  }
  return backgroundColor;
}
