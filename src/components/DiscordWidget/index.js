import React from 'react';
import {DiscordActionIcon, DiscordLogo, DiscordMembersCount, DiscordWidgetContainer} from "./style";
import DiscordLogoImage from '../../assets/Discord Logo.svg';
import { MdKeyboardArrowDown } from "react-icons/md";

const DiscordWidget = () => {
    return (
        <DiscordWidgetContainer>
            <DiscordLogo src={DiscordLogoImage}/>
            <DiscordMembersCount>200 Usuários online</DiscordMembersCount>
            <DiscordActionIcon><MdKeyboardArrowDown color={"white"} size={24}/></DiscordActionIcon>
        </DiscordWidgetContainer>
    )
};

export default DiscordWidget;