import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Placeholder } from "../Placeholder";
import { Card } from "../Card";
import { CardStackSection } from "./CardStackSection";

test("it renders a CardStackSection", () => {
  const { container } = render(
    <CardStackSection>
      <Card>
        <Placeholder />
      </Card>
      <Card>
        <Placeholder />
      </Card>
    </CardStackSection>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it renders a CardStackSection with custom data-id", () => {
  const { container } = render(
    <CardStackSection data-id="myId">
      <Card>
        <Placeholder />
      </Card>
      <Card>
        <Placeholder />
      </Card>
    </CardStackSection>
  );

  expect(container.firstChild).toHaveAttribute("data-id", "myId");
});
