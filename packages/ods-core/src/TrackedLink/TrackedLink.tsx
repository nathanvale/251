import React from "react";
import { LinkBaseProps } from "@origin-digital/ods-types";
import { useLinkComponent } from "../OriginThemeProvider/OriginThemeProvider";
import { useTracking } from "../TrackingProvider/useTracking";

const defaultDataId = "tracked-link";

export interface TrackedLinkProps extends LinkBaseProps {
  trackingLabel: React.ReactNode;
  trackingType: string;
}

export const TrackedLink = ({
  "data-id": dataId = defaultDataId,
  trackingLabel,
  trackingType,
  children,
  domProps,
  ...rest
}: TrackedLinkProps) => {
  const { onClickCapture, ref } = useTracking({
    children: trackingLabel,
    "data-id": dataId,
    type: trackingType,
  });
  const LinkComponent = useLinkComponent();

  return (
    <LinkComponent
      ref={ref}
      data-id={dataId}
      onClickCapture={onClickCapture}
      {...rest}
      {...domProps}
    >
      {children}
    </LinkComponent>
  );
};

TrackedLink.defaultProps = {
  "data-id": defaultDataId,
};

TrackedLink.displayName = "TrackedLink";
