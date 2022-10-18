import {GrReactjs} from 'react-icons/gr'

export const hostname: string =
  window.location.hostname === "localhost" ? "/" : "/portfolio/";

interface ISkills {
  title: string;
  img: any;
}

export const skills: ISkills[] = [
  {
    title: "React",
    img: <GrReactjs/>,
  }
];
