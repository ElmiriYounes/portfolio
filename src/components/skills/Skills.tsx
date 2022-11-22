import React, { FC } from "react";
import { skills } from "../../datas/Variables";
import {
  BackgroundColor,
  Icon,
  IconWrap,
  SkillsWrap,
  SkillWrap,
  TitleSkill,
} from "./Skills.styles";

const Skills: FC = () => {
  return (
    <SkillsWrap>
      {skills.map((skill: any, index: number) => (
        <SkillWrap key={index}>
          <TitleSkill>{skill.title}</TitleSkill>
          <IconWrap>
            <Icon>{skill.icon}</Icon>
          </IconWrap>
        </SkillWrap>
      ))}
    </SkillsWrap>
  );
};

export default Skills;
