import React from "react";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { ToggleButtonGroup, ToggleButtonGroupProps } from "./ToggleButtonGroup";

export const toggleButtons = ["Sydney", "Brisbane", "Perth", "Melbourne"];
export const toggleButtonsObject = [
  { label: "Sydney", value: "sydn" },
  { label: "Brisbane", value: "brsb" },
  { label: "Perth", value: "prth" },
  { label: "Melbourne", value: "melb" },
];

export const generateToggleButtonGroup = (
  props: Partial<ToggleButtonGroupProps> = {},
  childrenType: "string" | "object" | "ReactNode" = "string",
  disabledIndex: number = -1
) => {
  const { id, "data-id": dataId, ...others } = props;
  const calcId = id || "Australian city";
  return (
    <ToggleButtonGroup
      data-id={dataId || calcId}
      id={calcId}
      {...(childrenType === "string"
        ? {
            options: toggleButtons,
          }
        : {})}
      {...(childrenType === "object"
        ? {
            options: toggleButtonsObject,
          }
        : {})}
      {...others}
    >
      {childrenType === "ReactNode" &&
        toggleButtonsObject.map((obj, idx) => (
          <ToggleButton
            aria-label={obj.label}
            key={obj.value}
            value={obj.value}
            {...(idx === disabledIndex ? { disabled: true } : {})}
          >
            {obj.label}
          </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
};
