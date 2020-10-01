import React, { createContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ComponentBaseProps } from "@origin-digital/ods-types";
import { Box } from "../Box";

export interface AccordionGroupProps extends ComponentBaseProps {
  children: React.ReactNode;
}

const useAccordionGroupStyles = makeStyles(
  (theme) => ({
    accordionGroupBorder: {
      borderTop: `1px solid ${theme.palette.grey[200]}`,
    },
  }),
  { classNamePrefix: "AccordionGroup" }
);

const defaultProps: Partial<AccordionGroupProps> = {
  "data-id": "accordion-group",
};

export interface AccordionGroupContextValue {
  withGroup: boolean;
}

export const AccordionGroupContext = createContext<AccordionGroupContextValue>({
  withGroup: false,
});

export const AccordionGroup = ({
  children,
  className,
  ...props
}: AccordionGroupProps) => {
  const accordionGroupContextValue = {
    withGroup: true,
  };

  const { accordionGroupBorder } = useAccordionGroupStyles();

  return (
    <Box className={clsx(className, accordionGroupBorder)} {...props}>
      <AccordionGroupContext.Provider value={accordionGroupContextValue}>
        {children}
      </AccordionGroupContext.Provider>
    </Box>
  );
};

AccordionGroup.defaultProps = defaultProps;

AccordionGroup.displayName = "AccordionGroup";
