"use client";

import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type SceneCanvasProps = {
  particleCount?: number;
};

const cameraStops = [
  new THREE.Vector3(0, 1.35, 7.2),
  new THREE.Vector3(-0.8, 1.05, 6.4),
  new THREE.Vector3(0.55, 0.9, 5.7),
  new THREE.Vector3(1.15, 0.65, 5.25),
  new THREE.Vector3(0, 1.25, 6.6)
];

export function SceneCanvas({ particleCount = 220 }: SceneCanvasProps) {
  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.35]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        frameloop="always"
        performance={{ min: 0.55 }}
      >
        <CinematicScene particleCount={particleCount} />
      </Canvas>
      <div className="scene-vignette" />
    </div>
  );
}

function CinematicScene({ particleCount }: { particleCount: number }) {
  const camera = useRef<THREE.PerspectiveCamera>(null);
  const rain = useRef<THREE.Points>(null);
  const roof = useRef<THREE.Group>(null);
  const water = useRef<THREE.Group>(null);
  const gutter = useRef<THREE.Group>(null);
  const coil = useRef<THREE.Group>(null);
  const sweep = useRef<THREE.PointLight>(null);

  useFrame(({ clock }, delta) => {
    const progress = getCssNumber("--cinematic-progress");
    const sceneFloat = progress * (cameraStops.length - 1);
    const sceneIndex = Math.min(cameraStops.length - 2, Math.floor(sceneFloat));
    const sceneMix = sceneFloat - sceneIndex;
    const cameraTarget = cameraStops[sceneIndex].clone().lerp(cameraStops[sceneIndex + 1], sceneMix);

    if (camera.current) {
      camera.current.position.lerp(cameraTarget, 0.06);
      camera.current.lookAt(0.2, -0.2, 0);
    }

    if (rain.current) {
      const attribute = rain.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let index = 0; index < attribute.count; index += 1) {
        const nextY = attribute.getY(index) - delta * (1.8 - progress * 0.95);
        const nextX = attribute.getX(index) - delta * 0.18;
        attribute.setY(index, nextY < -2.7 ? 4.6 : nextY);
        attribute.setX(index, nextX < -4.8 ? 4.8 : nextX);
      }
      attribute.needsUpdate = true;
      setObjectOpacity(rain.current, THREE.MathUtils.lerp(0.72, 0.2, smoothRange(progress, 0.68, 1)));
    }

    if (roof.current) {
      roof.current.rotation.z = -0.18 + Math.sin(clock.elapsedTime * 0.22) * 0.014;
      roof.current.position.y = THREE.MathUtils.lerp(-0.85, -0.62, smoothRange(progress, 0.74, 1));
    }

    if (water.current) {
      setGroupOpacity(water.current, smoothRange(progress, 0.18, 0.62) * (1 - smoothRange(progress, 0.82, 1) * 0.55));
      water.current.position.x = THREE.MathUtils.lerp(-0.35, 0.32, smoothRange(progress, 0.22, 0.52));
    }

    if (gutter.current) {
      const gutterIn = smoothRange(progress, 0.38, 0.58);
      setGroupOpacity(gutter.current, gutterIn);
      gutter.current.scale.x = THREE.MathUtils.lerp(0.15, 1, gutterIn);
    }

    if (coil.current) {
      const coilIn = smoothRange(progress, 0.58, 0.76) * (1 - smoothRange(progress, 0.9, 1));
      setGroupOpacity(coil.current, coilIn);
      coil.current.rotation.y += delta * 0.18;
    }

    if (sweep.current) {
      sweep.current.position.x = Math.sin(clock.elapsedTime * 0.35) * 3.1;
      sweep.current.intensity = THREE.MathUtils.lerp(1.9, 0.78, smoothRange(progress, 0.72, 1));
      sweep.current.color.lerpColors(new THREE.Color("#42a5d5"), new THREE.Color("#f3ad45"), smoothRange(progress, 0.76, 1));
    }
  });

  return (
    <>
      <PerspectiveCamera ref={camera} makeDefault position={[0, 1.35, 7.2]} fov={42} />
      <color attach="background" args={["#050607"]} />
      <fog attach="fog" args={["#050607", 5.8, 15.5]} />
      <ambientLight intensity={0.48} />
      <directionalLight position={[4, 5, 3]} intensity={1.45} color="#bde9ff" />
      <pointLight ref={sweep} position={[-2.2, 1.25, 2.8]} intensity={1.8} color="#42a5d5" />
      <RainParticles particleCount={particleCount} refObject={rain} />
      <RooflinePlane refObject={roof} />
      <WaterPaths refObject={water} />
      <GutterProfile refObject={gutter} />
      <AluminumCoil refObject={coil} />
      <Environment preset="night" />
    </>
  );
}

