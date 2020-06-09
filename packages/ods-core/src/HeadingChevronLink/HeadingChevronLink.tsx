import React from "react";
import { LinkBaseProps } from "@origin-digital/ods-types";
import { Heading } from "../Heading/Heading";
import { ChevronLinkRenderer } from "../ChevronLinkRenderer/ChevronLinkRenderer";
import { Box } from "../Box/Box";
import { TrackedLink } from "..";

export interface HeadingChevronLinkProps extends LinkBaseProps {}
const defaultDataId = "heading-chevron-link";
export const HeadingChevronLink = ({
  "data-id": dataId = defaultDataId,
  children,
  domProps,
  target,
  ...rest
}: HeadingChevronLinkProps) => {
  return (
    <ChevronLinkRenderer variant="primary">
      {({ chevronLinkStyles, IconChevron }) => (
        <TrackedLink
          domProps={{ ...domProps, className: chevronLinkStyles }}
          trackingType={HeadingChevronLink.displayName}
          trackingLabel={children}
          data-id={dataId}
          target={target}
          {...rest}
        >
          <Box paddingRight="xsmall">
            <Heading variant="h4">{children}</Heading>
          </Box>
          <IconChevron />
        </TrackedLink>
      )}
    </ChevronLinkRenderer>
  );
};

HeadingChevronLink.defaultProps = {
  "data-id": defaultDataId,
};

HeadingChevronLink.displayName = "HeadingChevronLink";
