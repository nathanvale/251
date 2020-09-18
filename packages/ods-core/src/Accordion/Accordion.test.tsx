import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { TrackingProvider } from "../TrackingProvider";
import {
  generateAccordion,
  generateControlledAccordion,
} from "./Accordion.helper";
import {
  AccordionBaseProps,
  AccordionControlledProps,
  AccordionUncontrolledProps,
} from "./Accordion";

const renderAccordion = (
  accordionProps: Partial<AccordionBaseProps> & AccordionUncontrolledProps = {}
) => render(generateAccordion(accordionProps));

const renderControlledAccordion = (
  accordionProps: Partial<AccordionBaseProps> & AccordionControlledProps
) => render(generateControlledAccordion(accordionProps));

test("It renders", () => {
  const { container } = renderAccordion();
  expect(container).toMatchSnapshot();
});

test("It uses small padding", () => {
  const { container } = renderAccordion({ size: "small" });
  expect(container).toMatchSnapshot();
});

test("It uses medium padding", () => {
  const { container } = renderAccordion({ size: "medium" });
  expect(container).toMatchSnapshot();
});

test("It sets the id's", () => {
  const { getByTestId } = renderAccordion({ id: "my-id" });
  expect(getByTestId("accordion-header")).toHaveAttribute("id", "my-id-header");
  expect(getByTestId("accordion-content")).toHaveAttribute(
    "id",
    "my-id-content"
  );
});

test("It sets the data-id", () => {
  const { getAllByTestId } = renderAccordion({ "data-id": "my-id" });
  expect(getAllByTestId("my-id")).toHaveLength(1);
});

test("It adds additional class", () => {
  const { getByTestId } = renderAccordion({ className: "my-class" });
  expect(getByTestId("accordion")).toHaveClass("my-class");
});

test("It calls onChange handler", () => {
  const onChange = jest.fn();

  const { getByTestId } = renderControlledAccordion({
    expanded: false,
    onChange,
  });
  fireEvent.click(getByTestId("accordion-header"));
  expect(onChange).toHaveBeenCalled();
});

it("should call tracking handler when passed into the TrackingProvider", () => {
  const summary = "My accordion";

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByTestId } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      {generateAccordion({ summary })}
    </TrackingProvider>
  );

  const expectedValues = {
    "data-id": "accordion",
    type: "Accordion",
    label: summary,
  };

  fireEvent.click(getByTestId("accordion-header"));
  expect(onTrackingCapture).toHaveBeenCalledWith({
    ...expectedValues,
    postClickState: "expanded",
  });

  fireEvent.click(getByTestId("accordion-header"));
  expect(onTrackingCapture).toHaveBeenCalledWith({
    ...expectedValues,
    postClickState: "collapsed",
  });
});
