import React from "react";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";

export interface TrackingDisableProps {
  children: React.ReactNode;
}

export const TrackingDisable = ({ children }: TrackingDisableProps) => (
  // ignore passing undefined to a required prop. avoids passing a noop func
  // @ts-ignore
  <TrackingProvider onTrackingCapture={undefined} children={children} />
);

TrackingDisable.displayName = "TrackingDisable";
