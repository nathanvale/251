/* eslint-disable react/display-name */
import React, { Fragment } from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Placeholder } from "../Placeholder/Placeholder";
import { Inline } from "./Inline";

export const tests: E2ETests = [
  {
    label:
      "It should CollapseBelow + align: On mobile should be vertical and left aligned,  on desktop should be horizontal and right aligned",
    Code: () => (
      <Inline space="small" collapseBelow="lg" alignX={["left", "right"]}>
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
    responsive: true,
  },
  {
    label:
      "It should flatten fragments (6 placeholders should be evenly spaced)",
    Code: () => (
      <Inline space="small">
        <Fragment>
          <Fragment>
            <Placeholder width={48} height={48} />
          </Fragment>
          <Fragment>
            <Placeholder width={48} height={48} />
          </Fragment>
        </Fragment>
        <Fragment>
          <Fragment>
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Fragment>
              <Placeholder width={48} height={48} />
            </Fragment>
          </Fragment>
        </Fragment>
        <Placeholder width={48} height={48} />
      </Inline>
    ),
    responsive: true,
  },
];
