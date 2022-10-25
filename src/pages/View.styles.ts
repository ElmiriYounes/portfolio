import styled from "styled-components";
import { flexCenter } from "../Global.styles";
import { Canvas } from "@react-three/fiber";

export const Robot = styled(Canvas)`
  position: absolute;
  right: 0;
  width: 450px !important;
  height: 580px !important;
`;

interface ICode {
  color?: string;
}

export const Code = styled.span<ICode>`
  color: ${(props) => props.color || "white"};
  font-size: 1rem;
`;

export const CodeLine = styled.div`
  padding-bottom: 10px;
  transition: all 0.3s linear;

  &:nth-child(2),
  &:nth-child(4) {
    padding-left: 10px;
  }
`;

export const CodeWrap = styled.div`
  padding: 20px;
  background-color: #211d35;
  border-radius: 5px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.3s linear;

  &::after{
    position: absolute;
    content: '';
    height: 20px;
    width: 60px;
    right: 40px;
    bottom: -20px;
    background-color: #211d35;
    

-webkit-clip-path: polygon(78% 0, 0 0, 100% 100%); clip-path: polygon(78% 0, 0 0, 100% 100%);

  }

`;

interface ISpanPers {
  top: number;
  left: number;
  rotateX:number;
  rotateY:number
}

export const SpanPerspective = styled.span<ISpanPers>`
  position: absolute;
  content: '';
  z-index: 2;
  width: 33.33%;
  height: 50%;
  top: ${props => `${props.top}%`};
  left: ${props => `${props.left}%`};

  &:hover ~ ${CodeWrap}{
    transform: ${props => `rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg)`};
  }

  &:hover ~ ${CodeWrap} ${CodeLine}{
    transform: translateZ(20px);
  }
`;

export const Dialog = styled.div`
  ${flexCenter}
  perspective: 1000px;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  border-radius: 5px;
`;

export const RobotWrap = styled.div`
  position: relative;
  ${flexCenter}

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
