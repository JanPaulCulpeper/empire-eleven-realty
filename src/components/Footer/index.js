import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../images/logoEER1.svg";
import clasificados from "../../images/clasificados.png"
import findit from "../../images/findit.png"
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
            <img src={logo} className="navbar-logo"/>
            </SocialLogo>
            <WebsiteRights>
              sigloXXI © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/Empire-Eleven-Realty-101287901893495/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/empireelevenrealty/?hl=es-la" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.finditpr.com/agente/empire-eleven-realty-corp/288" target="_blank" aria-label="Twitter">
              <img src={findit} className="findit"/>
              </SocialIconLink>
              <SocialIconLink href="https://www.clasificadosonline.com/PartnersListingREID.asp?ID=41318" target="_blank" aria-label="Twitter">
              <img src={clasificados} className="findit"/>
              
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
export default Footer;
