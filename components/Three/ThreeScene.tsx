'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Bounds } from '@react-three/drei';
import VideoBackground from '../video/VideoBackground'; // Adjust the import path as needed
import '../../globals.css'; // Import your global CSS file

function Model(props: any) {
  const { scene } = useGLTF('/output.glb');
  // Adjust the position to make it snap to the ground
  scene.position.set(0, -10, 0);
  return <primitive object={scene} {...props} scale={[0.1, 0.1, 0.1]} />;
}

const ThreeScene: React.FC = () => {
  return (
    <div className="canvas-container">
      <VideoBackground />
      <div className="canvas-overlay">
        <Canvas className="canvas" gl={{ alpha: true }}>
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
      </div>
    </div>
  );
};

export default ThreeScene;
