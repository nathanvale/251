/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import styled from "styled-components";

import { NAV, COLOURS, BREAK_POINTS } from "../../consts/style";
import { NavLink } from "../NavLink";
import { ArrowDown } from "../../Svg/ArrowDown";
import { CloseIcon } from "../../Svg/Close";

import { IMenuItem } from "../../IMenuItem";
import { Dropdown } from "./Dropdown";

const DropDownMenuLink = styled(NavLink)`
  height: 24px;
  padding-left: 12px;
  color: ${NAV.DROPDOWN_MENU.LINK_COLOUR};

  @media (min-width: ${BREAK_POINTS.MIN.LG}) {
    padding-left: 24px;
  }

  & > span {
    font-size: 14px;
    font-weight: normal;
  }
`;

const DropDownMenuLinksWrapper = styled.div`
  overflow: auto;
  margin-right: -370px; /* must be less than AccountLinks */
  display: flex;
  height: 78px;
  flex-direction: column;
  justify-content: center;
  padding-left: 9px;

  @media (min-width: ${BREAK_POINTS.MIN.LG}) {
    padding-left: 0;
    margin-right: -440px; /* must be less than AccountLinks */
  }
`;

const DropDownMenuLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseContainer = styled.span`
  position: absolute;
  top: 18px;
  right: 30px;
  padding: 10px;
  cursor: pointer;
`;

const EmptySpace = styled.span`
  padding-right: 6px;
`;

const CloseIconPrimary = styled(CloseIcon)`
  fill: ${COLOURS.PRIMARY.RED};
`;

const DropdownMenuCloseTop = styled.div`
  height: 10px;
  width: 100%;
`;

const DropdownMenuCloseSide = styled.div`
  height: 60px;
  width: 10px;
`;

interface Props {
  menuItems: IMenuItem[];
  activeMenuIndex: number;
}

interface State {
  activeDropdownIndex: number;
}

export class DropdownMenu extends React.Component<Props, State> {
  state = { activeDropdownIndex: -1 };

  touchLink(
    e: React.SyntheticEvent<HTMLAnchorElement>,
    selectedMenuIndex: number,
    hasChildren: boolean
  ) {
    if (hasChildren && selectedMenuIndex !== this.state.activeDropdownIndex) {
      e.preventDefault();
      this.setState({
        activeDropdownIndex: selectedMenuIndex,
      });
    }
  }

  toggleDropdownToIndex(index: number) {
    this.setState({ activeDropdownIndex: index });
  }

  closeDropdownMenu() {
    this.toggleDropdownToIndex(-1);
  }

  render() {
    const { menuItems = [], activeMenuIndex } = this.props;
    return (
      <React.Fragment>
        <DropDownMenuLinksWrapper data-comment="DropDownMenuLinksWrapper">
          <DropdownMenuCloseTop onMouseEnter={() => this.closeDropdownMenu()} />
          <DropDownMenuLinksContainer>
            <DropdownMenuCloseSide
              onMouseEnter={() => this.closeDropdownMenu()}
            />
            {menuItems.map(({ link, title, children }, index) =>
              children ? (
                <DropDownMenuLink
                  key={`${index}-${title}`}
                  onTouchEnd={(e: any) => {
                    this.touchLink(e, index, children.length > 0);
                  }}
                  onMouseEnter={() => this.toggleDropdownToIndex(index)}
                  href={`/${link}`}
                  className={`${activeMenuIndex === index ? "active" : ""} ${
                    this.state.activeDropdownIndex === index
                      ? "highlighted"
                      : ""
                  }`}
                >
                  <span>{title}</span>
                  {children.length > 0 ? <ArrowDown /> : <EmptySpace />}
                </DropDownMenuLink>
              ) : null
            )}
            <DropdownMenuCloseSide
              onMouseEnter={() => this.closeDropdownMenu()}
            />
          </DropDownMenuLinksContainer>
        </DropDownMenuLinksWrapper>
        {this.state.activeDropdownIndex >= 0 &&
          menuItems[this.state.activeDropdownIndex].children.length > 0 && (
            <div onMouseLeave={() => this.closeDropdownMenu()}>
              <Dropdown
                menuItems={menuItems[this.state.activeDropdownIndex].children}
              >
                <CloseContainer
                  onTouchEnd={() => this.closeDropdownMenu()}
                  onClick={() => this.closeDropdownMenu()}
                >
                  <CloseIconPrimary />
                </CloseContainer>
              </Dropdown>
            </div>
          )}
      </React.Fragment>
    );
  }
}
