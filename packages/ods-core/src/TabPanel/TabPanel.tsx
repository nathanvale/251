import React from "react";
import { MuiBasedComponentBaseProps } from "@origin-digital/ods-types/src";
import { Box } from "../Box";

export interface TabPanelProps extends MuiBasedComponentBaseProps {
  hidden?: boolean;
  value?: string | number;
  tabId?: string;
}

export const TabPanel = ({
  children,
  hidden,
  id,
  tabId,
  value,
  ...other
}: TabPanelProps) => (
  <Box
    marginTop="xlarge"
    domProps={{ role: "tabpanel", hidden }}
    id={id || `tabpanel-${value}`}
    aria-labelledby={tabId || `tab-${value}`}
    {...other}
  >
    {children}
  </Box>
);

TabPanel.displayName = "TabPanel";
