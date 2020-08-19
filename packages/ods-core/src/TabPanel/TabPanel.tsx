import React from "react";
import { ComponentBaseProps } from "@origin-digital/ods-types/src";
import { Box } from "../Box/Box";

export interface TabPanelProps extends ComponentBaseProps {
  hidden?: boolean;
  value?: string | number;
  tabId?: string;
}

export const TabPanel = ({
  hidden,
  value,
  tabId,
  children,
  ...other
}: TabPanelProps) => (
  <Box
    marginY="xlarge"
    domProps={{ role: "tabpanel", hidden }}
    id={`tabpanel-${value}`}
    aria-labelledby={tabId || `tab-${value}`}
    {...other}
  >
    {children}
  </Box>
);

TabPanel.displayName = "TabPanel";
