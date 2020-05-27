import * as React from "react";
import styled from "styled-components";

import { NAV } from "../../../consts/style";

import { CloseIcon } from "../../../Svg/Close";
import { MenuRow } from "./atoms/MenuRow";

interface Props {
  toggleShowMenu(event: React.SyntheticEvent<Event>): void;
  className: string;
}

export const PureCloseMenuItem = ({ className, toggleShowMenu }: Props) => (
  <MenuRow className={className} level={1}>
    <CloseIcon onClick={toggleShowMenu} />
  </MenuRow>
);

export const CloseMenuItem = styled(PureCloseMenuItem)`
  height: ${NAV.MOBILE_ITEM.HEIGHT};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  svg {
    width: ${NAV.MOBILE_ITEM.SVG.SIDE_LEN_LARGE};
    height: ${NAV.MOBILE_ITEM.SVG.SIDE_LEN_LARGE};
  }
` as any;
