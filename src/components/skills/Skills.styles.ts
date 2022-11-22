import styled from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";

export const TitleSkill = styled.span`
  position: absolute;
  color: white;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(180deg) translateZ(-50px);
  transition: all 1s ease-out;
  z-index: 0;
  text-align: center;
  display: block;
`;

export const BackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: blue;
  position: absolute;
  transform: rotateX(0);
  transition: 1s ease-out;
  background-color: ${primaryColor};
`;

export const Icon = styled.div`
  transform: translateZ(30px);
  & > * {
    font-size: 3rem;
  }
`

export const IconWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: white;
  ${flexCenter}
  transform: rotateX(0);
  transition: 1s ease-out;
  position: absolute;
  perspective: 1000px;
  transform-style: preserve-3d;
  background-color: ${primaryColor};
`;

export const SkillWrap = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  perspective: 1000px;
  ${flexCenter}
  margin: 10px;
  animation: moving 1s 0s ease-out;

  @keyframes moving {
    0%{
        transform: rotate(0);
    }
    50%{
        transform: rotate(45deg);
    }
    100%{
        transform: rotate(0);
    }
  }

  &:hover ${IconWrap} {
    transform: rotateX(180deg);
  }

  &:hover ${BackgroundColor} {
    transform: rotateX(180deg);
  }

  &:hover ${TitleSkill} {
    transform: rotateX(0) translateZ(0);
    z-index: 1;
  }
`;

export const SkillsWrap = styled.div`
  ${flexCenter}
  max-width: 700px;
  padding: 50px 0;
  flex-wrap: wrap;
  border-radius: 30px;
  @media screen and (max-width: 1050px) {
    margin: 0 auto;
  }
`;
