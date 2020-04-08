/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Radio } from "../Radio/Radio";
import {
  getRadioGroupDesc,
  getRadioGroupPropsDesc,
} from "../RadioGroupBase/RadioGroupBase.docs";
import { getCGPropsDocs } from "../ControlGroup/ControlGroup.docs";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

export const docs: ComponentDocs<RadioGroupProps> = {
  category: "Form",
  componentName: "RadioGroup",
  description: getRadioGroupDesc("RadioGroup"),
  propDescriptions: {
    ...getCGPropsDocs("RadioGroup"),
    ...getRadioGroupPropsDesc("RadioGroup"),
  },
  migrationGuide: false,
  examples: [
    {
      label: "Uncontrolled, without initial radio set",
      description: "No radio is initially set",
      Code: () => (
        <RadioGroup name="cities">
          <Radio label="Melbourne" id="mlb" value="mlb" />
          <Radio label="Sydney" id="syd" value="syd" />
          <Radio label="Perth" id="prt" value="prt" />
        </RadioGroup>
      ),
    },
    {
      label: "Uncontrolled with an initial value",
      description: "Initial value is set via defaultValue to 'prt'",
      Code: () => (
        <RadioGroup
          name="cities"
          defaultValue="prt"
          label="Australia cities"
          helperText="Just a few"
        >
          <Radio label="Melbourne" id="mlb" value="mlb" />
          <Radio label="Sydney" id="syd" value="syd" />
          <Radio label="Perth" id="prt" value="prt" />
        </RadioGroup>
      ),
    },
    {
      label: "Controlled",
      description: "The value is shown as the selected radio is changed",
      playroom: false,
      Code: () => {
        const [city, setCity] = React.useState<string>();
        return (
          <>
            <div>
              Current city: <span>{city}</span>
            </div>
            <RadioGroup
              name="cities"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <Radio label="Melbourne" id="mlb" value="mlb" />
              <Radio label="Sydney" id="syd" value="syd" />
              <Radio label="Perth" id="prt" value="prt" />
            </RadioGroup>
          </>
        );
      },
      codeString: `
        const [city, setCity] = React.useState();
        return (
          <>
            <div>
              Current city: <span>{city}</span>
            </div>
            <RadioGroup
              name="cities"
              value={city}
              onChange={e => setCity(e.target.value)}
            >
              <Radio label="Melbourne" id="mlb" value="mlb" />
              <Radio label="Sydney" id="syd" value="syd" />
              <Radio label="Perth" id="prt" value="prt" />
            </RadioGroup>
          </>
        );
      `,
    },
  ],
  snippets: [
    {
      label: "Simple example - uncontrolled",
      Code: () => (
        <RadioGroup name="cities">
          <Radio label="Melbourne" id="mlb" value="mlb" />
          <Radio label="Sydney" id="syd" value="syd" />
          <Radio label="Perth" id="prt" value="prt" />
        </RadioGroup>
      ),
    },
    {
      label: "With initial value - uncontrolled",
      Code: () => (
        <RadioGroup name="cities" defaultValue="syd">
          <Radio label="Melbourne" id="mlb" value="mlb" />
          <Radio label="Sydney" id="syd" value="syd" />
          <Radio label="Perth" id="prt" value="prt" />
        </RadioGroup>
      ),
    },
  ],
};
