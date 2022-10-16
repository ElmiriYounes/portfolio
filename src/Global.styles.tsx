import styled, { createGlobalStyle, css } from "styled-components";
import Roboto from "./fonts/Roboto/Roboto-Regular.ttf";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const primaryColor = "rgb(182, 12, 60)";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "Roboto";
    font-display: swap;
    src: url(${Roboto}) format("truetype");
    }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    cursor: none !important;

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
  
  html{
    overflow: hidden;
    scroll-behavior: smooth;
    height: 100%;
  }

  body{
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    background-color: rgb(48,43,78);
    /* overflow-anchor: none; // désactiver ancrage du défilement (scroll anchoring) */
  }

  /* img{
    -webkit-user-drag: none; 
    -khtml-user-drag: none; 
    -moz-user-drag: none; 
    -o-user-drag: none;
  } */

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: unset;
  }

  p{
    line-height: 30px;
    color: #b8b8b8;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  ${flexCenter}
  margin-left: 70px;
  color: white;

  span {
    color: ${primaryColor};
    font-size: 2rem;
    font-weight: bold;
  }

  &::before {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    background-color: ${primaryColor};
    left: -70px;
  }
`;

export const Section = styled.section`
  ${flexCenter}
  justify-content: space-between;
  padding: 50px 20px;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  ${flexCenter}
  justify-content: space-between;
`;

export const Page = styled.div`
  width: 100%;
  min-height: calc(100vh - 84px);
  padding: 50px 20px;
  ${flexCenter}
`;

export default GlobalStyle;
