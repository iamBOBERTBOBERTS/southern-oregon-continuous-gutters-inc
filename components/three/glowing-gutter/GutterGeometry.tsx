"use client";

import { useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import { useRef } from "react";
import * as THREE from "three";
import { flowFragmentShader, glowVertexShader, haloFragmentShader } from "./shaders";

type GutterGeometryProps = {
  reducedMotion: boolean;
};

export function GutterGeometry({ reducedMotion }: GutterGeometryProps) {
  const blueFlow = useRef<THREE.ShaderMaterial>(null);
  const goldLip = useRef<THREE.ShaderMaterial>(null);
  const halo = useRef<THREE.ShaderMaterial>(null);
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }, delta) => {
    const time = reducedMotion ? 0.2 : clock.elapsedTime;
    updateShaderTime(blueFlow, time);
    updateShaderTime(goldLip, time * 0.78 + 1.4);
    updateShaderTime(halo, time);

    if (!reducedMotion && group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -0.28 + Math.sin(time * 0.18) * 0.035, 0.035);
      group.current.position.y += Math.sin(time * 0.38) * delta * 0.018;
    }
  });

  return (
    <group ref={group} position={[0.1, -0.18, 0]} rotation={[0.16, -0.28, -0.08]}>
      <mesh position={[0.15, 0.34, -0.2]} rotation={[0, 0, -0.11]}>
        <boxGeometry args={[6.4, 0.22, 1.25]} />
        <meshStandardMaterial color="#0a0d11" roughness={0.48} metalness={0.72} />
      </mesh>

      <mesh position={[0.02, -0.06, 0.48]} rotation={[0, 0, -0.11]}>
        <boxGeometry args={[6.1, 0.24, 0.3]} />
        <meshStandardMaterial color="#14191f" roughness={0.32} metalness={0.9} />
      </mesh>

      <mesh position={[0.04, -0.17, 0.7]} rotation={[0, 0, -0.11]}>
        <boxGeometry args={[6.0, 0.055, 0.065]} />
        <shaderMaterial
          ref={blueFlow}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexShader={glowVertexShader}
          fragmentShader={flowFragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uBlue: { value: new THREE.Color("#42bfff") },
            uGold: { value: new THREE.Color("#f3ad45") },
            uIntensity: { value: 1.0 }
          }}
        />
      </mesh>

      <mesh position={[-0.03, -0.01, 0.86]} rotation={[0, 0, -0.11]}>
        <boxGeometry args={[5.85, 0.048, 0.048]} />
        <shaderMaterial
          ref={goldLip}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexShader={glowVertexShader}
          fragmentShader={flowFragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uBlue: { value: new THREE.Color("#244f82") },
            uGold: { value: new THREE.Color("#ffc36a") },
            uIntensity: { value: 0.8 }
          }}
        />
      </mesh>

      <mesh position={[2.88, -0.88, 0.66]} rotation={[0, 0, 1.46]}>
        <boxGeometry args={[1.78, 0.2, 0.22]} />
        <meshStandardMaterial color="#111820" roughness={0.34} metalness={0.88} />
      </mesh>

      <mesh position={[2.82, -0.82, 0.82]} rotation={[0, 0, 1.46]}>
        <boxGeometry args={[1.68, 0.045, 0.045]} />
        <meshBasicMaterial color="#42bfff" transparent opacity={0.72} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      <mesh position={[0.2, -0.18, 0.42]} rotation={[0.15, -0.03, -0.11]}>
        <planeGeometry args={[7.4, 2.3, 1, 1]} />
        <shaderMaterial
          ref={halo}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexShader={glowVertexShader}
          fragmentShader={haloFragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uBlue: { value: new THREE.Color("#1f82c0") },
            uGold: { value: new THREE.Color("#f3ad45") }
          }}
        />
      </mesh>
    </group>
  );
}

function updateShaderTime(ref: RefObject<THREE.ShaderMaterial | null>, time: number) {
  if (ref.current) {
    ref.current.uniforms.uTime.value = time;
  }
}
