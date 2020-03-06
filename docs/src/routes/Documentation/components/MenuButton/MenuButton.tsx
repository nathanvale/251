import React from "react";
import { Box } from "@origin-digital/ods-core";
import styled, { css } from "styled-components";

interface MenuButtonProps {
  open?: boolean;
  onClick: () => void;
}

const StyledBox = styled(Box)`
  width: 31px;
  height: 27px;
  border: 0;
  background: none;
  transition: all 0.1s ease;
`;

const Bar = styled(Box)`
  left: 0;
  right: 0;
  height: 5px;
  border-radius: 5px;
  background: black;
  transition: all 0.1s ease;
  transform-origin: 50% 50%;
`;

const Bar1 = styled(Bar)<{ open: boolean }>`
  top: 0;
  ${p =>
    p.open &&
    css`
      transform: translateY(11px) rotate(45deg);
    `}
`;

const Bar2 = styled(Bar)`
  top: 11px;
  ${p =>
    p.open &&
    css`
      opacity: 0;
    `}
`;
const Bar3 = styled(Bar)`
  top: 22px;
  ${p =>
    p.open &&
    css`
      transform: translateY(-11px) rotate(-45deg);
    `}
`;

export const MenuButton = ({ open = false, onClick }: MenuButtonProps) => {
  return (
    <>
      <StyledBox
        component="button"
        cursor="pointer"
        position="relative"
        onClick={onClick}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <Bar1 position="absolute" open={open} />
        <Bar2 position="absolute" open={open} />
        <Bar3 position="absolute" open={open} />
      </StyledBox>
    </>
  );
};
