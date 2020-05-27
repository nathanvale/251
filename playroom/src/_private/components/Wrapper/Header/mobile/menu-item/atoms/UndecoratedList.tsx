import styled from "styled-components";

/**
 * A list with decorations removed. Will be the container of menu lists
 * (submenus) of every given MenuItem.
 */
export const UndecoratedList = styled.ul`
  padding: 0;
  margin: 0;
  &.hide {
    display: none;
  }
`;
