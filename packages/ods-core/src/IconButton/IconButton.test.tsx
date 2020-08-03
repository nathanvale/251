import { render } from "@origin-digital/ods-testing-library";
import { UseTextProps } from "../Text/TextContextProvider";
import { generateIconButton } from "./IconButton.helper";
import { getSvgTone } from "./IconButton";

describe("getSvgTone()", () => {
  const getTextContext = (tone: UseTextProps["tone"]): UseTextProps => ({
    variant: "body",
    weight: "regular",
    tone,
  });
  test("should return disabled", () => {
    expect(getSvgTone("primary", true)).toBe("disabled");
  });

  test("should return the text color if set to inherit", () => {
    expect(getSvgTone("inherit", false, getTextContext("positive"))).toBe(
      "positive"
    );
  });

  test("should return the color if there is no text context", () => {
    expect(getSvgTone("primary")).toBe("primary");
  });
});

describe("<IconButton />", () => {
  test("should render", () => {
    expect(render(generateIconButton()).container.firstChild).toMatchSnapshot();
  });

  test("should render with no padding", () => {
    const { container } = render(generateIconButton({ noIconPadding: true }));
    expect(
      container.querySelector("button[class*='noIconPadding']")
    ).not.toBeNull();
  });
});
