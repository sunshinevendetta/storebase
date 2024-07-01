'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Bounds } from '@react-three/drei';

function Model(props: any) {
  const { scene } = useGLTF('/stand.glb');
  // Adjust the position to make it snap to the ground
  scene.position.set(0, -2, 0);
  return <primitive object={scene} {...props} scale={[1, 1, 1]} />;
}

const StandScene: React.FC = () => {
  return (
    <Canvas style={{ background: 'transparent' }} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <Environment files="/ambient.hdr" />
        <Bounds fit clip observe margin={1}>
          <Model />
        </Bounds>
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        autoRotate={true}
        autoRotateSpeed={5.5}
        minDistance={5}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]} // Ensure the controls are centered on the model
      />
    </Canvas>
  );
};

export default StandScene;
