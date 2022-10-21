import React, { FC } from "react";
import { skills } from "../../datas/Variables";
import { BackgroundColor, IconWrap, SkillsWrap, SkillWrap, TitleSkill } from "./Skills.styles";

const Skills: FC = () => {

  return (
    <SkillsWrap>
      {skills.map((skill: any, index: number) => (
        <SkillWrap key={index}>
          <TitleSkill>{skill.title}</TitleSkill>
          <BackgroundColor/>
          <IconWrap>{skill.icon}</IconWrap>
        </SkillWrap>
      ))}
    </SkillsWrap>
  );
};

export default Skills;
