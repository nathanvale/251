import { ReactNode } from "react";
import { Page } from "../../../Page/Page";

export const ODS_ADDRESS =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://docs.origindigital-dac.com.au/designsystem/master/#";

export const baseCompsURL = "/components";
export const baseGuidesURL = "/guides";
export const baseMigrationGuidesURL = `${baseGuidesURL}/migration-guide`;

export const STYLE_GUIDE_URL =
  "https://assets-digital.origindigital-dac.com.au/react/library/main/style-guide-docs/index.html#/style-guide";

export interface ComponentMigrationGuide {
  compName: string;
  route: string;
  ListItemComp: ReactNode;
  PageComp: typeof Page;
}
