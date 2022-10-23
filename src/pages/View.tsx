import { OrbitControls } from "@react-three/drei";
import React, { FC, Suspense } from "react";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import { Younes3D } from "../components/threejs/Younes3D";
import { Container, Page } from "../Global.styles";
import { Robot, Dialog, RobotWrap } from "./View.styles";

interface ViewProps {
  currentPath: string;
  setCurrentPath: (path: string) => void;
  setOpen: (open: boolean) => void;
}

const View: FC<ViewProps> = (props) => {
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
          <Robot className="canvas" style={{ height: "600px" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-20, 1, 20]} intensity={1} />
            <Suspense fallback={null}>
              <Younes3D />
            </Suspense>
            <OrbitControls
              position={[5, 5, 5]}
              enableZoom={false}
              enableRotate={true}
            />
          </Robot>
          <Dialog>
            <p>
              Looking <br />
              for a job
            </p>
          </Dialog>
        </RobotWrap>
      </Container>
    </Page>
  );
};

export default View;
