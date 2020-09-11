import { E2ETests } from "@origin-digital/ods-types";

import {
  generateToggleButtonGroup,
  toggleButtons,
  toggleButtonsObject,
} from "./ToggleButtonGroup.helper";

export const tests: E2ETests = [
  {
    label: "Default ToggleButtonGroup",
    Code: () => generateToggleButtonGroup({ defaultValue: toggleButtons[2] }),
  },
  {
    label: "Content width",
    Code: () =>
      generateToggleButtonGroup({
        defaultValue: toggleButtons[1],
        width: "content",
      }),
  },
  {
    label: "Disabled ToggleButton",
    Code: () =>
      generateToggleButtonGroup(
        {
          defaultValue: toggleButtonsObject[1].value,
        },
        "ReactNode",
        2
      ),
  },
  {
    label: "Small ToggleButtonGroup",
    Code: () =>
      generateToggleButtonGroup({
        defaultValue: toggleButtons[1],
        size: "small",
      }),
  },
];
