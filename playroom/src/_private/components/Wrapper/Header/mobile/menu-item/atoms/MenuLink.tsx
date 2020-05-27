import styled from "styled-components";

/**
 * The first part of each MenuItem is a menu link that points to a page.
 */
export const MenuLink = styled.a<any>`
  flex-grow: 1;

  text-decoration: none;
  vertical-align: middle;

  color: inherit;

  padding-left: ${(p: { level: number }) => 16 + (p.level - 1) * 24}px;
  &.level-1 {
    font-size: 16px;
    font-weight: bold;
  }
`;
