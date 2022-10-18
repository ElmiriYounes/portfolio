import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense } from "react";
import Box from "../threejs/Box";
import { SubTitle, Wrap } from "./About.styles";
import textureBecode from "../../assets/images/becode.png";
import textureSanimex from "../../assets/images/sanimex.png";
import textureShinwi from "../../assets/images/shinwi.png";
import texturePronto from "../../assets/images/pronto.png";
import textureMedia from "../../assets/images/media.png";
import { flexCenter, primaryColor } from "../../Global.styles";
import styled from "styled-components";

const Company = styled.h3`
  font-size: 1.5rem;
  margin-top: 20px;
  ${flexCenter}
  color: white;
  position: relative;
  padding-bottom: calc(20px + 3px);

  &::after {
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 50px;
    border-radius: 20px;
    content: "";
    left: calc(50% - 25px);
    background-color: #ffe900;
  }
`;

const Icon = styled.div`
  ${flexCenter}

  .canvas {
  }
`;

const Card = styled.div`
  ${flexCenter}
  width: 300px;
  height: 473px;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  outline: 4px solid ${primaryColor};
  outline-offset: 4px;
  margin: 20px;
  border-radius: 20px;
  background-color: ${primaryColor};

  @media screen and (max-width: 350px) {
    width: 240px;
    height: 527px;
  }

  h4,
  p {
    text-align: center;
    margin-top: 20px;
  }

  h4,
  span {
    color: white;
  }

  span {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  margin-top: 20px;
  ${flexCenter}
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px; /* height of horizontal scrollbar ← You're missing this */
    width: 4px; /* width of vertical scrollbar */
    background-color: #d5d5d589;
  }

  &::-webkit-scrollbar-thumb {
    background: #d5d5d5;
  }

  .iconArrow {
    font-size: 4rem;
    color: white;
  }
`;

const Exp: FC = () => {
  interface ICompany {
    name: string;
    texture: string;
    title: string;
    years: string;
    text: string;
  }

  const companies: ICompany[] = [
    {
      name: "Becode",
      texture: textureBecode,
      title: "Trainee (Web Developer)",
      years: "april 2022 - now",
      text: "Becode provides qualitative, competitive and inclusive coding bootcamps.",
    },
    {
      name: "Sanimex",
      texture: textureSanimex,
      title: "Forklift operator",
      years: "nov 2018 - march 2022",
      text: "Sanimex is a company specializing in the sale of tiling and fitted kitchens.",
    },
    {
      name: "Shinwi",
      texture: textureShinwi,
      title: "Delivery man",
      years: "august 2016 - dec 2017",
      text: "Shinwi is a chinese restaurant (delivry foods).",
    },
    {
      name: "Pronto Pizza",
      texture: texturePronto,
      title: "Delivery man",
      years: "jan 2016 - jul 2016",
      text: "Pronto Pizza is an italian restaurant (delivry pizzas).",
    },
    {
      name: "Media PC",
      texture: textureMedia,
      title: "Trainee",
      years: "apr 2011 - may 2011",
      text: "Media PC is a company specializing PC repair company.",
    },
  ];

  return (
    <Wrap>
      <SubTitle>
        <h2>
          E<span>x</span>periences
        </h2>
      </SubTitle>
      <CardContainer>
        {companies.map((item, index) => (
          <Card key={index}>
            <Icon>
              <Canvas className="canvas">
                <ambientLight intensity={0.35} />
                <directionalLight position={[10, 2, 5]} intensity={0.3} />
                <Suspense fallback={null}>
                  <Box texture={item.texture} />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enableRotate={true}
                  minAzimuthAngle={0}
                  maxAzimuthAngle={360}
                />
              </Canvas>
            </Icon>
            <Company>{item.name}</Company>
            <h4>{item.title}</h4>
            <span>{item.years}</span>
            <p>{item.text}</p>
          </Card>
        ))}
      </CardContainer>
    </Wrap>
  );
};

export default Exp;
