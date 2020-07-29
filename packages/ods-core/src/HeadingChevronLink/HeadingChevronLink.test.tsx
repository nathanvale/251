import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import {
  TrackingEventHandler,
  LinkComponentType,
} from "@origin-digital/ods-types";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";
import { OriginThemeProvider } from "../OriginThemeProvider/OriginThemeProvider";
import { HeadingChevronLink } from "./HeadingChevronLink";

test("It can render", () => {
  const { container } = render(
    <HeadingChevronLink href="">Chevron link</HeadingChevronLink>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it("should call tracking handler when passed into the TrackingProvider", () => {
  const label = "label";

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByTestId } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <HeadingChevronLink href="">{label}</HeadingChevronLink>
    </TrackingProvider>
  );
  const node = getByTestId("heading-chevron-link");
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith({
    "data-id": "heading-chevron-link",
    type: "HeadingChevronLink",
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
      <HeadingChevronLink href="https://www.test.com/">
        Click me
      </HeadingChevronLink>
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
