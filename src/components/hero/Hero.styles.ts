import styled, { css, keyframes } from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";

const scaling = keyframes`
  to{
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`;

const styleSocialIcons = css`
  ${flexCenter}
  color: #cccccc;
  font-size: 1.5rem;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  &:hover {
    color: ${primaryColor};
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const ArrowLongRight = styled(CgArrowLongRight)`
  position: absolute;
  right: -40px;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  ${flexCenter};
  font-size: 1.5rem;
  pointer-events: none;
  color: ${primaryColor};
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
`;

export const LinkedinIcon = styled(BsLinkedin)`
  ${styleSocialIcons}
  -webkit-transform: scale(0) rotate(720deg);
  transform: scale(0) rotate(720deg);
  opacity: 0;
  -webkit-animation: ${scaling} 0.3s 1.7s ease-out forwards;
  animation: ${scaling} 0.3s 1.7s ease-out forwards;
`;

export const GithubIcon = styled(BsGithub)`
  ${styleSocialIcons}
  -webkit-transform: scale(0) rotate(720deg);
  transform: scale(0) rotate(720deg);
  opacity: 0;
  -webkit-animation: ${scaling} 0.3s 2s ease-out forwards;
  animation: ${scaling} 0.3s 2s ease-out forwards;
`;

export const Socials = styled.div`
  ${flexCenter}
  margin-top: 50px;

  a{
    ${flexCenter}
  }

  a:first-child{
    margin-right: 40px;
  }
`;

const showing = keyframes`
  to{
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;

  span {
    display: block;
    font-size: 4rem;
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }

  span:nth-child(1) {
    -webkit-animation: ${showing} 0.3s 0.5s ease-out forwards;
    animation: ${showing} 0.3s 0.5s ease-out forwards;
  }

  span:nth-child(2) {
    color: ${primaryColor};
    -webkit-animation: ${showing} 0.3s 0.8s ease-out forwards;
    animation: ${showing} 0.3s 0.8s ease-out forwards;
  }

  @media screen and (max-width: 320px) {
    span {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 321px) and (max-width: 498px) {
    span {
      font-size: 2rem;
    }
  }
`;

export const Jumbotron = styled.div`
  max-width: 800px;
  ${flexCenter}
  flex-direction: column;
  align-items: flex-start;
  color: white;
  margin-left: 120px;
  position: relative;
  z-index: 0;

  &::before {
    position: absolute;
    content: "";
    z-index: -1;
    height: 0;
    left: -120px;
    width: 100px;
    background-color: ${primaryColor};
    -webkit-animation: stretching 0.5s ease-out forwards;
    animation: stretching 0.5s ease-out forwards;

    @media screen and (max-width: 767px) {
      width: 50px;
      left: -70px;
    }

    @keyframes stretching {
      to {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-right: inherit;
    margin-left: 70px;
  }

  h2 {
    margin-top: 20px;
    font-size: 2rem;
  }

  p {
    margin-top: 20px;
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
    -webkit-animation: ${showing} 0.3s 1.1s ease-out forwards;
    animation: ${showing} 0.3s 1.1s ease-out forwards;
  }

  a {
    margin-top: 20px;
    font-size: 1.5rem;
    letter-spacing: 2px;
    position: relative;
    ${flexCenter};
    -webkit-transition: all 0.3s ease-out;
    -webkit-transform: translateX(50px);
    transition: all 0.3s ease-out;
    transform: translateX(50px);
    opacity: 0;
    -webkit-animation: ${showing} 0.3s 1.4s ease-out forwards;
    animation: ${showing} 0.3s 1.4s ease-out forwards;

    @media screen and (max-width: 320px) {
      font-size: 1.2rem;
    }

    & > span {
      color: ${primaryColor};
      font-size: 1.5rem;
      font-weight: bold;

      @media screen and (max-width: 320px) {
        font-size: 1.2rem;
      }
    }

    &:hover ${ArrowLongRight} {
      -webkit-transform: translate(10px);
      transform: translate(10px);
      opacity: 1;
    }

    &:hover {
      letter-spacing: 3px;
    }
  }
`;
