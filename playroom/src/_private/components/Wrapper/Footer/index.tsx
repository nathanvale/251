import * as React from "react";
import styled from "styled-components";
import { BREAK_POINTS, COLOURS, TEXT } from "../consts/style";

import { GoodEnergySmall } from "./GoodEnergy";
import { SocialLinks } from "./SocialLinks/SocialLinks";
import mockContent from "./mock-content.json";

export const createTrackingCode = (type: string, id: string) => `${type}-${id}`;

const FooterContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
`;

const FooterInnerContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 24px 16px;
  @media (min-width: ${BREAK_POINTS.MAX.XS}) {
    padding: 24px 24px 24px;
  }
`;

const FooterNavContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  @media (min-width: ${BREAK_POINTS.MAX.XS}) {
    flex-direction: row;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

const FooterNavLink = styled.a`
  text-decoration: none;
  margin-right: 48px;
  font-weight: 400;
  font-size: 12px;
  color: ${TEXT.BODY};
  line-height: 1.67;
  text-align: left;
  @media (max-width: ${BREAK_POINTS.MAX.SM}) {
    margin-right: 24px;
    margin-bottom: 8px;
  }
  &:hover {
    color: ${TEXT.LINK.HOVER};
  }
` as any;

const Copyright = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  font-weight: normal;
  color: ${COLOURS.GREY.GREY_80};
  padding-top: 16px;
  @media (min-width: ${BREAK_POINTS.MAX.XS}) {
    padding-top: 0px;
  }
`;

const Divider = styled.div`
  border-top: solid 1px #e3e3e3;
  height: 1px;
  margin-top: 24px;
  margin-bottom: 24px;
  @media (min-width: ${BREAK_POINTS.MAX.SM}) {
    margin-bottom: 40px;
  }
`;

const TopFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px;
  @media (max-width: ${BREAK_POINTS.MAX.XS}) {
    display: none;
  }
`;

export const Footer = ({
  links = mockContent.footer.links,
  socialLinks = mockContent.footer.socialLinks,
}: any) => (
  <FooterContainer data-comment="Footer">
    <FooterInnerContainer>
      <TopFooterContainer>
        <GoodEnergySmall />
        <SocialContainer>
          <SocialLinks socialLinks={socialLinks} />
        </SocialContainer>
      </TopFooterContainer>
      <Divider />
      <FooterNavContainer>
        <FooterNav>
          {links.map(({ headline, buttonUrl }: any, ix: number) => (
            <FooterNavLink
              key={ix}
              href={buttonUrl}
              data-id={createTrackingCode("footerLink", headline)}
              componentType="footerLink"
            >
              {headline}
            </FooterNavLink>
          ))}
        </FooterNav>
        <Copyright>
          &copy; {new Date().getFullYear()} Origin Energy Limited
        </Copyright>
      </FooterNavContainer>
    </FooterInnerContainer>
  </FooterContainer>
);
