import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Placeholder } from "../Placeholder/Placeholder";
import { DividerCard, DividerCardProps } from "./DividerCard";

const RenderNull = () => null;

const renderDividerCard = (props: DividerCardProps = {}) =>
  render(
    <DividerCard {...props}>
      <Placeholder />
      <Placeholder />
    </DividerCard>
  );

test("it renders a divider card", () => {
  const { container } = renderDividerCard();
  expect(container).toMatchSnapshot();
});

test("it renders a divider card with custom data-id", () => {
  const { container } = renderDividerCard({ "data-id": "myId" });
  expect(container.firstChild).toHaveAttribute("data-id", "myId");
});

test("it renders a divider card with medium padding and medium spacing", () => {
  const { container } = renderDividerCard({
    padding: "medium",
    space: "medium",
  });
  expect(container).toMatchSnapshot();
});

test("it renders a divider card with large padding", () => {
  const { container } = renderDividerCard({ padding: "large", space: "large" });
  expect(container).toMatchSnapshot();
});

test("it renders a divider card with a selected background color", () => {
  const { container } = renderDividerCard({
    padding: "large",
    space: "large",
    backgroundColor: "grey50",
  });
  expect(container).toMatchSnapshot();
});

test("It can distribute space with null children", () => {
  const { container } = render(
    <DividerCard space="xxlarge">
      <RenderNull />
      <Placeholder />
      <RenderNull />
      <Placeholder />
      <RenderNull />
      <Placeholder />
      <RenderNull />
    </DividerCard>
  );
  expect(container).toMatchSnapshot();
});
