import { setTimeout } from "timers";
import * as React from "react";
import styled from "styled-components";

import { BREAK_POINTS, NAV } from "../../consts/style";
import { IMenuItem } from "../../IMenuItem";
import { Submenus } from "./menu-item/Submenus";
import { CloseMenuItem } from "./menu-item/CloseMenuItem";
import { MenuContainer, TRANSITION_TIME } from "./MenuContainer";

import { MobileMenuContactUs } from "./MobileMenuContactUs";
import { MobileMenuBar } from "./MobileMenuBar";

const MobileNavWrapper = styled.div`
  position: relative;
  min-height: ${NAV.HEIGHT};
  @media (min-width: ${BREAK_POINTS.MIN.MD}) {
    display: none;
  }
`;

interface Props {
  menuItems: IMenuItem[];
}

interface State {
  showMenu: boolean;
  transition: boolean;
  expandedIndex: number[];
}

export class MobileNav extends React.Component<Props, State> {
  state = {
    showMenu: false,
    transition: false,
    expandedIndex: [-1, -1, -1],
  };

  toggleShowMenu = () => {
    this.setState((curState: State) => ({
      showMenu: !curState.showMenu,
      transition: true,
    }));
    this.toggleBodyScroll();
    setTimeout(() => this.setState({ transition: false }), TRANSITION_TIME);
  };

  toggleBodyScroll = () => {
    if (!this.state.showMenu) {
      document.body.style.setProperty("height", "100vh", "important");
      document.body.style.setProperty("overflow", "hidden", "important");
      document.body.style.setProperty("position", "fixed", "important");
    } else {
      document.body.style.setProperty("height", "auto");
      document.body.style.setProperty("overflow", "visible");
      document.body.style.setProperty("position", "static");
    }
  };

  toggleExpandMenu = (level: number, index: number) => {
    const indexLevel = level - 1;
    const newState = {
      expandedIndex: [...this.state.expandedIndex],
    };

    // if the menu is already expanded, collapse it.
    newState.expandedIndex[indexLevel] =
      this.state.expandedIndex[indexLevel] === index ? -1 : index;

    // collapse deeper levelsy
    for (let i = 0; i < newState.expandedIndex.length; i++) {
      if (i > indexLevel) {
        newState.expandedIndex[i] = -1;
      }
    }

    this.setState(newState);
  };

  render() {
    const { menuItems } = this.props;
    const { showMenu, expandedIndex, transition } = this.state;
    const menuClass = `${showMenu ? "slideIn" : "slideOut"} ${
      transition ? "addTransition" : ""
    }`;
    return (
      <MobileNavWrapper data-comment="MobileNav">
        <MobileMenuBar toggleMenu={this.toggleShowMenu} />
        <MenuContainer className={menuClass} data-comment="MobileNavVisible">
          <CloseMenuItem toggleShowMenu={this.toggleShowMenu} />
          <Submenus
            menuItems={menuItems}
            level={1}
            expandedIndex={expandedIndex}
            toggleExpandFn={this.toggleExpandMenu}
            shouldShow={true}
          />
          <MobileMenuContactUs />
        </MenuContainer>
      </MobileNavWrapper>
    );
  }
}
