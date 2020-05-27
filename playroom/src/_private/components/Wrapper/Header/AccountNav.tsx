import * as React from "react";
import styled from "styled-components";

import { BREAK_POINTS } from "@origin-digital/style-guide";
import { Search as SearchIcon } from "../Svg/Search";
import { LINKS } from "../consts/links";
import { HelpOutlineIcon } from "../Svg/HelpOutline";
import { BorderedNavLink } from "./NavLink";

const AccountNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  a.active,
  a:hover span {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const IconLink = styled(BorderedNavLink)`
  @media (min-width: ${BREAK_POINTS.Min.MD}) {
    height: 48px;
    padding: 14px 20px;
    > svg {
      right: 5px;
      top: 0;
    }
  }
`;

const IconLinkBoardLeft = styled(IconLink)`
  @media (max-width: ${BREAK_POINTS.Max.LG}) {
    border-left: 1px solid #e3e3e3;
  }
`;

export const AccountNav = () => (
  <AccountNavContainer>
    <IconLinkBoardLeft
      href={LINKS.HEADER.HELP_AND_SUPPORT}
      componentType="navDesktopHelp"
    >
      <HelpOutlineIcon />
      <span>Help</span>
    </IconLinkBoardLeft>
    <IconLink href={LINKS.HEADER.SEARCH} componentType="navDesktopSearch">
      <SearchIcon />
      <span>Search</span>
    </IconLink>
  </AccountNavContainer>
);
