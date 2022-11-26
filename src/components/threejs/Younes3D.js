/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import AnimSphere from "./AnimSphere";
import { hostname } from "../../datas/Variables";

export function Younes3D(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(`${hostname}younes3D.glb`);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(materials);
    actions.typing.play();
  }, [actions.typing]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1.4, -2, -3]} scale={[2, 2.5, 0.1]}>
        <mesh>
          <AnimSphere />
        </mesh>
      </group>
      <group
        name="Scene"
        scale={[4, 4, 4]}
        position={[2, -2, -2.5]}
        rotation={[Math.PI / 10, -Math.PI / 3, 0]}
      >
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="Collada_visual_scene_group"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="table_low" rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
              <mesh
                name="defaultMaterial"
                geometry={nodes.defaultMaterial.geometry}
                material={materials.Carcas}
                position={[-0.53, 0, -0.07]}
                scale={0.01}
              />
            </group>
          </group>
        </group>
        <group
          name="Cube003"
          position={[3134.11, 553.14, 2088.39]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Beard"
            geometry={nodes.Wolf3D_Beard.geometry}
            material={materials.Wolf3D_Beard}
            skeleton={nodes.Wolf3D_Beard.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
        </group>
        <mesh
          name="Cube001_Seat_0"
          geometry={nodes.Cube001_Seat_0.geometry}
          material={materials.Seat}
          position={[0.36, 0.5, -0.42]}
          rotation={[-1.55, -0.01, 1.07]}
          scale={0.2}
        />
        <mesh
          name="Cube001_Blue_0"
          geometry={nodes.Cube001_Blue_0.geometry}
          material={materials.Blue}
          position={[0.36, 0.5, -0.42]}
          rotation={[-1.55, -0.01, 1.07]}
          scale={0.2}
        />
        <mesh
          name="Cube001_Plastic_0"
          geometry={nodes.Cube001_Plastic_0.geometry}
          material={materials.Plastic}
          position={[0.36, 0.5, -0.42]}
          rotation={[-1.55, -0.01, 1.07]}
          scale={0.2}
        />
        <mesh
          name="Cube001_Metall_0"
          geometry={nodes.Cube001_Metall_0.geometry}
          material={materials.Metall}
          position={[0.36, 0.5, -0.42]}
          rotation={[-1.55, -0.01, 1.07]}
          scale={0.2}
        />
        <mesh
          name="Plane_Body002_0"
          geometry={nodes.Plane_Body002_0.geometry}
          material={materials["Body.002"]}
          position={[0, 0.72, 0.59]}
          rotation={[-1.57, 0, 1.49]}
          scale={0.04}
        />
        <mesh
          name="Plane_BodyRed_0"
          geometry={nodes.Plane_BodyRed_0.geometry}
          material={materials.BodyRed}
          position={[0, 0.72, 0.59]}
          rotation={[-1.57, 0, 1.49]}
          scale={0.04}
        />
        <mesh
          name="Plane_Cap_0"
          geometry={nodes.Plane_Cap_0.geometry}
          material={materials.material}
          position={[0, 0.72, 0.59]}
          rotation={[-1.57, 0, 1.49]}
          scale={0.04}
        />
        <mesh
          name="Plane_Screen_0"
          geometry={nodes.Plane_Screen_0.geometry}
          material={materials.Screen}
          position={[0, 0.72, 0.59]}
          rotation={[-1.57, 0, 1.49]}
          scale={0.04}
        />
        <mesh
          name="Plane_Legs_0"
          geometry={nodes.Plane_Legs_0.geometry}
          material={materials.Legs}
          position={[0, 0.72, 0.59]}
          rotation={[-1.57, 0, 1.49]}
          scale={0.04}
        />
        <mesh
          name="Plane_Label_0"
          geometry={nodes.Plane_Label_0.geometry}
          material={materials.Label}
          position={[0, 0.72, 0.59]}
          rotation={[-1.57, 0, 1.49]}
          scale={0.04}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${hostname}younes3D.glb`);
