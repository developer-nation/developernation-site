import React from 'react';
import {DiscordWidgetMemberAvatar, DiscordWidgetMemberContainer, DiscordWidgetMemberName} from "./style";

const DiscordWidgetMember = (props) => {

    const { member } = props;
    return (
        <DiscordWidgetMemberContainer>
            <DiscordWidgetMemberAvatar src={member.avatar_url}/>
            <DiscordWidgetMemberName>{member.username}</DiscordWidgetMemberName>
        </DiscordWidgetMemberContainer>
    )
};

export default DiscordWidgetMember;