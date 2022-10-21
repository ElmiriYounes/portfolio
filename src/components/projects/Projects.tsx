import React, { useRef, useState, useEffect } from "react";
import { projects } from "../../datas/Variables";
import {
  ArrowLeft,
  ArrowRight,
  Arrows,
  Links,
  ProjectGif,
  ProjectsContainer,
  ProjectsSlider,
  ProjectsWrap,
  ProjectWrap,
} from "./Projects.styles";

const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const cardProjectRef = useRef<HTMLDivElement>(null);
  const [slider, setSlider] = useState<number | undefined>();
  const [indexSlider, setIndexSlider] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);

  useEffect(() => {
    setSlider(sliderContainerRef.current?.offsetWidth);

    const handleResize = () => {
      setSlider(sliderContainerRef.current?.offsetWidth);
      setTranslate(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    sliderRef.current!.style.transform = `translateX(${translate}px)`;
  }, [translate]);

  /**
   *
   * @param direction String
   */
  const sliding = (direction: string): void => {
    console.log(Math.abs(translate));

    console.log(
      sliderRef.current!.offsetWidth - cardProjectRef.current!.offsetWidth
    );

    if (direction === "left" && translate < 0) {
      setTranslate((t) => t + slider!);
    } else if (
      direction === "right" &&
      Math.abs(translate) <=
        sliderRef.current!.offsetWidth - cardProjectRef.current!.offsetWidth * 2
    ) {
      setTranslate((t) => t - slider!);
    }
  };

  return (
    <ProjectsContainer>
      <Arrows>
        <ArrowLeft
          onClick={() => {
            sliding("left");
          }}
        />
        <ArrowRight
          onClick={() => {
            sliding("right");
          }}
        />
      </Arrows>
      <ProjectsSlider ref={sliderContainerRef}>
        <ProjectsWrap width={projects.length} ref={sliderRef}>
          {projects.map((project, index) => (
            <ProjectWrap key={index} ref={cardProjectRef}>
              <ProjectGif>
                <img src={project.img} alt="project gif" />
              </ProjectGif>
              <Links>
                <a href={project.github} target="_blank">Github</a>
                <a href={project.demo} target="_blank">Demo</a>
              </Links>
            </ProjectWrap>
          ))}
        </ProjectsWrap>
      </ProjectsSlider>
    </ProjectsContainer>
  );
};

export default Projects;
