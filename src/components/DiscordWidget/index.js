import React, { useState } from 'react';
import {
    DiscordActionIcon,
    DiscordLogo,
    DiscordMembersCount,
    DiscordWidgetContainer,
    DiscordWidgetExpandedContainer,
    DiscordWidgetHeader,
    DiscordWidgetJoinButton,
    DiscordWidgetMembersContainer,
} from "./style";
import DiscordLogoImage from '../../assets/Discord Logo.svg';
import { MdKeyboardArrowDown } from "react-icons/md";
import { connect } from "react-redux";
import DiscordWidgetMember from "../DiscordWidgetMember";

const DiscordWidget = (props) => {
    const { discord } = props;

    const [expanded, setExpanded] = useState(false);

    function handleWidgetClick(){
        setExpanded(!expanded);
    }

    function handleInviteClick(){
        window.open(discord.data.instant_invite, "_black");
    }

    return (
        <DiscordWidgetContainer open={expanded}>
            <DiscordWidgetHeader onClick={handleWidgetClick}>
                <DiscordLogo src={DiscordLogoImage}/>
                <DiscordMembersCount>{(discord.data) ? discord.data.members.length : '0' } Usuários online</DiscordMembersCount>
                <DiscordActionIcon open={expanded}><MdKeyboardArrowDown color={"white"} size={24}/></DiscordActionIcon>
            </DiscordWidgetHeader>
            <DiscordWidgetExpandedContainer open={expanded}>
                {(discord.data) && (
                    <DiscordWidgetMembersContainer>
                        {discord.data.members.map(member => (
                                <DiscordWidgetMember key={member.id} member={member}/>
                            )
                        )}
                    </DiscordWidgetMembersContainer>
                )}
                <DiscordWidgetJoinButton onClick={handleInviteClick}>Participe</DiscordWidgetJoinButton>
            </DiscordWidgetExpandedContainer>
        </DiscordWidgetContainer>
    )
};

const mapStateToProps = state => {
    return {
        discord: state.discord,
    }
};

export default connect(mapStateToProps)(DiscordWidget);