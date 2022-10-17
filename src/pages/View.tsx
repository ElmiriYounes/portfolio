import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense } from "react";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import Skin from "../components/threejs/Skin";
import { Container, Page } from "../Global.styles";
import { Robot, Dialog, RobotWrap } from "./View.styles";

interface ViewProps {
  currentPath: string;
  setCurrentPath: (path: string) => void;
}

const View: FC<ViewProps> = (props) => {
  return (
    <Page>
      <Container>
        {props.currentPath === "home" && (
          <Hero setCurrentPath={props.setCurrentPath} />
        )}
        {props.currentPath === "about" && <About />}
        {props.currentPath === "skills" && <Skills />}
        <RobotWrap>
          <Robot className="canvas" style={{ height: "600px" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 20, 5]} intensity={1} />
            <Suspense fallback={null}>
              <Skin />
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Robot>
          <Dialog>
            <p>
              I code <br />
              like a geek
            </p>
          </Dialog>
        </RobotWrap>
      </Container>
    </Page>
  );
};

export default View;
