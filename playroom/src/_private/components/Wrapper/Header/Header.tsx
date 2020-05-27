import React from "react";
import styled from "styled-components";

import { BREAK_POINTS } from "../consts/style";
import { Logo } from "../Svg/Logo";
import { IMenuItem } from "../IMenuItem";
import { BorderedNavLink } from "./NavLink";
import { AccountNav } from "./AccountNav";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { MobileNav } from "./mobile/MobileNav";
import navigation from "./navigation-data.json";
import { LogoLink } from "./LogoLink";

const Nav = styled.nav`
  background: white;
  max-height: 64px;
  position: relative;
  @media (min-width: ${BREAK_POINTS.MIN.MD}) {
    max-height: 136px;
    height: 136px;
  }
`;

const DesktopNav = styled.div`
  display: none;
  width: 100%;
  @media (min-width: ${BREAK_POINTS.MIN.MD}) {
    display: block;
  }
`;

const UpperNavContainer = styled.div`
  border-bottom: 1px solid #f1f1f1;
  height: 48px;
`;

const FlexFillLrg = styled(UpperNavContainer)`
  display: none;
  @media (min-width: ${BREAK_POINTS.MIN.LG}) {
    display: block;
    flex-grow: 1;
  }
`;
const FlexFill = styled(UpperNavContainer)`
  display: block;
  flex-grow: 1;
`;
const NavContainer = styled.div``;

const UpperNavContainer2 = styled(UpperNavContainer)`
  flex-shrink: 0;
  @media (min-width: ${BREAK_POINTS.MIN.LG}) {
    flex-basis: 450px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AccountLinks = styled.div``;

interface HeaderProps {
  menuItems: IMenuItem[];
  activeTopMenuIndex: number;
  activeDropdownMenuIndex: number;
}
export function Header({
  menuItems = navigation,
  activeTopMenuIndex = 0,
  activeDropdownMenuIndex,
}: HeaderProps) {
  return (
    <header>
      <Nav>
        <DesktopNav>
          <LogoLink href="/">
            <Logo id="desktop-nav" />
          </LogoLink>
          <Container>
            <FlexFillLrg />
            <NavContainer>
              <UpperNavContainer>
                {menuItems.map((topMenu, index) => (
                  <BorderedNavLink
                    componentType="navDesktopTopLink"
                    key={index}
                    href={topMenu.link}
                    className={index === activeTopMenuIndex ? "active" : ""}
                  >
                    <span>{topMenu.title}</span>
                  </BorderedNavLink>
                ))}
              </UpperNavContainer>
              <DropdownMenu
                menuItems={menuItems[activeTopMenuIndex].children || []}
                activeMenuIndex={activeDropdownMenuIndex}
              />
            </NavContainer>
            <FlexFill />
            <UpperNavContainer2 data-comment="desktop-nav-upper-2">
              <AccountLinks>
                <AccountNav />
              </AccountLinks>
            </UpperNavContainer2>
          </Container>
        </DesktopNav>
        <MobileNav menuItems={menuItems} />
      </Nav>
    </header>
  );
}
