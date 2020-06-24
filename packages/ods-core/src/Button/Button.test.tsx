import React from "react";
import { IconPhone } from "@origin-digital/ods-icons";
import {
  render,
  queryByAttribute,
  fireEvent,
} from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";
import { Button } from "./Button";

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
    <Button data-id="btn1" href="https://www.originenergy.com.au">
      Origin
    </Button>
  );

  const buttonEl = queryByAttribute("data-id", container, "btn1");
  expect(buttonEl?.tagName).toEqual("A");
});

describe("when spinner is on", () => {
  test("it renders a 24px spinner for 'medium' size", () => {
    const { container } = render(
      <Button id="btn1" spinner>
        Primary
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  test("it renders a 20px spinner for 'small' size", () => {
    const { container } = render(
      <Button id="btn1" size="small" spinner>
        Small
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  test("it renders a spinner for 'outlined' variant", () => {
    const { container } = render(
      <Button id="btn1" variant="outlined" spinner>
        Small
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  test("it does not render a spinner when disabled is true", () => {
    const { container, queryAllByTestId } = render(
      <Button id="btn1" variant="outlined" spinner disabled>
        Small
      </Button>
    );

    const spinnerEls = queryAllByTestId("button-spinner");
    expect(spinnerEls).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  test("it disables the button and renders a spinner SVG", () => {
    const { container, queryAllByTestId } = render(
      <Button id="btn1" spinner>
        Small
      </Button>
    );

    const buttonEl = container.getElementsByTagName("button").item(0);
    expect(buttonEl).toHaveAttribute("disabled");

    const spinnerEls = queryAllByTestId("button-spinner");
    expect(spinnerEls).toHaveLength(1);
  });
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
