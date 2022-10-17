import be from "../assets/images/becode.png";

export const hostname: string =
  window.location.hostname === "localhost" ? "/" : "/portfolio/";

interface ISkills {
  title: string;
  img: string;
}

export const skills: ISkills[] = [
  {
    title: "React",
    img: be,
  },
  {
    title: "NodeJS",
    img: be,
  },
  {
    title: "Typescript",
    img: be,
  },
  {
    title: "ThreeJS",
    img: be,
  },
  {
    title: "Html",
    img: be,
  },
  {
    title: "Css",
    img: be,
  },
  {
    title: "Javascript",
    img: be,
  },
  {
    title: "GraphQL",
    img: be,
  },
  {
    title: "Styled-components",
    img: be,
  },
];
