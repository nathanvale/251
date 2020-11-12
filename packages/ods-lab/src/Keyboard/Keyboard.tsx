/* eslint-disable react/no-array-index-key */
import React from "react";

import {
  totalDimensions,
  defaultOptions,
  renderSVG,
  SvgPianoOptions,
  _defaultOptions,
} from "svg-piano";

import { getChord } from "./test";

export interface KeyboardProps {
  options?: SvgPianoOptions;
}

const chord = getChord("C3");
const keys = chord.simple();
const labels = chord.labels();

export const Keyboard = ({
  options = {
    ..._defaultOptions,
    range: ["C2", "C5"],
    scaleX: 2,
    scaleY: 2,
    labels,
    colorize: [
      {
        keys,
        color: "lightblue",
      },
    ],
  },
}: KeyboardProps) => {
  options = defaultOptions(options);
  const { children } = renderSVG(options);
  const dimensions = totalDimensions(options);

  const laneHeight = 20;
  const lanes = [
    /*{ range: ["C2", "C3"], fill: "purple" },
    { range: ["C2", "C3"], fill: "violet" }*/
  ];

  const [, height] = [
    dimensions[0],
    dimensions[1] + lanes.length * laneHeight + options.strokeWidth * 2,
  ];

  return (
    <svg width={dimensions[0]} height={height}>
      {children.map(({ polygon, circle, text }, index) => [
        polygon && <polygon {...polygon} key={`p${index}`} />,
        circle && <circle {...circle} key={`c${index}`} />,
        text && (
          <text {...text} key={`t${index}`}>
            {text.value}
          </text>
        ),
      ])}
    </svg>
  );
};

Keyboard.displayName = "Keyboard";

Keyboard.defaultProps = {};
