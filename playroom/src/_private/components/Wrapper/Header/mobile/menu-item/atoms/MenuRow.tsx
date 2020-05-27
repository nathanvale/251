import styled from "styled-components";

import { COLOURS, NAV } from "../../../../consts/style";

/**
 * This is a container of a menu item.
 */
export const MenuRow = styled.li`
  border: 1px solid ${COLOURS.GREY.GREY_8};
  font-size: 14px;
  font-weight: normal;
  list-style: none;
  overflow: ${(p: { expanded: boolean }) => (p.expanded ? "auto" : "visible")};
  width: 100vw;
  box-sizing: border-box;

  svg {
    fill: ${COLOURS.PRIMARY.RED_PINK};
    width: ${NAV.MOBILE_ITEM.SVG.SIDE_LEN};
    height: ${NAV.MOBILE_ITEM.SVG.SIDE_LEN};
  }
` as any;
