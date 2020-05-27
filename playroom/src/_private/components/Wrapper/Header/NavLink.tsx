import styled from "styled-components";
import { BREAK_POINTS } from "../consts/style";
import { StyledLink } from "../Link";

export const NavLink = styled(StyledLink)`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;

  & > img {
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
  & > span {
    visibility: hidden;
    margin-left: -10000px;
    position: absolute;
  }
  & > svg {
    fill: #ababab;
    width: 33px;
    height: 33px;
    padding: 0;
  }

  &.active {
    > span {
      border-bottom: 3px solid #ffb432;
      padding-bottom: 5px;
    }
  }
  @media (min-width: ${BREAK_POINTS.MIN.MD}) {
    line-height: 100%;
    & > svg {
      width: 22px;
      height: 22px;
      position: relative;
      top: -2px;
      padding: 0;
    }
    & > span {
      font-size: 12px;
      font-weight: 500;
      visibility: visible;
      margin: 0;
      height: 12px;
      display: inline-block;
      vertical-align: top;
      position: relative;
      top: 3px;
      padding-left: 1px;
    }
  }
`;

export const BorderedNavLink = styled(NavLink)`
  padding: 14px;
  border-right: 1px solid #e3e3e3;

  @media (min-width: ${BREAK_POINTS.MIN.LG}) {
    &:first-child {
      border-left: 1px solid #e3e3e3;
    }
  }

  @media (min-width: ${BREAK_POINTS.MIN.MD}) {
    height: 100%;
    padding: 14px 32px;
  }
`;
