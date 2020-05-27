import React from "react";
import styled from "styled-components";
import { TEXT } from "./consts/style";

const Link = ({ children, ...rest }: any) => (
  <a {...rest} href={undefined} onKeyUp={undefined}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: ${TEXT.LINK.STATIC};
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: ${TEXT.LINK.HOVER};
  }

  &:hover > svg {
    fill: ${TEXT.LINK.HOVER};
  }
`;

export { Link, StyledLink };
