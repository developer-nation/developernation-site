import styled from 'styled-components';

export const DiscordWidgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 20px;
  background-color: #272424;
  box-shadow: 0 0 6px 1px rgba(0,0,0,0.3);
  margin-right: 20px;
  border-radius: 5px;
`;

export const DiscordLogo = styled.img`
  height: 16px;
  width: auto;
  margin-right: 20px;
`;

export const DiscordMembersCount = styled.span`
  font-size: 14px;
  color: white;
  margin-left: 20px;
`;

export const DiscordActionIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
