// @ts-ignore
import untypedIsolatedScroll from "isolated-scroll";
import { useEffect } from "react";

const isolatedScroll: (el: Element) => () => void = untypedIsolatedScroll;

export function useIsolatedScroll(menuElement: HTMLElement | null) {
  useEffect(() => {
    if (menuElement) {
      const i = isolatedScroll(menuElement);
      return i;
    }
    return undefined;
  }, [menuElement]);
}
