import styled from "styled-components";

import { NAV } from "../../../../consts/style";

/**
 * The inner structure of a MenuItem which will contain the link and the ExpandButton.
 */
export const MenuRowInner = styled.div`
  height: ${NAV.MOBILE_ITEM.HEIGHT};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
