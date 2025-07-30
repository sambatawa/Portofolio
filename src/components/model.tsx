'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../components/trid';

const ThreeScene = () => {
  return (
    <Canvas
      className="mt-50 fixed flex"
      camera={{ position: [0, 1, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={30} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 3} />
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
