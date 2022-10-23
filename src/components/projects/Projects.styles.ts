import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import styled, { css } from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";

const ArrowsStyles = css`
  font-size: 2rem;
  color: ${primaryColor};
  margin-right: 20px;
  animation: arrow_appearing 1s 0.5s ease-in-out forwards;
  transform: scale(0.7);

  @keyframes arrow_appearing {
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

  &:last-child {
    margin-right: unset;
  }

  &:hover {
    color: rgb(146, 11, 49);
  }

  &:active {
    transform: scale(0.8);
  }
`;

export const ArrowLeft = styled(IoIosArrowDropleftCircle)`
  ${ArrowsStyles}
`;

export const ArrowRight = styled(IoIosArrowDroprightCircle)`
  ${ArrowsStyles}
`;

export const Arrows = styled.div`
  ${flexCenter}
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProjectGif = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  ${flexCenter}
  color: white;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;

    @media screen and (max-width: 768px) {
      object-fit: cover;
  }
  }
`;

export const Links = styled.div`
  ${flexCenter}
  position: absolute;
  bottom: 0;

  a {
    background-color: ${primaryColor};
    color: white;
    padding: 10px;
    margin-right: 20px;
    border-radius: 30px;
    transition: all 0.5s ease-out;

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  a:hover {
    background-color: white;
    color: ${primaryColor};
  }

  a:last-child {
    margin-right: unset;
  }
`;

export const ProjectWrap = styled.div`
  width: 100%;
  height: 100%;
  ${flexCenter}
  position: relative;

  @media screen and (max-width: 420px) {
    width: 100%;
  }

  @media screen and (min-width: 421px) and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
    outline: 3px solid ${primaryColor};
    outline-offset: 5px;
    border-radius: 20px;
    margin: 20px 0;
  }
`;

interface IProjectsWrap {
  width?: number;
}

export const ProjectsWrap = styled.div<IProjectsWrap>`
  ${flexCenter}
  height: 100%;
  width: ${(props) => `${props.width! * 100}%`};
  transition: all 1s ease-in-out;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
`;

export const ProjectsSlider = styled.div`
  width: 100%;
  height: 400px;
  overflow-x: hidden;
  outline: 3px solid ${primaryColor};
  outline-offset: 5px;
  border-radius: 20px;
  animation: slider_appearing 0.5s 0.5s ease-in-out forwards;
  transform: translateY(20px);
  opacity: 0;

  @keyframes slider_appearing {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    outline: none;
    height: 100%;
    overflow-x: unset;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  ${flexCenter}
  flex-direction: column;

  @media screen and (max-width: 1050px) {
    margin: 0 auto;
  }
`;
