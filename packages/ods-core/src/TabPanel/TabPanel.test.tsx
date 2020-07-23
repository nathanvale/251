import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { TabPanel } from "../TabPanel/TabPanel";

test("it renders", () => {
  const { container } = render(<TabPanel value="0">testing</TabPanel>);
  expect(container).toMatchSnapshot();
});

test("should be hidden when not the active tab", () => {
  const { container } = render(
    <TabPanel value="0" hidden>
      testing
    </TabPanel>
  );
  expect(container).toMatchSnapshot();
});
