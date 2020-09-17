import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Placeholder } from "../Placeholder";
import { DividerCard } from "./DividerCard";

const RenderNull = () => null;

export const tests: E2ETests = [
  {
    label: "Default card",
    Code: () => (
      <DividerCard>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </DividerCard>
    ),
    responsive: true,
  },
  {
    label: "Medium padding and medium space",
    Code: () => (
      <DividerCard padding="medium" space="medium">
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </DividerCard>
    ),
    responsive: true,
  },
  {
    label: "Large padding and large space",
    Code: () => (
      <DividerCard padding="large" space="large">
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </DividerCard>
    ),
    responsive: true,
  },
  {
    label: "Rendered with null children",
    Code: () => (
      <DividerCard space="xxlarge">
        <RenderNull />
        <Placeholder />
        <RenderNull />
        <Placeholder />
        <RenderNull />
        <Placeholder />
        <RenderNull />
      </DividerCard>
    ),
  },
];
