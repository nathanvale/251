import React, { useState, useMemo, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MuiAccordion, {
  AccordionProps as MuiAccordionProps,
} from "@material-ui/core/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps as MuiAccordionSummaryProps,
} from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails, {
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from "@material-ui/core/AccordionDetails";
import { ComponentBaseProps, MuiProps } from "@origin-digital/ods-types";
import { IconExpand, IconCollapse } from "@origin-digital/ods-icons";
import { Text } from "../Text";
import { useTracking } from "../TrackingProvider";
import { AccordionGroupContext } from "../AccordionGroup";

const useAccordionStyles = makeStyles(
  (theme) => ({
    accordion: {
      "&.Mui-expanded": {
        margin: 0,
      },
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
      borderTop: ({ withGroup }: AccordionStylesProps) =>
        `${withGroup ? 0 : "1px"} solid ${theme.palette.grey[200]}`,
      "&:before": {
        display: "none",
      },
    },
    accordionSummary: {
      padding: ({ size }: AccordionStylesProps) =>
        size === "small" ? 0 : "12px 0",

      "&.Mui-focused": {
        backgroundColor: theme.palette.grey[100],
      },
      "&:hover": {
        "& .MuiAccordionSummary-expandIcon": {
          backgroundColor: theme.palette.grey[100],
        },
      },

      ".MuiAccordionSummary-expandIcon": {
        marginLeft: "16px",
      },
    },
    accordionDetails: {
      padding: ({ size }: AccordionStylesProps) =>
        `0 0 ${size === "small" ? 12 : 24}px`,
    },
  }),
  { classNamePrefix: "Accordion" }
);

interface AccordionMuiProps {
  accordionProps?: MuiAccordionProps;
  accordionSummaryProps?: MuiAccordionSummaryProps;
  accordionDetailsProps?: MuiAccordionDetailsProps;
}

export interface AccordionBaseProps
  extends Omit<ComponentBaseProps, "disabled" | "classes">,
    MuiProps<AccordionMuiProps> {
  children: React.ReactNode;
  summary: React.ReactNode;
  id: string;
  defaultExpanded?: boolean;
  onChange?: () => void;
  size?: "small" | "medium";
}

export interface AccordionControlledProps {
  expanded: boolean;
}

export interface AccordionUncontrolledProps {
  expanded?: undefined;
}

export type AccordionProps =
  | (AccordionBaseProps & AccordionControlledProps)
  | (AccordionBaseProps & AccordionUncontrolledProps);

interface AccordionStylesProps {
  size: AccordionProps["size"];
  withGroup: boolean;
}

const defaultProps: Pick<AccordionProps, "data-id" | "size"> = {
  "data-id": "accordion",
  size: "medium",
};

export const Accordion = ({
  children,
  className,
  expanded,
  id,
  onChange,
  defaultExpanded,
  summary,
  size,
  muiProps,
  ...props
}: AccordionProps) => {
  const { withGroup } = useContext(AccordionGroupContext);
  const { accordion, accordionSummary, accordionDetails } = useAccordionStyles({
    size,
    withGroup,
  });

  const [uncontrolledExpanded, setUncontrolledExpanded] = useState<boolean>(
    defaultExpanded || false
  );

  const trackingProps = {
    children: summary,
    "data-id": props["data-id"]!,
    type: Accordion.displayName,
  };

  const { onClickCapture: onExpandedClickCapture } = useTracking({
    ...trackingProps,
    postClickState: "expanded",
  });
  const { onClickCapture: onCollapsedClickCapture } = useTracking({
    ...trackingProps,
    postClickState: "collapsed",
  });

  const accordionContext = useMemo(() => {
    const isControlled = () => expanded !== undefined;

    const internalExpanded = isControlled() ? expanded : uncontrolledExpanded;
    const interalOnChange = isControlled()
      ? onChange
      : () => setUncontrolledExpanded(!uncontrolledExpanded);

    return {
      expanded: internalExpanded,
      onChange() {
        if (!internalExpanded) {
          onExpandedClickCapture?.();
        } else {
          onCollapsedClickCapture?.();
        }

        interalOnChange?.();
      },
    };
  }, [
    expanded,
    uncontrolledExpanded,
    onExpandedClickCapture,
    onCollapsedClickCapture,
    onChange,
  ]);

  return (
    <MuiAccordion
      className={clsx(className, accordion)}
      {...accordionContext}
      {...props}
      {...(muiProps?.accordionProps || {})}
    >
      <MuiAccordionSummary
        className={clsx(accordionSummary)}
        data-id={`${props["data-id"]}-header`}
        expandIcon={
          accordionContext.expanded ? (
            <IconCollapse tone="critical" />
          ) : (
            <IconExpand tone="critical" />
          )
        }
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        {...(muiProps?.accordionSummaryProps || {})}
      >
        {typeof summary === "string" ? (
          <Text variant="body" weight="medium" component="h4">
            {summary}
          </Text>
        ) : (
          summary
        )}
      </MuiAccordionSummary>
      <MuiAccordionDetails
        className={clsx(accordionDetails)}
        id={`${id}-content`}
        data-id={`${props["data-id"]}-content`}
        {...(muiProps?.accordionDetailsProps || {})}
      >
        {children}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};

Accordion.defaultProps = defaultProps;

Accordion.displayName = "Accordion";
