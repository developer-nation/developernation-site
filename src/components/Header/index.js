import React from 'react';
import {AccountButton, HeaderContainer, Logo, LogoContainer, RightContainer} from "./style";
import { MdAccountBox } from "react-icons/md";
import LogoFile from "../../assets/Logo.svg";
import DiscordWidget from "../DiscordWidget";
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

const Header = (props) => {

    function handleLogoClick(){
        const { push } = props;
        push("/");
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo onClick={handleLogoClick} src={LogoFile} alt={"Logo da comunidade"}/>
            </LogoContainer>
            <RightContainer>
                <DiscordWidget/>
                <AccountButton><MdAccountBox color={"white"} size={26}/></AccountButton>
            </RightContainer>
        </HeaderContainer>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        push: path => dispatch(push(path)),
    }
};

export default connect(null, mapDispatchToProps)(Header);