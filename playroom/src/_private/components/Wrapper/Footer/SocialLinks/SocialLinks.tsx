import * as React from "react";
import styled from "styled-components";

import { COLOURS } from "../../consts/style";
import { InlineSvg } from "../../InlineSvg";

export const createTrackingCode = (type: string, id: string) => `${type}-${id}`;

const SocialNav = styled.nav`
  margin: 0px;
`;

const SocialNavLink = styled.a`
  margin: 12px;
  span > svg {
    width: 24px;
  }

  &:hover > span > svg {
    fill: ${COLOURS.PRIMARY.GREY};
  }

  &:hover > span > svg > path {
    fill: ${COLOURS.PRIMARY.GREY};
  }
`;

export interface ISocialLink {
  iconSvg: string;
  buttonUrl: string;
  headline: string;
  target?: string;
}

export const SocialLinks = ({
  socialLinks,
}: {
  socialLinks: ISocialLink[];
}) => (
  <SocialNav data-comment="SocialLinks">
    {socialLinks.map(({ iconSvg, buttonUrl, headline }, ix) => (
      <SocialNavLink
        key={ix}
        href={buttonUrl}
        target="_blank"
        data-id={createTrackingCode("socialLink", headline)}
      >
        <InlineSvg title={headline} html={iconSvg} />
      </SocialNavLink>
    ))}
  </SocialNav>
);
