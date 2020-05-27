import * as React from "react";
import styled from "styled-components";

import { AccountNav } from "../../Header/AccountNav";
import { Menu as MenuIcon } from "../../Svg/MenuIcon";
import { BorderedNavLink } from "../../Header/NavLink";
import { Logo } from "../../Svg/Logo";
import { BREAK_POINTS } from "../../consts/style";
import { LogoLink } from "../../Header/LogoLink";

const MobileContainer = styled.div`
  margin-bottom: 2px;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: space-between;

  @media (max-height: ${BREAK_POINTS.MAX.MD}) {
    max-height: 64px;
    box-sizing: border-box;
  }
`;

const Left = styled.div`
  display: flex;
`;

export const MobileMenuBar = ({ toggleMenu }: any) => (
  <MobileContainer>
    <Left>
      <LogoLink href="/">
        <Logo id="mobile-nav" />
      </LogoLink>
      <BorderedNavLink
        href="/"
        componentType="navMobile"
        data-comment="MobileNavButton"
        onClick={(e?: React.MouseEvent<HTMLAnchorElement>) => {
          toggleMenu();
          if (e) {
            e.preventDefault();
          }
        }}
      >
        <MenuIcon />
        <span>Menu</span>
      </BorderedNavLink>
    </Left>
    <AccountNav />
  </MobileContainer>
);
