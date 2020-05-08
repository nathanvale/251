import React, { createContext } from "react";
import { TrackingEventHandler } from "@origin-digital/ods-types";

export interface TrackingProviderProps {
  children: React.ReactNode;
  onTrackingCapture: TrackingEventHandler;
}

export const TrackingContext = createContext<
  | undefined
  | {
      onTrackingCapture: TrackingEventHandler;
    }
>(undefined);

export const TrackingProvider = ({
  children,
  onTrackingCapture,
}: TrackingProviderProps) => {
  return (
    <TrackingContext.Provider value={{ onTrackingCapture }}>
      {children}
    </TrackingContext.Provider>
  );
};

TrackingProvider.displayName = "TrackingProvider";
