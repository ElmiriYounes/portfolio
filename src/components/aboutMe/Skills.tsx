import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense } from "react";
import styled from "styled-components";
import { flexCenter } from "../../Global.styles";
import Box from "../threejs/Box";
import { SubTitle, Wrap } from "./About.styles";
import textureBecode from "../../assets/images/becode.png";

const Storkes = styled.div`
  position: absolute;
  ${flexCenter}

  svg {
    width: 150px;
    height: 150px;
    position: absolute;
  }

  svg circle {
    fill: none;
    stroke: rgb(254, 229, 215);
    stroke-width: 10px;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
  }

  svg circle:nth-child(1) {
    stroke: rgba(254, 229, 215, 0.3);
    stroke-dashoffset: 0;
  }

  svg circle:nth-child(2) {
    animation: circle 2s 3s ease-out forwards;
  }

  @keyframes circle {
    to {
      stroke-dashoffset: 22;
    }
  }
  /* span {
    color: rgb(254, 229, 215);
    position: absolute;
    font-size: 3em;
    font-weight: 400;
  } */
`;

const StrokesCard = styled.div`
  ${flexCenter}
  position: relative;

  .canvas {
    width: 120px !important;
    height: 120px !important;
  }
`;

const Skills: FC = () => {
  return (
    <Wrap>
      <SubTitle>
        <h2>
          S<span>k</span>ills
        </h2>
      </SubTitle>
      <StrokesCard>
        <Storkes>
          <svg>
            <circle cx="70" cy="70" r="70" />
            <circle cx="70" cy="70" r="70" />
          </svg>
        </Storkes>
        <Canvas className="canvas">
          <ambientLight intensity={0.35} />
          <directionalLight position={[10, 2, 5]} intensity={0.3} />
          <Suspense fallback={null}>
            <Box texture={textureBecode} />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            minAzimuthAngle={0}
            maxAzimuthAngle={360}
          />
        </Canvas>
      </StrokesCard>
    </Wrap>
  );
};

export default Skills;
