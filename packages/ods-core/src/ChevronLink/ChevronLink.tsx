/* eslint-disable jsx-a11y/anchor-has-content */
import React, { AnchorHTMLAttributes } from "react";
import {
  OptionalTrackableProps,
  LinkComponentProps,
  ChevronVaraints,
} from "@origin-digital/ods-types";
import {
  ChevronLinkRenderer,
  ChevronLinkRendererProps,
} from "../ChevronLinkRenderer/ChevronLinkRenderer";
import { useTracking } from "../_private/hooks/tracking";

export interface ChevronLinkProps
  extends Omit<ChevronLinkRendererProps, "children" | "variant">,
    OptionalTrackableProps {
  variant?: ChevronVaraints;
  href: LinkComponentProps["href"];
  children?: React.ReactNode;
  domProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;
}
const defaultDataId = "chevron-link";
const defaultVariant = "primary";

export const ChevronLink = ({
  "data-id": dataId = defaultDataId,
  variant = defaultVariant,
  children,
  domProps,
  ...rest
}: ChevronLinkProps) => {
  const { onClickCapture, ref } = useTracking({
    children,
    "data-id": dataId,
    type: ChevronLink.displayName,
  });

  return (
    <ChevronLinkRenderer variant={variant}>
      {({ chevronLinkStyles, ChevronContainer }) => (
        <a
          {...domProps}
          {...rest}
          data-id={dataId}
          ref={ref}
          className={chevronLinkStyles}
          onClickCapture={onClickCapture}
        >
          <ChevronContainer>{children}</ChevronContainer>
        </a>
      )}
    </ChevronLinkRenderer>
  );
};

ChevronLink.defaultProps = {
  "data-id": defaultDataId,
  variant: defaultVariant,
};

ChevronLink.displayName = "ChevronLink";
