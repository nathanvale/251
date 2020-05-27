import styled from "styled-components";

import { COLOURS, BREAK_POINTS, Z_INDEX } from "../../consts/style";

export const TRANSITION_TIME = 300;

export const MenuContainer = styled.div`
  top: 0;
  left: -105%;
  width: 100vw;
  height: 100%;
  overflow: auto;
  background-color: ${COLOURS.GREY.WHITE};
  position: fixed;
  z-index: ${Z_INDEX.MOBILE_MENU_CONTAINER};

  @media (min-width: ${BREAK_POINTS.MIN.MD}) {
    display: none;
  }

  &.slideIn {
    transform: translateX(105vw);
  }
  &.slideOut {
    transform: translateX(-5vw);
  }
  &.addTransition {
    transition: ${TRANSITION_TIME}ms ease-in-out;
  }
`;
