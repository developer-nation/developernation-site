import React from 'react';
import {AccountButton, HeaderContainer, Logo, LogoContainer, RightContainer} from "./style";
import { MdAccountBox } from "react-icons/md";
import LogoFile from "../../assets/Logo.svg";
import DiscordWidget from "../DiscordWidget";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={LogoFile} alt={"Logo da comunidade"}/>
            </LogoContainer>
            <RightContainer>
                <DiscordWidget/>
                <AccountButton><MdAccountBox color={"white"} size={26}/></AccountButton>
            </RightContainer>
        </HeaderContainer>
    )
};

export default Header;