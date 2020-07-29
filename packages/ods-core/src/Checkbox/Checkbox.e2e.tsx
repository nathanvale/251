import * as React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Checkbox } from "./Checkbox";

export const tests: E2ETests = [
  {
    label: "Unchecked Checkbox",
    Code: () => <Checkbox id="checkbox" label="Unchecked" />,
  },
  {
    label: "Unchecked disabled Checkbox",
    Code: () => <Checkbox id="checkbox" label="Unchecked" disabled />,
  },
  {
    label: "Unchecked error Checkbox",
    Code: () => <Checkbox id="checkbox" label="Unchecked" error />,
  },
  {
    label: "Checked Checkbox",
    Code: () => <Checkbox id="checkbox" label="Checked" checked />,
  },
  {
    label: "Checked disabled Checkbox",
    Code: () => <Checkbox id="checkbox" label="Checked" checked disabled />,
  },
  {
    label: "Checked error Checkbox",
    Code: () => <Checkbox id="checkbox" label="Checked" checked error />,
  },
  {
    label: "Checkbox wit helperText",
    Code: () => (
      <Checkbox id="checkbox" label="chk-helper" helperText="More info" />
    ),
  },
];
