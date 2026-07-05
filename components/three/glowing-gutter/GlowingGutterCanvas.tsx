"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { GlowingGutterScene } from "./GlowingGutterScene";
import { WebGLFallback } from "./WebGLFallback";

type SceneMode = "checking" | "enabled" | "fallback";

export function GlowingGutterCanvas() {
  const { mode, reducedMotion, particleCount } = useSceneCapability();

  if (mode !== "enabled") {
    return <WebGLFallback />;
  }

  return (
    <div className="relative min-h-[68vh] overflow-hidden bg-[#040607] lg:min-h-screen">
      <Canvas
        className="!absolute !inset-0 !h-full !w-full"
        dpr={[1, 1.35]}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        frameloop={reducedMotion ? "demand" : "always"}
        performance={{ min: 0.55 }}
      >
        <GlowingGutterScene particleCount={particleCount} reducedMotion={reducedMotion} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,transparent_0,rgba(4,6,7,0.12)_28%,rgba(4,6,7,0.82)_82%)]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.82)]" />
    </div>
  );
}

function useSceneCapability() {
  const [mode, setMode] = useState<SceneMode>("checking");
  const [reducedMotion, setReducedMotion] = useState(true);
  const [particleCount, setParticleCount] = useState(160);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const smallViewport = window.matchMedia("(max-width: 767px)").matches;
      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const compactViewport = window.matchMedia("(max-width: 1180px)").matches;
      const deviceNavigator = navigator as Navigator & { deviceMemory?: number };
      const lowMemory = typeof deviceNavigator.deviceMemory === "number" && deviceNavigator.deviceMemory <= 4;

      setReducedMotion(reduceMotion);

      if (reduceMotion || smallViewport || coarsePointer || lowMemory) {
        setMode("fallback");
        return;
      }

      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");

      if (!gl) {
        setMode("fallback");
        return;
      }

      setParticleCount(compactViewport ? 120 : 240);
      setMode("enabled");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return { mode, reducedMotion, particleCount };
}
