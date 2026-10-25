"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const targets = [
  ".nav",
  ".simple-hero .credential",
  ".hero-socials",
  ".section-top",
  ".project-track .project",
  ".carousel-controls",
  ".tech-stack-heading",
  ".tech-group h3",
  ".tech-group li",
  ".contact-intro h2",
  ".contact-intro p",
  ".contact-intro > a",
  ".footer-bottom",
  ".case-nav",
  ".case-header",
  ".case-body section > h2",
  ".case-body section > p",
  ".case-detail",
  ".dockui-list li",
  ".case-workflow li",
  ".case-code",
  ".case-footer",
].join(", ");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    let observer: IntersectionObserver | undefined;
    let elements: HTMLElement[] = [];

    function reset() {
      observer?.disconnect();
      elements.forEach((element) => {
        element.removeAttribute("data-scroll-reveal");
        element.style.removeProperty("--reveal-delay");
      });
    }

    function setup() {
      reset();
      if (preference.matches) return;
      elements = Array.from(document.querySelectorAll<HTMLElement>(targets));
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.scrollReveal = "visible";
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.05, rootMargin: "0px 0px -24px 0px" });

      elements.forEach((element, index) => {
        // Preserve content above the viewport when returning to an anchor.
        if (element.getBoundingClientRect().bottom < 0) return;
        element.style.setProperty("--reveal-delay", `${(index % 3) * 60}ms`);
        element.dataset.scrollReveal = "pending";
        observer?.observe(element);
      });
    }

    const frame = requestAnimationFrame(setup);
    preference.addEventListener("change", setup);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", setup);
      reset();
    };
  }, [pathname]);

  return null;
}
