import { OrbitControls } from "@react-three/drei";
import React, { FC, Suspense } from "react";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import { Younes3D } from "../components/threejs/Younes3D";
import { Container, Page, primaryColor } from "../Global.styles";
import {
  Robot,
  Dialog,
  RobotWrap,
  CodeWrap,
  CodeLine,
  Code,
  SpanPerspective,
} from "./View.styles";

interface ViewProps {
  currentPath: string;
  setCurrentPath: (path: string) => void;
  setOpen: (open: boolean) => void;
}

const View: FC<ViewProps> = (props) => {
  interface IPos {
    top: number;
    left: number;
  }

  interface IRot {
    x: number;
    y: number;
  }

  const positionsSpan: IPos[] = [
    { top: 0, left: 0 },
    { top: 0, left: 33.33 },
    { top: 0, left: 66.66 },
    { top: 50, left: 0 },
    { top: 50, left: 33.33 },
    { top: 50, left: 66.66 },
  ];

  const rotatesSpan: IRot[] = [
    { x: -20, y: 20 },
    { x: -20, y: 0 },
    { x: -20, y: -20 },
    { x: 20, y: 20 },
    { x: 20, y: 0 },
    { x: 20, y: -20 },
  ];

  return (
    <Page>
      <Container>
        {props.currentPath === "home" && (
          <Hero setCurrentPath={props.setCurrentPath} setOpen={props.setOpen} />
        )}
        {props.currentPath === "about" && <About />}
        {props.currentPath === "skills" && <Skills />}
        {props.currentPath === "projects" && <Projects />}
        <RobotWrap>
          <Robot className="canvas">
            <ambientLight intensity={0.5} />
            <directionalLight position={[-20, 1, 20]} intensity={1} />
            <Suspense fallback={null}>
              <Younes3D />
            </Suspense>
            <OrbitControls
              position={[5, 5, 5]}
              enableZoom={false}
              enableRotate={false}
            />
          </Robot>
          <Dialog>
            {positionsSpan.map((position, index) => (
              <SpanPerspective
                key={index}
                top={position.top}
                left={position.left}
                rotateX={rotatesSpan[index].x}
                rotateY={rotatesSpan[index].y}
              />
            ))}
            <CodeWrap>
              <CodeLine>
                <Code>const </Code>
                <Code color={primaryColor}>findAJob </Code>
                <Code>= </Code>
                <Code color="yellow">{"() "}</Code>
                <Code>{"=> "}</Code>
                <Code color="yellow">{"{"}</Code>
              </CodeLine>
              <CodeLine>
                <Code color={primaryColor}>{"while("}</Code>
                <Code>{"!"}</Code>
                <Code>{"success"}</Code>
                <Code color={primaryColor}>{") "}</Code>
                <Code color={primaryColor}>{"try"}</Code>
                <Code color="yellow">{"()"}</Code>
              </CodeLine>
              <CodeLine>
                <Code color="yellow">{"}"}</Code>
              </CodeLine>
            </CodeWrap>
          </Dialog>
        </RobotWrap>
      </Container>
    </Page>
  );
};

export default View;
