import React, { FC } from "react";
import {
  ArrowLongRight,
  GithubIcon,
  Jumbotron,
  LinkedinIcon,
  Socials,
  Title,
} from "./Hero.styles";
import { Link } from "react-router-dom";

interface HeroProps {
  setCurrentPath?: (path: string) => void;
  setOpen?: (open: boolean) => void;
}

const Hero: FC<HeroProps> = (props) => {
  return (
    <Jumbotron>
      <Title>
        <span>Fullstack Web</span>
        <span>Developer</span>
      </Title>
      <p>
        I’m a young web developer passionate about web coding, I am following a
        7 month training and I'm currently looking for a first job starting as
        soon as possible.
      </p>
      <Link
        to=""
        onClick={() => {
          props.setCurrentPath?.("about");
          props.setOpen?.(false)
        }}
      >
        kn<span>o</span>w m<span>o</span>re
        <ArrowLongRight />
      </Link>
      <Socials>
        <a href="https://www.linkedin.com/in/youneselmiri" target="_blank" rel="noreferrer">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/ElmiriYounes?tab=repositories" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </Socials>
    </Jumbotron>
  );
};

export default Hero;
