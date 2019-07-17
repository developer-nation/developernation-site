import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px auto 0 auto;
  width: 75%;
  min-height: 100px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const Logo = styled.img`
  margin-bottom: 10px;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  height: 100%;
  margin: auto 0 auto auto;
`;

export const AccountButton = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #272424;
  box-shadow: 0 0 6px 1px rgba(0,0,0,0.3);
  border-radius: 5px;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
`;
