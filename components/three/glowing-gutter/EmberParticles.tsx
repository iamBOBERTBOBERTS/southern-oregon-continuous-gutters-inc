"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type EmberParticlesProps = {
  count: number;
  reducedMotion: boolean;
};

export function EmberParticles({ count, reducedMotion }: EmberParticlesProps) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (seeded(index, 11) - 0.5) * 8.2;
      values[index * 3 + 1] = seeded(index, 23) * 3.8 - 1.9;
      values[index * 3 + 2] = (seeded(index, 37) - 0.5) * 3.2;
    }
    return values;
  }, [count]);

  const colors = useMemo(() => {
    const values = new Float32Array(count * 3);
    const blue = new THREE.Color("#42bfff");
    const gold = new THREE.Color("#f3ad45");
    const color = new THREE.Color();
    for (let index = 0; index < count; index += 1) {
      color.copy(blue).lerp(gold, seeded(index, 71) > 0.62 ? 0.85 : 0.18);
      values[index * 3] = color.r;
      values[index * 3 + 1] = color.g;
      values[index * 3 + 2] = color.b;
    }
    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (reducedMotion || !points.current) {
      return;
    }

    const attribute = points.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let index = 0; index < attribute.count; index += 1) {
      const drift = 0.18 + seeded(index, 97) * 0.34;
      const lift = 0.11 + seeded(index, 101) * 0.26;
      let x = attribute.getX(index) - delta * drift;
      let y = attribute.getY(index) + delta * lift;

      if (x < -4.5) x = 4.3;
      if (y > 2.15) y = -1.95;

      attribute.setX(index, x);
      attribute.setY(index, y);
    }
    attribute.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.028}
        transparent
        opacity={0.82}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function seeded(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}
