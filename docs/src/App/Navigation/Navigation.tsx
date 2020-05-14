import React, { useState, useRef, ReactNode, forwardRef } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Box, BoxProps, Hidden, Section } from "@origin-digital/ods-core";
import styled, { css } from "styled-components";
import MenuButton from "react-hamburger-menu";
import { Logo } from "../Logo/Logo";
import { useScrollLock } from "../useScrollLock/useScrollLock";
import { SubNavigation } from "../SubNavigation/SubNavigation";
import {
  gutterSize,
  headerSpaceY,
  headerHeight,
  menuWidth,
} from "./navigationSizes";
import { useIsolatedScroll } from "./useIsolatedScroll";

export const pageOverlay = 300;
const Header = ({
  menuOpen,
  menuClick,
}: {
  menuOpen: boolean;
  menuClick: () => void;
}) => (
  <Box paddingY={headerSpaceY} paddingX={gutterSize}>
    <Box display="flex" alignItems="center">
      <Hidden above="sm">
        <Box paddingRight="medium" display="flex" alignItems="center">
          <MenuButton
            color="black"
            strokeWidth={3}
            height={16}
            width={24}
            isOpen={menuOpen}
            menuClicked={menuClick}
          />
        </Box>
      </Hidden>
      <a
        href="#/"
        style={{ height: "60px" }}
        tabIndex={menuOpen ? -1 : undefined}
      >
        <Hidden below="md">
          <Logo />
        </Hidden>
      </a>
    </Box>
  </Box>
);

const SpecialSection = styled(Section as any)`
  @media (min-width: 1200px) {
    opacity: 1;
    max-width: 960px;
  }
`;

const FixedContentBlock = forwardRef<HTMLElement, BoxProps>(
  ({ children, ...props }, forwardedRef) => (
    <Box
      transition="fast"
      {...props}
      position="fixed"
      innerRef={forwardedRef as TS_FIXME}
    >
      <SpecialSection
        backgroundColor="transparent"
        paddingY="none"
        hideGutter={true}
      >
        {children}
      </SpecialSection>
    </Box>
  )
);

export const headerOffset = css`
  top: ${headerHeight}px;
  @media screen and (min-width: 768px) {
    top: ${headerHeight + 8}px;
  }
`;

export const overlay = css`
  z-index: ${pageOverlay};
`;

export const fixedWidthAboveMobile = css`
  @media screen and (min-width: 768px) {
    width: ${menuWidth - 16}px;
  }
`;

export const subNavOffsetAboveMobile = css`
  @media screen and (min-width: 768px) {
    margin-left: ${menuWidth}px;
  }
`;

export const hideOnMobileWhenOpen = ({
  isMenuOpen,
}: {
  isMenuOpen: boolean;
}) => css`
  @media screen and (max-width: 767px) {
    opacity: ${isMenuOpen ? 0 : 1};
  }
`;

export const hideOnMobileWhenClosed = ({
  isMenuOpen,
}: {
  isMenuOpen: boolean;
}) => css`
  @media screen and (max-width: 767px) {
    opacity: ${!isMenuOpen ? 0 : 1};
  }
`;

interface SubNavigationContainerProps extends BoxProps {
  isMenuOpen: boolean;
}

const SubNavigationContainer = styled(FixedContentBlock)<
  SubNavigationContainerProps
>`
  bottom: 0;
  ${headerOffset}
  ${overlay}
  ${fixedWidthAboveMobile}
  ${(p) => hideOnMobileWhenClosed({ isMenuOpen: p.isMenuOpen })}
`;

const StickyHeader = styled(FixedContentBlock)<{ showStickyHeader: boolean }>`
  outline: none;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.1),
    0 2px 2px -2px rgba(28, 28, 28, 0.1), 0 4px 4px -4px rgba(28, 28, 28, 0.2);
  ${(p) => (!p.showStickyHeader ? `opacity: 0;` : `opacity: 1;`)}
`;

const PageContent = styled(Box)<{ isMenuOpen: boolean }>`
  ${headerOffset}
  ${subNavOffsetAboveMobile}
  ${(p) => hideOnMobileWhenOpen({ isMenuOpen: p.isMenuOpen })}
`;

interface NavigationProps {
  children: ReactNode;
}

export const Navigation = ({ children }: NavigationProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const direction = currPos.y > prevPos.y ? "down" : "up";
      const showStickyHeader = currPos.y > 300 && direction === "up";
      setShowStickyHeader(showStickyHeader);
    },
    [setShowStickyHeader],
    undefined,
    true
  );

  useScrollLock(isMenuOpen);

  const menuRef = useRef<HTMLElement | null>(null);
  useIsolatedScroll(menuRef.current);

  return (
    <SpecialSection
      backgroundColor="transparent"
      paddingY="none"
      hideGutter={true}
    >
      <Box paddingRight={["none", gutterSize]}>
        <FixedContentBlock style={{ top: 0, left: 0, right: 0 }}>
          <Header
            data-id="Header"
            menuOpen={isMenuOpen}
            menuClick={() => setMenuOpen(!isMenuOpen)}
          />
        </FixedContentBlock>

        <SubNavigationContainer
          data-id="subnavigation-container"
          innerRef={menuRef}
          overflow="scroll"
          paddingY="small"
          paddingX={gutterSize}
          paddingBottom="xxlarge"
          width="full"
          display={
            isMenuOpen
              ? "block"
              : {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }
          }
          isMenuOpen={isMenuOpen}
        >
          <SubNavigation onSelect={() => setMenuOpen(false)} />
        </SubNavigationContainer>

        <PageContent
          data-id="page-content"
          position="relative"
          marginBottom="xxlarge"
          backgroundColor="white"
          paddingX={{
            xs: "medium",
            sm: "xlarge",
            md: "xxlarge",
          }}
          paddingY={{
            xs: "large",
            sm: "xlarge",
            md: "xxlarge",
          }}
          transition="fast"
          pointerEvents={isMenuOpen ? "none" : undefined}
          isMenuOpen={isMenuOpen}
        >
          {children}
        </PageContent>

        <StickyHeader
          backgroundColor="grey50"
          data-id="sticky-header"
          display={{
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          }}
          pointerEvents={showStickyHeader ? undefined : "none"}
          tabIndex={-1}
          aria-hidden={true}
          showStickyHeader={showStickyHeader}
        >
          <Header
            menuOpen={isMenuOpen}
            menuClick={() => setMenuOpen(!isMenuOpen)}
          />
        </StickyHeader>
      </Box>
    </SpecialSection>
  );
};
