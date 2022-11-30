import { GrReactjs } from "react-icons/gr";
import { FaNode, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiGithub,
  SiMongodb,
  SiStyledcomponents,
  SiThreedotjs,
} from "react-icons/si";

import hangman from "../assets/images/hangman.gif";
import quote from "../assets/images/quote.gif";
import startup from "../assets/images/startup.gif";
import threejs from "../assets/images/threejs.gif";
import cookie from "../assets/images/cookie.gif";
import social from "../assets/images/amstramgram.gif";

export const hostname: string =
  window.location.hostname === "localhost" ? "/" : "/portfolio/";

interface ISkills {
  title: string;
  icon: any;
}

export const skills: ISkills[] = [
  {
    title: "React",
    icon: <GrReactjs />,
  },
  {
    title: "Node JS",
    icon: <FaNode />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript />,
  },
  {
    title: "HTML",
    icon: <SiHtml5 />,
  },
  {
    title: "CSS",
    icon: <SiCss3 />,
  },
  {
    title: "Javascript",
    icon: <SiJavascript />,
  },
  {
    title: "Graphql",
    icon: <SiGraphql />,
  },
  {
    title: "Github",
    icon: <SiGithub />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    title: "Styled\ncompo-nents",
    icon: <SiStyledcomponents />,
  },
  {
    title: "Three JS",
    icon: <SiThreedotjs />,
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
  },
];

interface IProjects {
  img: string;
  github: string;
  demo: string;
}

export const projects: IProjects[] = [
  {
    img: hangman,
    github: "https://github.com/ElmiriYounes/Project-Hangman-VanillaJavascript",
    demo: "https://elmiriyounes.github.io/Project-Hangman-VanillaJavascript/",
  },
  {
    img: threejs,
    github: "https://github.com/ElmiriYounes/ThreeJS",
    demo: "https://elmiriyounes.github.io/ThreeJS/",
  },
  {
    img: quote,
    github: "https://github.com/ElmiriYounes/Project-RandomQuote-React-NodeJS",
    demo: "https://elmiriyounes.github.io/Project-RandomQuote-React-NodeJS/",
  },
  {
    img: startup,
    github: "https://github.com/ElmiriYounes/Project-Startup24-React",
    demo: "https://elmiriyounes.github.io/Project-Startup24-React/",
  },
  {
    img: social,
    github: "https://github.com/ElmiriYounes/Amstramgram",
    demo: "https://elmiriyounes.github.io/Amstramgram/",
  },
];
