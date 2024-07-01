"use client";

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three'; // Correctly import THREE

interface ExpoBoothProps {
  modelPath: string;
  position: [number, number, number];
  onClick: () => void;
}

// Define a type for the GLTF result based on your model structure
interface GLTFResult extends THREE.Group {
  nodes: {
    booth: THREE.Mesh;
  };
  materials: {
    boothMaterial: THREE.Material;
  };
}

const ExpoBooth = ({ modelPath, position, onClick }: ExpoBoothProps) => {
  const { nodes, materials } = useGLTF(modelPath) as unknown as GLTFResult;
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      geometry={nodes.booth.geometry}
      material={materials.boothMaterial}
      position={position}
      onClick={onClick}
    />
  );
};

export default ExpoBooth;
