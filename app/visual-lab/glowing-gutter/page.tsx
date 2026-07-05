import type { Metadata } from "next";
import { GlowingGutterCanvas } from "@/components/three/glowing-gutter/GlowingGutterCanvas";

const phases = ["Storm Arrival", "Roofline Flow", "Protection System", "Precision Install", "Quote CTA"];

export const metadata: Metadata = {
  title: "Glowing Gutter Visual Prototype",
  robots: {
    index: false,
    follow: false
  }
};

export default function GlowingGutterPrototypePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#040607] text-zinc-100">
      <section className="grid min-h-screen lg:grid-cols-[1fr_22rem]">
        <div className="relative min-h-[68vh] lg:min-h-screen">
          <GlowingGutterCanvas />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#040607] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#040607] to-transparent" />
        </div>

        <aside className="relative z-20 border-t border-white/10 bg-[#050708]/95 px-5 py-7 shadow-[-24px_0_90px_rgba(0,0,0,0.34)] lg:border-l lg:border-t-0 lg:px-7 lg:py-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-300">Internal visual prototype</p>
          <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[0.92] tracking-0 text-zinc-50 sm:text-5xl lg:text-6xl">
            Glowing gutter structure
          </h1>
          <p className="mt-5 text-sm leading-7 text-zinc-300">
            A near-black blue and gold Three.js study for a future homepage hero. This route is isolated for review and
            is not integrated into the public homepage.
          </p>

          <div className="mt-8 space-y-3">
            {phases.map((phase, index) => (
              <div
                className="grid grid-cols-[2.25rem_1fr] items-center border border-white/10 bg-white/[0.035] px-3 py-3"
                key={phase}
              >
                <span className="text-xs font-black text-amber">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-xs font-black uppercase tracking-[0.16em] text-zinc-200">{phase}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-amber pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber">Not homepage code</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Approval gate: visual quality, mobile fallback, reduced-motion behavior, build validation, and Vercel
              preview review before any homepage integration.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