function RainParticles({
  particleCount,
  refObject
}: {
  particleCount: number;
  refObject: RefObject<THREE.Points | null>;
}) {
  const positions = useMemo(() => {
    const values = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      values[index * 3] = (seededValue(index, 3) - 0.5) * 9;
      values[index * 3 + 1] = seededValue(index, 9) * 6 - 1.8;
      values[index * 3 + 2] = (seededValue(index, 15) - 0.5) * 4.6;
    }
    return values;
  }, [particleCount]);

  return (
    <points ref={refObject}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#42a5d5" size={0.032} transparent opacity={0.68} depthWrite={false} />
    </points>
  );
}

function RooflinePlane({ refObject }: { refObject: RefObject<THREE.Group | null> }) {
  return (
    <group ref={refObject} position={[0.6, -0.85, -0.2]} rotation={[0.08, -0.24, -0.18]}>
      <mesh>
        <boxGeometry args={[6.8, 0.16, 1.45]} />
        <meshStandardMaterial color="#151a20" roughness={0.72} metalness={0.12} />
      </mesh>
      <mesh position={[0.08, -0.23, 0.82]}>
        <boxGeometry args={[6.3, 0.08, 0.12]} />
        <meshStandardMaterial color="#75808a" roughness={0.36} metalness={0.7} />
      </mesh>
    </group>
  );
}

function WaterPaths({ refObject }: { refObject: RefObject<THREE.Group | null> }) {
  return (
    <group ref={refObject} position={[-0.35, -0.82, 0.74]} rotation={[0.05, -0.24, -0.18]}>
      {[0, 1, 2].map((index) => (
        <mesh key={index} position={[index * 0.08, -index * 0.09, 0.08 + index * 0.03]}>
          <boxGeometry args={[4.6 - index * 0.55, 0.035, 0.035]} />
          <meshStandardMaterial
            color="#42a5d5"
            emissive="#0b6385"
            emissiveIntensity={1.25}
            transparent
            opacity={0}
          />
        </mesh>
      ))}
      <mesh position={[2.4, -0.58, 0.16]} rotation={[0, 0, 1.57]}>
        <boxGeometry args={[1.8, 0.04, 0.04]} />
        <meshStandardMaterial color="#42a5d5" emissive="#0b6385" emissiveIntensity={1.1} transparent opacity={0} />
      </mesh>
    </group>
  );
}

function GutterProfile({ refObject }: { refObject: RefObject<THREE.Group | null> }) {
  return (
    <group ref={refObject} position={[0.28, -1.04, 0.82]} rotation={[0.05, -0.24, -0.18]} scale={[0.15, 1, 1]}>
      <mesh>
        <boxGeometry args={[5.55, 0.16, 0.18]} />
        <meshStandardMaterial color="#c7d0d8" roughness={0.28} metalness={0.86} transparent opacity={0} />
      </mesh>
      <mesh position={[2.66, -0.72, 0.12]} rotation={[0, 0, 1.57]}>
        <boxGeometry args={[1.58, 0.13, 0.13]} />
        <meshStandardMaterial color="#aeb8c2" roughness={0.34} metalness={0.88} transparent opacity={0} />
      </mesh>
    </group>
  );
}

function AluminumCoil({ refObject }: { refObject: RefObject<THREE.Group | null> }) {
  return (
    <group ref={refObject} position={[-1.65, -0.42, 0.55]} rotation={[0.3, 0.3, -0.18]}>
      <mesh>
        <torusGeometry args={[0.68, 0.055, 12, 80]} />
        <meshStandardMaterial color="#c7d0d8" roughness={0.24} metalness={0.92} transparent opacity={0} />
      </mesh>
      <mesh position={[0.72, -0.02, 0]}>
        <boxGeometry args={[1.48, 0.09, 0.12]} />
        <meshStandardMaterial color="#d8e0e7" roughness={0.26} metalness={0.9} transparent opacity={0} />
      </mesh>
    </group>
  );
}

function setGroupOpacity(group: THREE.Group, opacity: number) {
  group.traverse((object) => {
    if ("material" in object) {
      setMaterialOpacity(object.material as THREE.Material | THREE.Material[], opacity);
    }
  });
}

function setObjectOpacity(object: THREE.Object3D, opacity: number) {
  if ("material" in object) {
    setMaterialOpacity(object.material as THREE.Material | THREE.Material[], opacity);
  }
}

function setMaterialOpacity(material: THREE.Material | THREE.Material[], opacity: number) {
  const materials = Array.isArray(material) ? material : [material];
  materials.forEach((item) => {
    item.transparent = true;
    item.opacity = opacity;
  });
}

function getCssNumber(name: string) {
  if (typeof document === "undefined") {
    return 0;
  }
  const value = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isFinite(value) ? value : 0;
}

function smoothRange(value: number, start: number, end: number) {
  return THREE.MathUtils.smoothstep(value, start, end);
}

function seededValue(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}
