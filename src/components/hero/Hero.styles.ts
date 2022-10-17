import styled, { css, keyframes } from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";

const scaling = keyframes`
  to{
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`;

const styleSocialIcons = css`
  ${flexCenter}
  margin-right: 40px;
  color: #cccccc;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease-out;

  &:hover {
    color: ${primaryColor};
    transform: scale(1.1);
  }
`;

export const ArrowLongRight = styled(CgArrowLongRight)`
  position: absolute;
  right: -40px;
  transform: translateX(0);
  opacity: 1;
  ${flexCenter};
  font-size: 1.5rem;
  pointer-events: none;
  color: ${primaryColor};
  transition: all 0.3s ease-out;
`;

export const LinkedinIcon = styled(BsLinkedin)`
  ${styleSocialIcons}
  transform: scale(0) rotate(720deg);
  opacity: 0;
  animation: ${scaling} 0.3s 1.7s ease-out forwards;
`;

export const GithubIcon = styled(BsGithub)`
  ${styleSocialIcons}
  transform: scale(0) rotate(720deg);
  opacity: 0;
  animation: ${scaling} 0.3s 2s ease-out forwards;
`;

export const Socials = styled.div`
  ${flexCenter}
  margin-top: 50px;
  justify-content: flex-start;
`;

const showing = keyframes`
  to{
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;

  span {
    display: block;
    font-size: 4rem;
    transform: translateX(50px);
    opacity: 0;
  }

  span:nth-child(1) {
    animation: ${showing} 0.3s 0.5s ease-out forwards;
  }

  span:nth-child(2) {
    color: ${primaryColor};
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
    transform: translateX(50px);
    opacity: 0;
    animation: ${showing} 0.3s 1.1s ease-out forwards;
  }

  a {
    margin-top: 20px;
    font-size: 1.5rem;
    letter-spacing: 2px;
    position: relative;
    ${flexCenter};
    transition: all 0.3s ease-out;
    transform: translateX(50px);
    opacity: 0;
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
      transform: translate(10px);
      opacity: 1;
    }

    &:hover {
      letter-spacing: 3px;
    }
  }
`;
