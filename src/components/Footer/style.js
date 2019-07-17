import styled from 'styled-components';

export const FooterContainer = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  background-color: #1F1C1C;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const FooterLogoContainer = styled.div`
  display:flex;
  align-items: center;
  margin-left: 12.5%;
`;

export const FooterLogo = styled.img`
  height: 40px;
  width: auto;
  cursor: pointer;
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 12.5%;
`;

export const SocialIcons = styled.a`
  text-decoration: none;
  display:flex;
  align-items: center;
  margin-left: 20px;
`;
