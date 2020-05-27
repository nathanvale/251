import * as React from "react";
import styled from "styled-components";
import { COLOURS } from "../../consts/style";
import { Phone } from "../../Svg/Phone";

const ContactUsContainer = styled.div`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  padding: 16px;
`;

const ContactUsHeading3 = styled.h3`
  line-height: 28px;
  font-size: 20px;
  color: ${COLOURS.TEXT.HEADING};
  font-weight: 600;
  margin: 0px 0px 24px;
`;

const ContactUsHeading4 = styled.h4`
  line-height: 24px;
  font-size: 16px;
  color: ${COLOURS.TEXT.HEADING};
  font-weight: 600;
  margin: 0px 0px 8px;
`;

const ContactUsText = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${COLOURS.TEXT.BODY};
  margin: 0px 0px 2px;
`;

const PhoneNumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  a {
    font-size: 24px;
    line-height: 28px;
    color: ${COLOURS.TEXT.HEADING};
    text-decoration: none;
  }
  svg {
    margin-right: 4px;
    height: 26px;
    width: 26px;
    fill: ${COLOURS.PRIMARY.ORANGE_LIGHT};
    color: ${COLOURS.PRIMARY.ORANGE_LIGHT};
  }
`;

export const MobileMenuContactUs = () => (
  <ContactUsContainer>
    <ContactUsHeading3>Contact us</ContactUsHeading3>
    <ContactUsHeading4>General enquiries</ContactUsHeading4>
    <ContactUsText>7am - 9pm, Monday to Friday</ContactUsText>
    <ContactUsText>7am - 5pm, Saturday</ContactUsText>
    <ContactUsText>
      (For all residential electricity and gas queries)
    </ContactUsText>

    <PhoneNumberContainer>
      <Phone /> <a href="tel:13 24 61">13 24 61</a>
    </PhoneNumberContainer>
  </ContactUsContainer>
);
