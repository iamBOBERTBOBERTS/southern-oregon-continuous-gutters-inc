"use client";

import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { EmberParticles } from "./EmberParticles";
import { GutterGeometry } from "./GutterGeometry";

type GlowingGutterSceneProps = {
  particleCount: number;
  reducedMotion: boolean;
};

export function GlowingGutterScene({ particleCount, reducedMotion }: GlowingGutterSceneProps) {
  const camera = useRef<THREE.PerspectiveCamera>(null);
  const keyLight = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (reducedMotion) {
      return;
    }

    const time = clock.elapsedTime;
    if (camera.current) {
      camera.current.position.x = Math.sin(time * 0.16) * 0.18;
      camera.current.position.y = 1.25 + Math.sin(time * 0.12) * 0.08;
      camera.current.lookAt(0.12, -0.24, 0.12);
    }

    if (keyLight.current) {
      keyLight.current.position.x = -2.8 + Math.sin(time * 0.42) * 1.1;
      keyLight.current.intensity = 12 + Math.sin(time * 0.8) * 1.8;
    }
  });

  return (
    <>
      <PerspectiveCamera ref={camera} makeDefault position={[0, 1.25, 6.3]} fov={39} />
      <color attach="background" args={["#040607"]} />
      <fog attach="fog" args={["#040607", 5.6, 13.5]} />
      <ambientLight intensity={0.18} />
      <directionalLight position={[3.6, 4.4, 2.8]} intensity={1.6} color="#a9dcff" />
      <pointLight ref={keyLight} position={[-2.6, 1.1, 2.4]} intensity={12} color="#42bfff" distance={8} />
      <pointLight position={[2.8, -0.4, 1.7]} intensity={7.5} color="#f3ad45" distance={6} />
      <GutterGeometry reducedMotion={reducedMotion} />
      <EmberParticles count={particleCount} reducedMotion={reducedMotion} />
      <Environment preset="night" />
    </>
  );
}
