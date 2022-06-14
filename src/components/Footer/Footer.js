import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterLayout>
      <ContentWrapper>
        <Logo src="https://user-images.githubusercontent.com/73605822/167236060-68ec1465-1c77-475b-8190-7d70ac32ec13.png" />
        <FooterDesc>
          <Contact href="mailto:versusprostats@gmail.com">Contact Us </Contact>
          (versusprostats@gmail.com)
          <br />
          <br />
          {`VERSUS.PS는 e-Sports 데이터의 정보 공유를 위한 웹사이트입니다. 구단 및 선수 정보 등 콘텐츠의 저작권 및 모든 권리는 라이선스 소유권자에게 있습니다. 
          
          VERSUS.PS was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project. 
          
          VERSUS.PS isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games
          properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.`}
        </FooterDesc>
      </ContentWrapper>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  position: relative;

  width: 100%;
  height: 176px;

  background: linear-gradient(
    180deg,
    rgba(19, 19, 16, 0) 0%,
    rgba(193, 54, 49, 0.08) 100%
  );
  border-top: 3px solid ${props => props.theme.black.black85};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1360px;
  height: 100%;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 80px;
  padding-right: 28px;
  border-right: 1px solid ${props => props.theme.black.black85};
`;

const FooterDesc = styled.div`
  height: 80px;
  margin-left: 28px;
  color: ${props => props.theme.white.white50};
  font-size: 10px;
  white-space: pre-line;
`;

const Contact = styled.a`
  color: ${props => props.theme.white.white50};
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
`;
