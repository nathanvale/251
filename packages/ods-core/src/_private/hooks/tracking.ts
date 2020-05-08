import { useRef, useContext } from "react";
import { TrackingContext } from "../../TrackingProvider/TrackingProvider";

interface UseTrackingProps {
  children: React.ReactNode;
  ["data-id"]: string;
  type: string;
  postClickState?: string;
}

export function useTracking({
  "data-id": dataId,
  type,
  postClickState,
  children,
}: UseTrackingProps) {
  const ref = useRef<HTMLElement>(null);
  const context = useContext(TrackingContext);
  let onClickCapture;
  if (context) {
    const { onTrackingCapture } = context;
    onClickCapture = () => {
      const label =
        typeof children === "string"
          ? children
          : ref?.current?.textContent ?? "";
      if (onTrackingCapture) {
        onTrackingCapture({
          "data-id": dataId,
          type,
          label,
          postClickState,
        });
      }
    };
  }
  const obj = {
    onClickCapture,
    ref:
      typeof children === "string" ? undefined : (ref as React.RefObject<any>),
  };
  return obj;
}
