import * as React from "react";

import { IMenuItem } from "../../../IMenuItem";
import { MenuRowInner } from "./atoms/MenuRowInner";
import { MenuLink } from "./atoms/MenuLink";
import { ExpansionButton } from "./ExpansionButton";

interface Props {
  menuItem: IMenuItem;
  level: number;
  expanded: boolean;
  toggleExpand: () => void;
}

export const MenuItem = ({
  menuItem,
  level,
  expanded,
  toggleExpand,
}: Props) => (
  <MenuRowInner>
    <MenuLink
      className={`level-${level}`}
      href="#"
      level={level}
      data-id={menuItem.tracking}
      componentType="navMobileMenuItem"
    >
      {menuItem.title}
    </MenuLink>
    {menuItem.children && menuItem.children.length > 0 && (
      <ExpansionButton expanded={expanded} toggleExpand={toggleExpand} />
    )}
  </MenuRowInner>
);
