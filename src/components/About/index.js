import React from "react";
// import { animateScroll as scroll } from "react-scroll";
import {
  InfoSectionContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrap,
  ImgWrap,
  Img,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
} from "./InfoElements";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import clasificados from "../../images/clasificados.png"
import findit from "../../images/findit.png"
const InfoSection = ({
  
  lightBg,
  id,
  imgStart,
  topLine,
  headLine,
  lightText,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  // const toggleHom = () => {
  //   scroll.scrollToTop();
  // };
  
  return (
    <InfoSectionContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <ButtonWrap>
                {/* <Button
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button> */}
              </ButtonWrap>
              <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/Empire-Eleven-Realty-101287901893495/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/empireelevenrealty/?hl=es-la" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
             <SocialIconLink href="https://www.finditpr.com/agente/empire-eleven-realty-corp/288" target="_blank" aria-label="Twitter">
              <img src={findit} className="findit" alt="findit"/>
              </SocialIconLink>
              <SocialIconLink href="https://www.clasificadosonline.com/PartnersListingREID.asp?ID=41318" target="_blank" aria-label="Twitter">
              <img src={clasificados} className="findit" alt="clasificados"/>
              
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoSectionContainer>
  );
};

export default InfoSection;