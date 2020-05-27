import * as React from "react";
import styled from "styled-components";
import { Heading } from "@origin-digital/ods-core";
import { NAV, TEXT } from "../../consts/style";
import { IMenuItem } from "../../IMenuItem";
import { StyledLink } from "../../Link";

const DropdownContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 142px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${NAV.DROPDOWN_MENU.DROPDOWN.WIDTH};
  width: 100%;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
  z-index: ${NAV.DROPDOWN_MENU.Z_INDEX};
`;

const DropdownInnerContainer = styled.div`
  padding: 26px 76px;
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
`;

interface Props {
  menuItems: IMenuItem[];
  children: React.ReactNode;
}

const Spacer = styled.div<any>`
  height: ${(p) => (p.size ? p.size : 24)}px;
`;

const LinkedListLink = styled(StyledLink)`
  line-height: 2;
  display: block;
  font-weight: 500;
  &:hover,
  &:hover h4 {
    childrencolor: ${TEXT.LINK.HOVER};
    cursor: pointer;
  }
`;
export function hasChildren(menuItems: IMenuItem[]) {
  const x = menuItems.filter(
    ({ children }) => children instanceof Array && children.length > 0
  );
  return x.length > 0;
}

export const Dropdown = ({ menuItems, children }: Props) => {
  const isTree = hasChildren(menuItems);
  return (
    <DropdownContainer>
      <DropdownInnerContainer>
        {menuItems.map((item, ix) => (
          <React.Fragment key={`${ix}-${item.title}`}>
            <LinkedListLink href="/#">
              {isTree ? (
                <Heading variant="h4">{item.title}</Heading>
              ) : (
                item.title
              )}
            </LinkedListLink>
            <Spacer size={4} />
            {item.children &&
              // eslint-disable-next-line no-shadow
              item.children.map(({ title }, ix) => (
                <LinkedListLink href="/#" key={`${ix}-${title}`}>
                  <div>{title}</div>
                </LinkedListLink>
              ))}
            {item.children && item.children.length > 0 ? <Spacer /> : null}
          </React.Fragment>
        ))}
        <Spacer />
        {children}
      </DropdownInnerContainer>
    </DropdownContainer>
  );
};
