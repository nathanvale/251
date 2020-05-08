import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { TextLink, Text, TrackingProvider, Strong } from "..";

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
