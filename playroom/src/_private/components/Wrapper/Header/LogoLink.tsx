import styled from "styled-components";
import { BREAK_POINTS } from "../consts/style";
import { BorderedNavLink } from "./NavLink";

export const LogoLink = styled(BorderedNavLink)`
  padding: 7px;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  z-index: 1000;
  float: left;
  position: relative;

  & > svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    padding: 8px;
    box-sizing: border-box;
  }

  @media (min-width: ${BREAK_POINTS.MIN.MD}) {
    padding: 14px;
    height: 136px;
    width: 101px;
    & > svg {
      padding: 14px;
      height: 100%;
      width: 100%;
    }
  }
`;
