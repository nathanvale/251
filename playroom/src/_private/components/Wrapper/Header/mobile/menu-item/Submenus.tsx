import * as React from "react";

import { IMenuItem } from "../../../IMenuItem";
import { UndecoratedList } from "./atoms/UndecoratedList";
import { MenuGroup } from "./MenuGroup";

interface Props {
  menuItems: IMenuItem[];
  level: number;
  expandedIndex: number[];
  toggleExpandFn: (level: number, index: number) => void;
  shouldShow: boolean;
}

export const Submenus = ({
  menuItems,
  level,
  expandedIndex,
  toggleExpandFn,
  shouldShow,
}: Props) => {
  return (
    <UndecoratedList className={shouldShow ? "" : "hide"}>
      {menuItems &&
        menuItems.map((menuItem, index) => (
          <MenuGroup
            menuItem={menuItem}
            level={level}
            key={index}
            expanded={Boolean(index === expandedIndex[level - 1])}
            expandedIndex={expandedIndex}
            toggleExpandFn={toggleExpandFn}
            toggleExpand={() => toggleExpandFn(level, index)}
          />
        ))}
    </UndecoratedList>
  );
};
