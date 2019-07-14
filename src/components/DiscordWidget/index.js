import React from 'react';
import {DiscordActionIcon, DiscordLogo, DiscordMembersCount, DiscordWidgetContainer} from "./style";
import DiscordLogoImage from '../../assets/Discord Logo.svg';
import { MdKeyboardArrowDown } from "react-icons/md";
import { connect } from "react-redux";

const DiscordWidget = (props) => {
    const { discord } = props;
    return (
        <DiscordWidgetContainer>
            <DiscordLogo src={DiscordLogoImage}/>
            <DiscordMembersCount>{(discord.data) ? discord.data.members.length : '0' } Usuários online</DiscordMembersCount>
            <DiscordActionIcon><MdKeyboardArrowDown color={"white"} size={24}/></DiscordActionIcon>
        </DiscordWidgetContainer>
    )
};

const mapStateToProps = state => {
    return {
        discord: state.discord,
    }
};

export default connect(mapStateToProps)(DiscordWidget);