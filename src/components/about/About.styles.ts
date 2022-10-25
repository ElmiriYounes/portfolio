import styled, { css } from "styled-components";
import { flexCenter, primaryColor, SubTitle } from "../../Global.styles";
import { IoLogoGameControllerB } from "react-icons/io";
import { GiFullMotorcycleHelmet, GiSoccerBall } from "react-icons/gi";

const StylesIcons = css`
  font-size: 5rem;
  color: white;
  transform: scale(0);
  animation: scaling 0.5s 0.5s ease-out forwards;
  transition: all 0.5s ease-out;

  @keyframes scaling {
    0% {
      transform: scale(0);
    }
    40% {
      transform: scale(1.2);
    }
    60% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const GamingIcon = styled(IoLogoGameControllerB)`
  ${StylesIcons}
`;

export const BallIcon = styled(GiSoccerBall)`
  ${StylesIcons}
`;

export const HelmetIcon = styled(GiFullMotorcycleHelmet)`
  ${StylesIcons}
`;

export const Hobby = styled.div`
  ${flexCenter}
  position: relative;
  z-index: 0;
  margin: 20px 20px 0 20px;
  width: 200px;

  /* @media screen and (max-width: 498px) {
    font-size: 1.5rem;
    width: 220px;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
  } */

  &::before {
    width: 80%;
    height: 100%;
    border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    background-color: ${primaryColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: absolute;
    content: "";
    z-index: -1;
    transition: all 0.5s ease-out;
  }

  &:hover::before {
    background-color: white;
  }

  &:hover ${GamingIcon},&:hover ${BallIcon},&:hover ${HelmetIcon} {
    color: ${primaryColor};
  }
`;

export const Hobbies = styled.div`
  ${flexCenter}
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const AboutWrap = styled.div`
  max-width: 800px;

  p {
    margin-top: 20px;
    opacity: 0;
    transform: translateX(50px);
    animation: showing 0.5s 0.5s ease-out forwards;

    @keyframes showing {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  ${SubTitle} {
    margin-top: 20px;
    width: fit-content;
    opacity: 0;
    transform: translateX(50px);
    animation: showing 0.5s ease-out forwards;

    @keyframes showing {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  ${SubTitle}:first-child {
    margin-top: inherit;
  }
`;
