import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import {
  TrackingEventHandler,
  LinkComponentType,
} from "@origin-digital/ods-types";
import { OriginThemeProvider } from "../OriginThemeProvider/OriginThemeProvider";
import { Text } from "../Text/Text";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";
import { Strong } from "../Strong/Strong";
import { TextLink } from "./TextLink";

test("It can render", () => {
  const { container } = render(
    <Text>
      <TextLink href="someUrl">Text link</TextLink>
    </Text>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it("should call tracking handler when passed into the TrackingProvider", () => {
  const label = (
    <>
      Hello this is <Strong>strong</Strong>
    </>
  );

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByTestId } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <Text>
        <TextLink href="">{label}</TextLink>
      </Text>
    </TrackingProvider>
  );
  const node = getByTestId("text-link");
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith({
    "data-id": "text-link",
    type: "TextLink",
    label: "Hello this is strong",
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
      <Text>
        <TextLink href="https://www.test.com/">Click me</TextLink>
      </Text>
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
