import React, { useState } from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const AnimSphere = () => {

  return (
    <>
      <Sphere visible args={[1.5, 80, 200]}>
        <MeshDistortMaterial attach="material" color="rgb(165, 10, 54)" distort={0.5} speed={0.5} roughness={2} />
      </Sphere>
    </>
  );
};

export default AnimSphere;