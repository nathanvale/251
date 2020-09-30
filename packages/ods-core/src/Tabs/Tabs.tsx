import React from "react";
import {
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { MuiBasedComponentBaseProps, TabSize } from "@origin-digital/ods-types";
import { TabProps } from "../Tab";
import { TabPanel } from "../TabPanel";

export interface TabsProps extends MuiBasedComponentBaseProps {
  "aria-label"?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<{}>, newValue: string | number) => void;
  variant?: "standard" | "scrollable" | "fullWidth";
  scrollButtons?: "auto" | "on" | "off";
  size?: TabSize;
  hideDivider?: boolean;
  muiProps?: MuiTabsProps;
}

const useTabsStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      borderBottom: ({ hideDivider }: TabsProps) =>
        hideDivider ? "none" : `1px solid ${theme.palette.grey[200]}`,
    },
    indicator: {
      height: "4px",
    },
  }),
  { classNamePrefix: "tabs" }
);

export interface TabsProviderContext {
  size?: TabSize;
}

export const TabsContext = React.createContext<TabsProviderContext>({});

export const Tabs = ({
  defaultValue,
  value,
  onChange,
  hideDivider,
  size,
  children,
  muiProps,
  ...others
}: TabsProps) => {
  const classes = useTabsStyles({ hideDivider });
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue
  );
  const uncontrolledChange = (
    _event: React.ChangeEvent<{}>,
    newValue: string | number
  ) => setUncontrolledValue(newValue);

  const activeTab = value === undefined ? uncontrolledValue : value;

  return (
    <TabsContext.Provider value={{ size }}>
      <MuiTabs
        classes={classes}
        value={activeTab}
        onChange={onChange || uncontrolledChange}
        {...muiProps}
        {...others}
      >
        {children}
      </MuiTabs>
      {React.Children.map(
        children as React.ReactElement<TabProps>[],
        (tab: React.ReactElement<TabProps>, index) => {
          const tabValue = tab.props.value || index;
          return (
            <TabPanel
              hidden={tabValue !== activeTab}
              value={tabValue}
              tabId={tab.props.id}
            >
              {tab.props.children}
            </TabPanel>
          );
        }
      )}
    </TabsContext.Provider>
  );
};

Tabs.defaultProps = {
  scrollButtons: "auto",
  variant: "standard",
  "aria-label": "tabs",
  size: "medium",
};
Tabs.displayName = "Tabs";
