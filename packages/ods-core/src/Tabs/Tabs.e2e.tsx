import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { IconElectricity, IconGas } from "@origin-digital/ods-icons";
import { Tabs } from "../Tabs";
import { Tab } from "../Tab";

export const tests: E2ETests = [
  {
    label: "Default tabs",
    Code: () => (
      <Tabs id="cities" defaultValue="mlb">
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
    ),
    responsive: false,
  },
  {
    label: "Icon tabs",
    Code: () => (
      <Tabs id="test" aria-label="icon tabs" defaultValue={0}>
        <Tab
          data-id="tab1"
          label="Electricity"
          icon={<IconElectricity tone="neutral" />}
        />
        <Tab
          data-id="tab2"
          label="Natural gas"
          icon={<IconGas tone="neutral" />}
        />
      </Tabs>
    ),
    responsive: false,
  },
  {
    label: "Disabled tabs",
    Code: () => (
      <Tabs id="test" defaultValue={0}>
        <Tab
          data-id="tab1"
          label="Electricity"
          icon={<IconElectricity tone="neutral" />}
        />
        <Tab
          data-id="tab2"
          label="Natural gas"
          icon={<IconGas tone="neutral" />}
          disabled
        />
      </Tabs>
    ),
    responsive: false,
  },
  {
    label: "Scrollable tabs",
    Code: () => (
      <Tabs
        id="test"
        aria-label="scrollable tabs"
        defaultValue={0}
        variant="scrollable"
      >
        <Tab
          data-id="tab1"
          label="Electricity"
          icon={<IconElectricity tone="neutral" />}
        />
        <Tab
          data-id="tab3"
          label="Natural gas"
          icon={<IconGas tone="neutral" />}
        />
        <Tab
          data-id="tab4"
          label="Natural gas 2"
          icon={<IconGas tone="neutral" />}
        />
        <Tab
          data-id="tab5"
          label="Natural gas 3"
          icon={<IconGas tone="neutral" />}
        />
        <Tab
          data-id="tab6"
          label="Natural gas 4"
          icon={<IconGas tone="neutral" />}
        />
      </Tabs>
    ),
    responsive: false,
  },
];
