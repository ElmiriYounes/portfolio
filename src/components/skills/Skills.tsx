import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense } from "react";
import { skills } from "../../datas/Variables";
import Box from "../threejs/Box";
import { Skill, SkillsWrap, SkillTitle } from "./Skills.styles";

const Skills: FC = () => {
  return (
    <SkillsWrap>
      {skills.map((skill: any, index: number) => (
        <Skill key={index}>
          {skill.img}
          <SkillTitle>{skill.title}</SkillTitle>
        </Skill>
      ))}
    </SkillsWrap>
  );
};

export default Skills;
