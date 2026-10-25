"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "./project-data";

const screenshots: Record<string, { src: string; alt: string }[]> = {
  dockui: [
    { src: "/images/dockui/layers.png", alt: "DockUI visual editor with its component layers panel" },
    { src: "/images/dockui/code-generation.png", alt: "SwiftUI source code generated from a DockUI design" },
    { src: "/images/dockui/sf-symbols.png", alt: "DockUI’s searchable SF Symbols browser" },
  ],
  "metadata-translator": [
    { src: "/images/metadata-translator/translation.png", alt: "Metadata Translator translating App Store subtitles across languages" },
    { src: "/images/metadata-translator/publishing.png", alt: "Successfully saved metadata across 50 localizations" },
    { src: "/images/metadata-translator/apps.png", alt: "Metadata Translator’s connected apps list" },
  ],
};

export default function Projects({ projects }: { projects: Project[] }) {
  const track = useRef<HTMLDivElement>(null);

  function advance(direction: number) {
    const element = track.current;
    if (!element) return;
    const cards = Array.from(element.children) as HTMLElement[];
    const padding = parseFloat(getComputedStyle(element).paddingLeft);
    const offsets = cards.map((card) => card.offsetLeft - element.offsetLeft - padding);
    const target = direction > 0
      ? offsets.find((offset) => offset > element.scrollLeft + 2)
      : offsets.reverse().find((offset) => offset < element.scrollLeft - 2);
    element.scrollTo({
      left: target ?? (direction > 0 ? element.scrollWidth : 0),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <section className="work project-carousel" id="work" aria-labelledby="projects-heading">
      <div className="section-top"><h2 id="projects-heading">Projects</h2></div>
      <div
        className="project-track"
        id="project-track"
        ref={track}
        tabIndex={0}
        role="region"
        aria-label="Projects. Scroll horizontally to explore."
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            advance(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        {projects.map((project, index) => (
          <article className={`project ${project.tone}`} key={project.title} aria-label={`${project.title}, ${index + 1} of ${projects.length}`}>
            <div className={`project-art${screenshots[project.slug] ? " project-art-phones" : project.slug === "string-catalog-translate" ? " project-art-desktop" : ""}`}>
              {project.slug === "string-catalog-translate" ? <Image src="/images/string-catalog/editor.png" alt="String Catalog - Translate showing source strings, translations, and language status in its macOS editor" fill sizes="(max-width: 720px) 90vw, (max-width: 1312px) 64vw, 840px" className="desktop-project-screenshot" /> : screenshots[project.slug] ? <div className="dockui-previews">
                {screenshots[project.slug].map((screenshot) => <div className="phone-frame" key={screenshot.src}><Image src={screenshot.src} alt={screenshot.alt} width={943} height={2048} sizes="(max-width: 720px) 26vw, 240px" /></div>)}
              </div> : <>
              <span className="project-index">0{index + 1}</span>
              <div className="project-logo">{project.image ? <Image src={project.image} alt={`${project.title} app icon`} width={112} height={112} /> : project.icon}</div>
              <div className="shape one" /><div className="shape two" />
              </>}
            </div>
            <div className="project-info">
              <div><h3>{project.title}</h3><p>{project.caption}</p></div>
              {project.listing ? <a className="primary" href={project.listing} aria-label={`View ${project.title} on the App Store`}>View</a> : <Link className="primary" href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}>View</Link>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
