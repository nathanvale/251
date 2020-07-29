import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { generateAlert, alertTones, alertVariants } from "./Alert.helper";
import { AlertProps } from "./Alert";

const renderAlert = (accordionProps: Partial<AlertProps> = {}) =>
  render(generateAlert(accordionProps));

test("It renders", () => {
  const { container } = renderAlert();
  expect(container).toMatchSnapshot();
});

alertVariants.forEach((variant) => {
  alertTones.forEach((tone) => {
    test(`It uses variant (${variant}) and tone (${tone})`, () => {
      const { container } = renderAlert({ variant, tone });
      expect(container).toMatchSnapshot();
    });
  });
});

test("It sets the data-id", () => {
  const { getAllByTestId } = renderAlert({ "data-id": "my-id" });
  expect(getAllByTestId("my-id")).toHaveLength(1);
});

test("It adds additional class", () => {
  const { getByTestId } = renderAlert({ className: "my-class" });
  expect(getByTestId("alert")).toHaveClass("my-class");
});

test("It calls onClick handler", () => {
  const onCloseClick = jest.fn();

  const { getByTestId } = renderAlert({
    onCloseClick,
  });
  fireEvent.click(getByTestId("alert-close"));
  expect(onCloseClick).toHaveBeenCalled();
});
