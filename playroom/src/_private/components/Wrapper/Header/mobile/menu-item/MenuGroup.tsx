import * as React from "react";

import { IMenuItem } from "../../../IMenuItem";
import { MenuItem } from "./MenuItem";
import { Submenus } from "./Submenus";
import { MenuRow } from "./atoms/MenuRow";

interface Props {
  menuItem: IMenuItem;
  level: number;
  expanded: boolean;
  expandedIndex: number[];
  toggleExpandFn: (level: number, index: number) => void;
  toggleExpand: () => void;
}

export const MenuGroup = ({
  menuItem,
  level,
  expanded,
  expandedIndex,
  toggleExpandFn,
  toggleExpand,
}: Props) => (
  <MenuRow>
    <MenuItem
      key={0}
      menuItem={menuItem}
      level={level}
      expanded={expanded}
      toggleExpand={toggleExpand}
    />
    {expanded && (
      <Submenus
        key={1}
        level={level + 1}
        menuItems={menuItem.children}
        expandedIndex={expandedIndex}
        toggleExpandFn={toggleExpandFn}
        shouldShow={expanded}
      />
    )}
  </MenuRow>
);
