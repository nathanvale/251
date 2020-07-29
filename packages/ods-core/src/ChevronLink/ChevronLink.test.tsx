import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import {
  TrackingEventHandler,
  LinkComponentType,
} from "@origin-digital/ods-types";
import { ChevronLink } from "../ChevronLink/ChevronLink";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";
import { OriginThemeProvider } from "../OriginThemeProvider/OriginThemeProvider";

test("It can render", () => {
  const { container } = render(<ChevronLink href="">Chevron link</ChevronLink>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render another tone", () => {
  const { container } = render(
    <ChevronLink variant="secondary" href="">
      Chevron link
    </ChevronLink>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it("should call tracking handler when passed into the TrackingProvider", () => {
  const label = "label";

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByText } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <ChevronLink href="">{label}</ChevronLink>
    </TrackingProvider>
  );
  const node = getByText(label);
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith({
    "data-id": "chevron-link",
    type: "ChevronLink",
    label,
    postClickState: undefined,
  });
});

test("it handles a custom link implementation", () => {
  const onClick = jest.fn();

  const CustomLink: LinkComponentType = ({ href, ...restProps }) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href={href} onClick={onClick} {...restProps} />
  );

  const { getByText } = render(
    <OriginThemeProvider linkComponent={CustomLink}>
      <ChevronLink href="https://www.test.com/">Click me</ChevronLink>
    </OriginThemeProvider>
  );

  const link = getByText("Click me");
  fireEvent.click(link);

  expect(onClick).toBeCalledTimes(1);

  expect(getByText("Click me").closest("a")).toHaveAttribute(
    "href",
    "https://www.test.com/"
  );
});
