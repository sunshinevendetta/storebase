'use client';

import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Bounds } from '@react-three/drei';
import * as THREE from 'three';

function Model(props: any) {
  const { scene, animations } = useGLTF('/welcome.glb');
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    // Create an animation mixer
    if (scene && animations.length) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixerRef.current?.clipAction(clip).play();
      });
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
  });

  // Adjust the position to make it snap to the ground
  scene.position.set(0, -7, 0);

  return <primitive object={scene} {...props} scale={[0.6, 0.6, 0.6]} />;
}

const LogoScene: React.FC = () => {
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
        autoRotateSpeed={2.5}
        minDistance={5}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]} // Ensure the controls are centered on the model
      />
    </Canvas>
  );
};

export default LogoScene;
