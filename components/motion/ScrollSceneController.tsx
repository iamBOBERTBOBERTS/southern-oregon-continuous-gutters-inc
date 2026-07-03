"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollSceneController() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (reduceMotion) {
      document.documentElement.style.setProperty("--scene-progress", "1");
      return;
    }

    const ctx = gsap.context(() => {
      const revealDistance = isDesktop ? 36 : 18;

      gsap.utils.toArray<HTMLElement>("[data-reveal], .section-label, .reveal-text").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: revealDistance },
          {
            autoAlpha: 1,
            y: 0,
            duration: isDesktop ? 0.82 : 0.48,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-card], .surface-panel").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: isDesktop ? 42 : 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: isDesktop ? 0.72 : 0.42,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-cta]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: isDesktop ? 20 : 10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: isDesktop ? 0.58 : 0.32,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-scene]").forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => document.body.setAttribute("data-active-scene", String(index)),
          onEnterBack: () => document.body.setAttribute("data-active-scene", String(index)),
          onUpdate: (self) => {
            section.style.setProperty("--section-progress", self.progress.toFixed(3));
            document.documentElement.style.setProperty("--scene-progress", self.progress.toFixed(3));
          }
        });
      });

      const journey = document.querySelector<HTMLElement>("[data-cinematic-journey]");
      if (journey) {
        ScrollTrigger.create({
          trigger: journey,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const progress = self.progress;
            const scene = Math.min(4, Math.floor(progress * 5));
            document.documentElement.style.setProperty("--cinematic-progress", progress.toFixed(3));
            document.body.setAttribute("data-cinematic-scene", String(scene));
          }
        });

        gsap.utils.toArray<HTMLElement>("[data-journey-panel]").forEach((panel, index) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top center",
            end: "bottom center",
            onEnter: () => document.body.setAttribute("data-cinematic-scene", String(index)),
            onEnterBack: () => document.body.setAttribute("data-cinematic-scene", String(index))
          });
        });
      }

      if (isDesktop) {
        gsap.utils.toArray<HTMLElement>("[data-pin-section]").forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=45%",
            pin: true,
            pinSpacing: true
          });
        });
      }
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
