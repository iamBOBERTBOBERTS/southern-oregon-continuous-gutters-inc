"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollSceneController() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    let quoteObserver: IntersectionObserver | undefined;
    let heroObserver: IntersectionObserver | undefined;

    const quoteSectionForSticky = document.querySelector<HTMLElement>("#quote");
    if (quoteSectionForSticky && !isDesktop) {
      quoteObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            document.body.setAttribute("data-quote-in-view", "true");
          } else {
            document.body.removeAttribute("data-quote-in-view");
          }
        },
        { rootMargin: "0px 0px -24% 0px", threshold: 0.08 }
      );
      quoteObserver.observe(quoteSectionForSticky);
    }

    const heroSectionForSticky = document.querySelector<HTMLElement>(".hero-cinema");
    if (heroSectionForSticky && !isDesktop) {
      heroObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            document.body.setAttribute("data-hero-in-view", "true");
          } else {
            document.body.removeAttribute("data-hero-in-view");
          }
        },
        { rootMargin: "0px 0px -38% 0px", threshold: 0.04 }
      );
      heroObserver.observe(heroSectionForSticky);
    }

    if (reduceMotion) {
      document.documentElement.style.setProperty("--scene-progress", "1");
      return () => {
        quoteObserver?.disconnect();
        heroObserver?.disconnect();
        document.body.removeAttribute("data-quote-in-view");
        document.body.removeAttribute("data-hero-in-view");
      };
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

      const quoteSection = document.querySelector<HTMLElement>("#quote");
      if (quoteSection) {
        ScrollTrigger.create({
          trigger: quoteSection,
          start: "top 75%",
          end: "bottom 25%",
          onEnter: () => document.body.setAttribute("data-quote-in-view", "true"),
          onEnterBack: () => document.body.setAttribute("data-quote-in-view", "true"),
          onLeave: () => document.body.removeAttribute("data-quote-in-view"),
          onLeaveBack: () => document.body.removeAttribute("data-quote-in-view")
        });
      }
    });

    ScrollTrigger.refresh();

    return () => {
      quoteObserver?.disconnect();
      heroObserver?.disconnect();
      document.body.removeAttribute("data-quote-in-view");
      document.body.removeAttribute("data-hero-in-view");
      ctx.revert();
    };
  }, []);

  return null;
}
