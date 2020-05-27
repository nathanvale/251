import React, { AnchorHTMLAttributes } from "react";
import {
  LinkComponentProps,
  OptionalTrackableProps,
} from "@origin-digital/ods-types";
import { useLinkComponent } from "../OriginThemeProvider/OriginThemeProvider";
import { useTracking } from "../_private/hooks/tracking";

const defaultDataId = "tracked-link";

export interface TrackedLinkProps extends OptionalTrackableProps {
  trackingLabel: React.ReactNode;
  trackingType: string;
  href: LinkComponentProps["href"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  children?: React.ReactNode;
  domProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

export const TrackedLink = ({
  "data-id": dataId = defaultDataId,
  trackingLabel,
  trackingType,
  children,
  domProps,
  ...props
}: TrackedLinkProps) => {
  const { onClickCapture, ref } = useTracking({
    children: trackingLabel,
    "data-id": dataId,
    type: trackingType,
  });
  const LinkComponent = useLinkComponent();

  return (
    <LinkComponent
      {...domProps}
      ref={ref}
      data-id={dataId}
      onClickCapture={onClickCapture}
      {...props}
    >
      {children}
    </LinkComponent>
  );
};

TrackedLink.defaultProps = {
  "data-id": defaultDataId,
};

TrackedLink.displayName = "TrackedLink";
