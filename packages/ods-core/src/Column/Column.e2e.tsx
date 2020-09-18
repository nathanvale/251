import * as React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Placeholder } from "../Placeholder";
import { Stack } from "../Stack";
import { Columns } from "../Columns";
import { Heading } from "../Heading";
import { Column, widthValueMap } from "./Column";

export const tests: E2ETests = [
  {
    label: "AlignY Bottom",
    Code: () => (
      <Stack space="medium">
        {Object.keys(widthValueMap)
          .filter((key) => key !== "flex")
          .map((width) => (
            <Columns space="small" key={width}>
              <Column width={width as any}>
                <Placeholder height={60} label={width} />
              </Column>
              <Column>
                <Placeholder height={60} />
              </Column>
            </Columns>
          ))}
      </Stack>
    ),
  },
  {
    label: "Mixing Column Widths With Content Width and Fluid Width",
    Code: () => (
      <Columns space="small">
        <Column>
          <Placeholder />
        </Column>
        <Column width="1/3">
          <Placeholder />
        </Column>
        <Column width="content">
          <Placeholder label="content" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Stretching Space Between Columns",
    Code: () => (
      <Columns space="small">
        <Column width="content">
          <Placeholder label="content" />
        </Column>
        <Column>
          <Placeholder />
        </Column>
        <Column width="content">
          <Placeholder label="content" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Horizontal alignment",
    responsive: true,
    Code: () => (
      <Columns>
        <Column>
          <Placeholder />
        </Column>
        <Column alignX={["center", "right"]}>
          <Placeholder width="50px" height="50px" />
        </Column>
      </Columns>
    ),
  },
  {
    label: "Column display block when alignX = left",
    Code: () => (
      <Columns>
        <Column>
          <Heading variant="h4">Amount paid</Heading>
        </Column>
        <Column>
          <Heading data-id="amount" variant="h2" align="right">
            $25.00
          </Heading>
        </Column>
      </Columns>
    ),
  },
];
