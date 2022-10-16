/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Touati_Fellouh (https://sketchfab.com/Touati_Fellouh)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/soccer-ball-607bca1f9bb2447eaa67143515b73ca7
title: Soccer ball
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Soccer(props) {
  const pathGlb = window.location.pathname === "localhost" ? "/soccer_ball.glb" : "portfolio/soccer_ball.glb";
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(pathGlb)
  const { actions } = useAnimations(animations, group)
  const ballRef = useRef(null);

  useFrame(() => {
    if(ballRef !== null) ballRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={ballRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={[1,1,1]} position={[0,-0.5,0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Empty_0" rotation={[0, -1.48, 0]} />
              <group name="Icosphere_2" position={[-0.08, 0.46, 0.06]} scale={2}>
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.003']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(pathGlb)
