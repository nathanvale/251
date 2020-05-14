import { useEffect } from "react";

export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "visible";
      };
    }
    return undefined;
  }, [lock]);
}
