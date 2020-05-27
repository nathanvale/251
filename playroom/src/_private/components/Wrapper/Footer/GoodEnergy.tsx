import * as React from "react";
import styled from "styled-components";

import { BREAK_POINTS } from "../consts/style";
import { GoodEnergySvg } from "../Svg/GoodEnergySvg";

const GoodEnergyContainerSmall = styled.div`
  width: 100px;
  height: 48px;
  @media (min-width: ${BREAK_POINTS.MAX.XS}) {
    width: 118px;
    height: 56px;
  }
`;

export const GoodEnergySmall = () => (
  <GoodEnergyContainerSmall>
    <GoodEnergySvg />
  </GoodEnergyContainerSmall>
);
