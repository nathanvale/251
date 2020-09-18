import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Tab } from "../Tab";
import { Tabs } from "./Tabs";

test("it selects only one Tab in the group when one is clicked", () => {
  const ControlledTabs = () => {
    const [value, setValue] = React.useState("mlb");
    const handleChange = (_e: React.ChangeEvent<{}>, newVal: any) =>
      setValue(newVal);

    return (
      <Tabs id="cities" value={value} onChange={handleChange}>
        <Tab label="Melbourne" id="mlb" value="mlb">
          Melbourne
        </Tab>
        <Tab label="Sydney" id="syd" value="syd">
          Sydney
        </Tab>
        <Tab label="Perth" id="prt" value="prt">
          Perth
        </Tab>
      </Tabs>
    );
  };
  const { container } = render(<ControlledTabs />);

  const [mlbButton, sydButton, prtButton] = Array.from(
    container.getElementsByTagName("button")
  );

  expect(mlbButton.classList).toContain("Mui-selected");
  expect(sydButton.classList).not.toContain("Mui-selected");
  expect(prtButton.classList).not.toContain("Mui-selected");

  sydButton.click();

  expect(mlbButton.classList).not.toContain("Mui-selected");
  expect(sydButton.classList).toContain("Mui-selected");
  expect(prtButton.classList).not.toContain("Mui-selected");
});

test("it renders", () => {
  const { container } = render(
    <Tabs id="cities" value="mlb">
      <Tab label="Melbourne" id="mlb" value="mlb">
        Melbourne
      </Tab>
      <Tab label="Sydney" id="syd" value="syd">
        Sydney
      </Tab>
      <Tab label="Perth" id="prt" value="prt">
        Perth
      </Tab>
    </Tabs>
  );
  expect(container).toMatchSnapshot();
});
