import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  color: #fff;
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 125px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 910px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-column: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`

  color: #000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
// border: 2px solid red;

  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const ButtonWrap = styled.div`
// border: 2px solid red;

  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
// border: 2px solid red;

  max-width: 555px;
  height: 100%;
  padding: 30px;
  margin-top: 0;
`;
export const Img = styled.img`
// border: 2px solid black;
border-radius: 3rem;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  box-shadow: 5px 5px 5px #ccc;

  
`;

export const SocialMedia = styled.section`
// border: 2px solid blue;
  max-width: 1000px;
  width: 100%;

`;

export const SocialMediaWrap = styled.div`
// border: 2px solid blue;

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  
  }
`;

export const SocialIcons = styled.div`
// border: 2px solid red;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
`;

export const SocialIconLink = styled.a`

  color: #000;
  font-size: 24px;
`;

