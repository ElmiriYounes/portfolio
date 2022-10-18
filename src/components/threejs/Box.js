import React, { useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { MeshDistortMaterial, Plane, Sphere } from "@react-three/drei";

const Box = (props) => {
  let colorMap = useLoader(TextureLoader, props.texture);

  const boxRef = useRef();

  return (
    <Sphere visible args={[2.5, 80, 200]}>
        <MeshDistortMaterial attach="material" color="rgb(165, 10, 54)" distort={0} speed={0} roughness={2} />
        <meshLambertMaterial map={colorMap} attach="material" />
      </Sphere>
  );
};

export default Box;