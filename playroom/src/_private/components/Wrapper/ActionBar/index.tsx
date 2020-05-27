import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import {
  ActionBar as ActionBarOG,
  IActionBarProps,
} from "@origin-digital/action-bar";
import { Hidden, Section } from "@origin-digital/ods-core";
import { BREAK_POINTS } from "../consts/style";

const defaultProps: IActionBarProps = {
  premises: [
    {
      premiseName: "321 EXHIBITION ST, MELBOURNE VIC 3000",
      premiseId: "321",
    },
    {
      premiseName: "180 ANN ST, BRISBANE CITY QLD 4000",
      premiseId: "180",
    },
  ],
  mobilePropertySelector: "none",
  selectedPremiseId: "321",
  mobileNavButton: "none",
};

const ACTION_BAR_HEIGHT = 136;

const HeaderContainer = styled.div`
  z-index: 1100;
  position: sticky;
  top: 0;
  @media (min-width: ${BREAK_POINTS.MIN.LG}) {
    top: -${ACTION_BAR_HEIGHT}px;
  }
`;

export const ActionBar = ({
  title,
  mobilePropertySelector,
  mobileNavButton,
}: IActionBarProps) => (
  <HeaderContainer>
    <Hidden below="lg">
      <Section paddingY="none">
        <ActionBarOG
          {...defaultProps}
          mobileNavButton="none"
          mobilePropertySelector={mobilePropertySelector}
          headingComponent="h4"
          onClickMobileNavButton={() => {}}
          title={title}
          onSelectPremise={() => {}}
        />
      </Section>
    </Hidden>
    <Hidden above="md">
      <ActionBarOG
        {...defaultProps}
        mobileNavButton={mobileNavButton || "close"}
        mobilePropertySelector={mobilePropertySelector}
        headingComponent="h4"
        onClickMobileNavButton={() => {}}
        title={title}
        onSelectPremise={() => {}}
      />
    </Hidden>
  </HeaderContainer>
);

ActionBar.propTypes = {
  title: PropTypes.string,
  mobilePropertySelector: PropTypes.oneOf(["none", "compact", "full"]),
  mobileNavButton: PropTypes.oneOf(["none", "back", "close"]),
};
