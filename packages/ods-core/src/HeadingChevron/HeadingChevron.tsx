import React, { FunctionComponent, AnchorHTMLAttributes } from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { ComponentBaseProps } from "@origin-digital/ods-types";
import { IconChevronRight } from "@origin-digital/ods-icons";
import { Heading } from "../Heading/Heading";
import {
  ChevronLinkRenderer,
  useChevronLinkStyles
} from "../ChevronLinkRenderer/ChevronLinkRenderer";
import { Box } from "../Box/Box";

export interface HeadingChevronProps extends ComponentBaseProps {
  "data-id"?: string;
  href: string;
  domProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;
}

export const useHeadingChevronStyles = () => {
  const linkStyles = useChevronLinkStyles({ variant: "primary" });
  const headingChevronStyles = makeStyles(
    {
      "heading-chevron": {
        padding: "0px",
        "& * svg": {
          height: "24px",
          width: "24px",
          marginTop: "-5px",
          marginBottom: "-8px"
        }
      }
    },
    { classNamePrefix: "typography" }
  )()["heading-chevron"];
  return clsx(linkStyles, headingChevronStyles);
};

export const HeadingChevron: FunctionComponent<HeadingChevronProps> = ({
  "data-id": dataId,
  children,
  domProps,
  ...rest
}) => {
  const headingChevronStyles = useHeadingChevronStyles();
  return (
    <ChevronLinkRenderer variant="primary">
      {() => (
        <a
          {...domProps}
          data-id={dataId}
          {...rest}
          className={headingChevronStyles}
        >
          <Box display="flex">
            <Heading variant="h4">{children}</Heading>
            <IconChevronRight />
          </Box>
        </a>
      )}
    </ChevronLinkRenderer>
  );
};

HeadingChevron.defaultProps = {
  "data-id": "heading-chevron"
};

HeadingChevron.displayName = "HeadingChevron";
