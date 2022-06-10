/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BamPistache (https://sketchfab.com/karinkreeft8)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/earth-0caafb7e837047a688a3e504c0ea74af
title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/earth.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / -3, 1, 0]}>
        <group rotation={[Math.PI / 10, 0, 0]}>
          <mesh
            geometry={nodes.earth4_blinn1_0.geometry}
            material={materials.blinn1}
            scale={[0.3, 0.3, 0.3]}
          />
          <mesh
            geometry={nodes.earth4_lambert1_0.geometry}
            material={materials.lambert1}
            scale={[0.3, 0.3, 0.3]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/earth.gltf");
