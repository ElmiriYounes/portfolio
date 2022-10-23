import styled from "styled-components";
import { flexCenter, primaryColor } from "../Global.styles";
import { Canvas } from "@react-three/fiber";

export const Robot = styled(Canvas)`
  position: absolute;
  width: 450px !important;
`;

export const Dialog = styled.div`
  ${flexCenter}
  position: absolute;
  z-index: -1;
  background-color: ${primaryColor};
  width: max-content;
  left: 20px;
  top: 0;
  padding: 20px 20px 50px 20px;
  -webkit-clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    100% 100%,
    50% 75%,
    0% 75%
  );
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    100% 100%,
    50% 75%,
    0% 75%
  );

  p {
    color: white;
  }
`;

export const RobotWrap = styled.div`
  position: relative;
  ${flexCenter}

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
