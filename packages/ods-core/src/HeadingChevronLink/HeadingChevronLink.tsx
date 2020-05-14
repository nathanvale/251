import React, { AnchorHTMLAttributes } from "react";
import { ComponentBaseProps } from "@origin-digital/ods-types";
import { Heading } from "../Heading/Heading";
import { ChevronLinkRenderer } from "../ChevronLinkRenderer/ChevronLinkRenderer";
import { Box } from "../Box/Box";
import { useTracking } from "../_private/hooks/tracking";

export interface HeadingChevronLinkProps extends ComponentBaseProps {
  "data-id"?: string;
  href: string;
  domProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;
}
const defaultDataId = "heading-chevron-link";
export const HeadingChevronLink = ({
  "data-id": dataId = defaultDataId,
  children,
  domProps,
  ...rest
}: HeadingChevronLinkProps) => {
  const { onClickCapture, ref } = useTracking({
    children,
    "data-id": dataId,
    type: HeadingChevronLink.displayName,
  });
  return (
    <ChevronLinkRenderer variant="primary">
      {({ chevronLinkStyles, IconChevron }) => (
        <a
          {...domProps}
          ref={ref}
          onClickCapture={onClickCapture}
          data-id={dataId}
          {...rest}
          className={chevronLinkStyles}
        >
          <Box paddingRight="xsmall">
            <Heading variant="h4">{children}</Heading>
          </Box>
          <IconChevron />
        </a>
      )}
    </ChevronLinkRenderer>
  );
};

HeadingChevronLink.defaultProps = {
  "data-id": defaultDataId,
};

HeadingChevronLink.displayName = "HeadingChevronLink";
