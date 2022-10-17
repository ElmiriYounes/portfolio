import React, { useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { MeshDistortMaterial, Plane, Sphere } from "@react-three/drei";

const Box = (props) => {
  let colorMap = useLoader(TextureLoader, props.texture);

  const boxRef = useRef();

  return (
    <mesh ref={boxRef} position={[0,0,0]} rotation={[0, 2.5, 0]} scale={[3.5,3.5,3.5]}>
        <boxGeometry castShadow receiveShadow attach="geometry"/>
        <meshLambertMaterial map={colorMap} attach="material" args={[3, 3, 3]} />
    </mesh>
  );
};

export default Box;