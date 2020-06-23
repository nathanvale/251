import React from "react";
import { IconPhone } from "@origin-digital/ods-icons";
import {
  render,
  queryByAttribute,
  fireEvent,
} from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { Button, TrackingProvider } from "..";

test("it renders a contained primary by default", () => {
  const { container } = render(
    <Button data-id="primary-button">Primary</Button>
  );

  expect(container).toMatchSnapshot();
});

test("it renders a contained secondary", () => {
  const { container } = render(<Button color="secondary">Primary</Button>);

  expect(container).toMatchSnapshot();
});

test("it renders a contained disabled", () => {
  const { container } = render(<Button disabled>Primary</Button>);

  expect(container).toMatchSnapshot();
});

test("it renders an outlined primary", () => {
  const { container } = render(<Button variant="outlined">Primary</Button>);

  expect(container).toMatchSnapshot();
});

test("it renders an outlined secondary", () => {
  const { container } = render(
    <Button variant="outlined" color="secondary">
      Primary
    </Button>
  );

  expect(container).toMatchSnapshot();
});

test("it renders an outlined disabled", () => {
  const { container } = render(
    <Button variant="outlined" disabled>
      Primary
    </Button>
  );

  expect(container).toMatchSnapshot();
});

test("it renders an text primary", () => {
  const { container } = render(<Button variant="text">Primary</Button>);

  expect(container).toMatchSnapshot();
});

test("it renders an text secondary", () => {
  const { container } = render(
    <Button variant="text" color="secondary">
      Primary
    </Button>
  );

  expect(container).toMatchSnapshot();
});

test("it renders an text disabled", () => {
  const { container } = render(
    <Button variant="text" disabled>
      Primary
    </Button>
  );

  expect(container).toMatchSnapshot();
});

test("it renders a small button", () => {
  const { container } = render(<Button size="small">Small</Button>);

  const buttonEl = container.querySelector("button");
  expect(buttonEl).toHaveClass("MuiButton-containedSizeSmall");
  expect(buttonEl).toHaveClass("MuiButton-sizeSmall");
});

test("it renders an icon", () => {
  const { container } = render(<Button icon={<IconPhone />}>Primary</Button>);

  expect(container).toMatchSnapshot();
});

test("it renders a primary inverse button", () => {
  const { container } = render(<Button inverse>Inverse</Button>);

  expect(container).toMatchSnapshot();
});

test("it renders a tag when href is provided", () => {
  const { container } = render(
    <Button data-id="my-button" href="https://www.originenergy.com.au">
      Origin
    </Button>
  );

  const buttonEl = queryByAttribute("data-id", container, "my-button");
  expect(buttonEl?.tagName).toEqual("A");
});

test("it calls onClick when clicked", () => {
  const onClick = jest.fn();
  const { container } = render(
    <Button data-id="my-button" onClick={onClick}>
      Origin
    </Button>
  );

  const buttonEl = queryByAttribute("data-id", container, "my-button");
  buttonEl?.click();
  expect(onClick).toHaveBeenCalledTimes(1);
});

it("should call tracking handler when passed into the TrackingProvider", () => {
  const label = "label";

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByTestId } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <Button>{label}</Button>
    </TrackingProvider>
  );
  const node = getByTestId("button");
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith({
    "data-id": "button",
    type: "Button",
    label,
    postClickState: undefined,
  });
});
