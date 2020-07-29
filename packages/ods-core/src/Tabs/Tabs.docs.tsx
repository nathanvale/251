import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { IconGas, IconLightbulbOutline } from "@origin-digital/ods-icons";
import { Tab } from "../Tab/Tab";
import { Text } from "../Text/Text";
import { Tabs } from "./Tabs";

export const docs: ComponentDocs = {
  category: "Content",
  componentName: "Tabs",
  description: `A set of components for adding dynamic tab functionality to a page.`,
  migrationGuide: false,
  propDescriptions: {
    defaultValue:
      "If Tabs are uncontrolled, use this prop to set the initial selected Tab",
    value: "Currently selected tab",
    onChange: "Function to be called when a tab is clicked",
    scrollButtons: "",
    children: "Tabs to display - children must be Tab components",
    muiProps: "Allows access to the MUI component API under the hood",
  },
  examples: {
    default: {
      Code: () => (
        <Tabs id="test" defaultValue={0}>
          <Tab data-id="tab1" label="Electricity">
            <Text>Content for electricity</Text>
          </Tab>
          <Tab data-id="tab2" label="Natural gas">
            <Text>Content for natural gas</Text>
          </Tab>
        </Tabs>
      ),
    },
    additional: [
      {
        label: "Controlled tabs",
        description:
          "When you need to reference the tab state from outside the component",
        codeString: `
        const [value, setValue] = React.useState(0);
        const handleChange = (_event, newValue) => setValue(newValue);
  
        return (
          <Tabs id="test" value={value} onChange={handleChange}>
          <Tab data-id="tab1" label="Electricity">
            <Text>Content for electricity</Text>
          </Tab>
          <Tab data-id="tab2" label="Natural gas">
            <Text>Content for natural gas</Text>
          </Tab>
        </Tabs>
          );
        `,
        Code: () => {
          const [value, setValue] = React.useState(0);
          // @ts-ignore
          const handleChange = (_event, newValue) => setValue(newValue);

          return (
            <Tabs id="test" value={value} onChange={handleChange}>
              <Tab data-id="tab1" label="Electricity">
                <Text>Content for electricity</Text>
              </Tab>
              <Tab data-id="tab2" label="Natural gas">
                <Text>Content for natural gas</Text>
              </Tab>
            </Tabs>
          );
        },
        playroom: false,
      },
      {
        label: "Icon tabs",
        description: "Tabs with an icon on them",
        Code: () => (
          <Tabs id="test" aria-label="icon tabs" defaultValue={0}>
            <Tab
              data-id="tab1"
              label="Electricity"
              icon={<IconLightbulbOutline tone="neutral" />}
            />
            <Tab
              data-id="tab2"
              label="Natural gas"
              icon={<IconGas tone="neutral" />}
            />
          </Tabs>
        ),
      },
      {
        label: "Scrollable tabs",
        description: "Scroll your tabs",
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
              icon={<IconLightbulbOutline tone="neutral" />}
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
      },
      {
        label: "Disabled tabs",
        description: "Tabs can be disabled",
        Code: () => (
          <Tabs id="test" defaultValue={0}>
            <Tab
              data-id="tab1"
              label="Electricity"
              icon={<IconLightbulbOutline tone="neutral" />}
            />
            <Tab
              data-id="tab2"
              label="Natural gas"
              icon={<IconGas tone="neutral" />}
              disabled
            />
          </Tabs>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Simple example - uncontrolled",
      Code: () => (
        <Tabs id="test" defaultValue={0}>
          <Tab
            data-id="elec-tab"
            label="Electricity"
            icon={<IconLightbulbOutline tone="neutral" />}
          />
          <Tab
            data-id="gas-tab"
            label="Natural gas"
            icon={<IconGas tone="neutral" />}
          />
        </Tabs>
      ),
    },
  ],
};
