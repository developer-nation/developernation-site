import React from 'react';
import {FooterContainer, FooterLogo, FooterLogoContainer, FooterSocialContainer, SocialIcons} from "./style";
import Logo from '../../assets/Logo.svg';
import {FaTwitter, FaYoutube } from "react-icons/fa";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const Footer = (props) =>{

    function handleLogoClick(){
        const { push } = props;
        push("/");
    }

    return (
        <FooterContainer>
            <FooterLogoContainer>
                <FooterLogo onClick={handleLogoClick} src={Logo} />
            </FooterLogoContainer>
            <FooterSocialContainer>
                <SocialIcons href={"https://twitter.com/nation_develop"} target={"_blank"}><FaTwitter color={"white"} size={28}/></SocialIcons>
                <SocialIcons  href={"https://www.youtube.com/channel/UC54i7NYoJV49rYN2jLqiEpQ"} target={"_blank"}><FaYoutube color={"white"} size={28}/></SocialIcons>
            </FooterSocialContainer>
        </FooterContainer>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        push: path => dispatch(push(path)),
    }
};

export default connect(null, mapDispatchToProps)(Footer);

