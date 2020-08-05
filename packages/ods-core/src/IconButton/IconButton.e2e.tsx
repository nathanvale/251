import { E2ETests } from "@origin-digital/ods-types";
import { generateIconButton } from "./IconButton.helper";

export const tests: E2ETests = [
  {
    label: "Default IconButton",
    Code: () => generateIconButton(),
  },
  {
    label: "Inherit color from Text",
    Code: () =>
      generateIconButton({ color: "inherit" }, {}, { tone: "positive" }),
  },
  {
    label: "Override button color",
    Code: () => generateIconButton({ color: "primary" }, { tone: "positive" }),
  },
  {
    label: "Disabled",
    Code: () => generateIconButton({ color: "primary", disabled: true }),
  },
  {
    label: "No icon padding",
    Code: () => generateIconButton({ color: "primary", noIconPadding: true }),
  },
];
