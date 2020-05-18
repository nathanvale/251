/* eslint-disable react/display-name */
import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Placeholder } from "../Placeholder/Placeholder";
import { Card } from "./Card";

export const tests: E2ETests = [
  {
    label: "Default card",
    Code: () => (
      <Card>
        <Placeholder />
      </Card>
    ),
    responsive: true,
  },
  {
    label: "Medium padding",
    Code: () => (
      <Card padding="medium">
        <Placeholder />
      </Card>
    ),
    responsive: true,
  },
  {
    label: "Large padding",
    Code: () => (
      <Card padding="large">
        <Placeholder />
      </Card>
    ),
    responsive: true,
  },
];
