"use client";

import dynamic from "next/dynamic";
import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas").then((mod) => mod.SceneCanvas), {
  ssr: false,
  loading: () => <SceneCanvasFallback />
});

type SceneMode = "checking" | "enabled" | "fallback";

export function SceneCanvasLoader() {
  const container = useRef<HTMLDivElement>(null);
  const { mode, particleCount } = useSceneCapability();
  const inView = useNearViewport(container);
  const shouldRenderWebGL = mode === "enabled" && inView;

  return (
    <div className="scene-loader" ref={container}>
      {shouldRenderWebGL ? <SceneCanvas particleCount={particleCount} /> : <SceneCanvasFallback />}
    </div>
  );
}

function SceneCanvasFallback() {
  return (
    <div className="scene-fallback" aria-hidden="true">
      <div className="scene-fallback-roof" />
      <div className="scene-fallback-gutter" />
      <div className="scene-fallback-light" />
    </div>
  );
}

function useSceneCapability() {
  const [mode, setMode] = useState<SceneMode>("checking");
  const [particleCount, setParticleCount] = useState(180);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const smallViewport = window.matchMedia("(max-width: 767px)").matches;
      const compactViewport = window.matchMedia("(max-width: 1180px)").matches;
      const deviceNavigator = navigator as Navigator & { deviceMemory?: number };
      const lowMemory = typeof deviceNavigator.deviceMemory === "number" && deviceNavigator.deviceMemory <= 4;

      if (reduceMotion || coarsePointer || smallViewport || lowMemory) {
        setMode("fallback");
        return;
      }

      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");

      if (!gl) {
        setMode("fallback");
        return;
      }

      setParticleCount(compactViewport ? 140 : 220);
      setMode("enabled");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return { mode, particleCount };
}

function useNearViewport(target: RefObject<Element | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = target.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "360px 0px",
        threshold: 0
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [target]);

  return inView;
}
