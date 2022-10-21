import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense, useEffect } from "react";
import { SubTitle } from "../../Global.styles";
import { AboutWrap, BallIcon, GamingIcon, HelmetIcon, Hobbies, Hobby } from "./About.styles";

const About: FC = () => {
  const hobbiesIcons: any = [
    <GamingIcon />,
    <BallIcon />,
    <HelmetIcon />,
  ];

  return (
    <AboutWrap>
      <SubTitle>
        T<span>r</span>ained
      </SubTitle>
      <p>
        Hi, my name is Younes El miri and I'm a web developer trainee at <b>Becode</b>. <b>Becode</b> provides
        qualitative, competitive and inclusive coding bootcamps. I learned
        severals technologies like <b>ReactJS</b>, <b>NodeJS</b>,{" "}
        <b>Typescript</b>, <b>GraphQL</b>, <b>ThreeJS</b> and more.
      </p>
      <SubTitle>
        P<span>a</span>ssion
      </SubTitle>
      <p>
        I'm passionate about web coding. I continue to learn coding by myself
        and I love to discovery new technologies. My favorites tech are{" "}
        <b>ReactJS</b>, <b>NodeJS</b> and <b>ThreeJS</b> for 3D effects.
      </p>
      <SubTitle>
        H<span>o</span>bbies
      </SubTitle>
      <Hobbies>
        {hobbiesIcons.map((item: any, index: number) => (
          <Hobby key={index}>{item}</Hobby>
        ))}
      </Hobbies>
    </AboutWrap>
  );
};

export default About;
