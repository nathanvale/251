import * as React from "react";
import styled from "styled-components";

import { ExpandIcon } from "../../../Svg/Expand";
import { CollapseIcon } from "../../../Svg/Collapse";
import { COLOURS, NAV } from "../../../consts/style";

/**
 * This span is the container of the expand/collapse section.
 */
const Expansion = styled.span`
  height: 100%;
  width: ${NAV.MOBILE_ITEM.EXPANSION_WIDTH};
  flex-grow: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 1px solid ${COLOURS.GREY.GREY_8};
`;

/**
 * This component is the expander button in each MenuItem.
 * @param showExpansion: Whether the expansion should be shown or hidden.
 * @param expanded: The current status of the menu, expanded = true, collapsed = false.
 * @param toggleExpand: The handler method which expands/collapses the submenus of the current MenuItem.
 */
export const ExpansionButton = ({
  expanded,
  toggleExpand,
}: {
  expanded: boolean;
  toggleExpand: any;
}) => (
  <Expansion onClick={toggleExpand}>
    {expanded ? <CollapseIcon /> : <ExpandIcon />}
  </Expansion>
);
