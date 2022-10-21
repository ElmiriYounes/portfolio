import React, { FC, Suspense, useState, useEffect } from "react";
import { Section } from "../../Global.styles";
import {
  ArrowLongRight,
  GithubIcon,
  Jumbotron,
  LinkedinIcon,
  Socials,
  Title,
} from "./Hero.styles";
import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Skin from "../threejs/Skin";

interface HeroProps {
  setCurrentPath?: (path: string) => void;
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
          window.scrollTo(100,100);
          console.log('r');
          
        }}
      >
        kn<span>o</span>w m<span>o</span>re
        <ArrowLongRight />
      </Link>
      <Socials>
        <a href="https://www.linkedin.com/in/youneselmiri" target="_blank">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/ElmiriYounes?tab=repositories" target="_blank">
          <GithubIcon />
        </a>
      </Socials>
    </Jumbotron>
  );
};

export default Hero;
