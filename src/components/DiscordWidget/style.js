import styled from 'styled-components';

export const DiscordWidgetContainer = styled.div`
  position: ${(props) => (props.open === true) && 'absolute'};
  left: ${(props) => (props.open === true) && '-335px'};
  top: ${(props) => (props.open === true) && '0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px 20px;
  background-color: #272424;
  box-shadow: 0 0 6px 1px rgba(0,0,0,0.3);
  margin-right: 20px;
  border-radius: 5px;
  overflow: hidden;
  max-height: ${(props) => (props.open === true) ? '350px' : '24px'};
  transition: max-height, position .2s ease-in-out;
`;

export const DiscordWidgetHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const DiscordLogo = styled.img`
  height: 16px;
  width: auto;
  margin-right: 20px;
  user-select: none;
`;

export const DiscordMembersCount = styled.span`
  font-size: 14px;
  color: white;
  margin-left: 20px;
  user-select: none;
`;

export const DiscordActionIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  transform: ${(props) => (props.open === true) && 'rotate(180deg)'};
  transition: transform .2s ease-in-out;
`;

export const DiscordWidgetExpandedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 500px;
  margin-top: 20px;
  height: ${(props) => (props.open === true) ? 'auto' : '0'}
`;

export const DiscordWidgetMembersContainer = styled.div`
  margin: 10px 0 10px;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: auto;
  
  ::-webkit-scrollbar{
    width: 5px;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.1); 
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.3); 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.6); 
  }
`;

export const DiscordWidgetJoinButton = styled.button`
    border: 0;
    background-color: #2F2B2B;
    width: 100%;
    color: white;
    font-size: 16px;
    padding: 10px 0;
    border-radius: 5px;
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    font-weight: 700;
`;
