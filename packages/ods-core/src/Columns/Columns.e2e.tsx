import * as React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Column } from "../Column/Column";
import { Placeholder } from "../Placeholder/Placeholder";
import { Columns } from "./Columns";

export const tests: E2ETests = [
  {
    label: "AlignY Bottom",
    Code: () => (
      <Columns alignY="bottom">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "AlignY Center",
    Code: () => (
      <Columns alignY="center">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Default AlignY - Top",
    Code: () => (
      <Columns>
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Space xxsmall",
    Code: () => (
      <Columns space="xxsmall">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Space xsmall",
    Code: () => (
      <Columns space="xsmall">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Space small",
    Code: () => (
      <Columns space="small">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Space medium",
    Code: () => (
      <Columns space="medium">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Space large",
    Code: () => (
      <Columns space="large">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Space xlarge",
    Code: () => (
      <Columns space="xlarge">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Space xxlarge",
    Code: () => (
      <Columns space="xxlarge">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Space xxxlarge",
    Code: () => (
      <Columns space="xxxlarge">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Responsive space",
    responsive: true,
    Code: () => (
      <Columns space={["xsmall", "xlarge"]}>
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Collapse bellow md",
    responsive: true,
    Code: () => (
      <Columns collapseBelow="md" space="medium">
        <Column>
          <Placeholder height="100px" />
        </Column>
        <Column>
          <Placeholder height="40px" />
        </Column>
        <Column>
          <Placeholder height="70px" />
        </Column>
      </Columns>
    ),
  },
];
