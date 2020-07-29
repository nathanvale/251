import { E2ETests } from "@origin-digital/ods-types";
import { generateAlertBanner } from "../AlertBanner/AlertBanner.helper";

export const tests: E2ETests = [
  {
    label: "Default alert",
    Code: () => generateAlertBanner(),
  },
  {
    label: "Offset",
    Code: () => generateAlertBanner({ offset: 44 }),
  },
];
