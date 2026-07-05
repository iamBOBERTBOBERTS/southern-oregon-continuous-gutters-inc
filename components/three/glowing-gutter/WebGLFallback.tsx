"use client";

export function WebGLFallback() {
  return (
    <div className="relative min-h-[68vh] overflow-hidden bg-[#040607] lg:min-h-screen" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_36%,rgba(64,150,210,0.22),transparent_24rem),radial-gradient(circle_at_68%_70%,rgba(243,173,69,0.12),transparent_18rem),linear-gradient(180deg,#040607,#071018_58%,#040607)]" />
      <div className="absolute left-[12%] right-[10%] top-[48%] h-1 rotate-[-9deg] rounded-full bg-gradient-to-r from-transparent via-sky-300 to-amber shadow-[0_0_42px_rgba(74,163,216,0.5)]" />
      <div className="absolute left-[18%] right-[18%] top-[54%] h-2 rotate-[-9deg] rounded-full bg-zinc-200/70 shadow-[0_0_26px_rgba(244,241,232,0.22)]" />
      <div className="absolute bottom-10 left-6 right-6 border-l-2 border-amber px-4 py-3 text-sm text-zinc-300">
        Static fallback for reduced motion, mobile, or unavailable WebGL.
      </div>
    </div>
  );
}
