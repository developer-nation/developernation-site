import { createGlobalStyle } from "styled-components";
import Background from '../../assets/Background.svg';
export default createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    background-image: url(${Background});
    background-color: #221F1F;
    background-repeat: no-repeat;
    background-position: center;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
  }
`;