import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../project-data";
import DockUICaseStudy from "./DockUICaseStudy";
import "./case-study.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter((project) => !project.listing).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && !item.listing);
  return project ? { title: `${project.title} — Maicol`, description: project.overview } : {};
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && !item.listing);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className="case-study">
      <nav className="case-nav" aria-label="Case study navigation">
        <Link className="brand wordmark" href="/">Maicol<span>Cabreja</span></Link>
        <Link href="/#work">← All projects</Link>
      </nav>
      <article>
        <header className={`case-header${project.slug === "dockui" ? " case-header-centered" : ""}`}>
          <div className="case-app-icon" aria-hidden="true">{project.image ? <Image src={project.image} alt="" width={80} height={80} priority /> : project.icon}</div>
          {project.slug !== "dockui" && <p className="case-eyebrow">Product design &amp; development · {project.dates}</p>}
          <h1>{project.title}</h1>
          <p className="case-caption">{project.caption}</p>
          {project.slug !== "dockui" && <ul className="case-tags" aria-label="Technologies">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}
        </header>
        <div className="case-body">
          {project.slug === "dockui" ? <DockUICaseStudy /> : <>
          <section><p className="case-eyebrow">Overview</p><h2>The product</h2><p>{project.overview}</p></section>
          <section><p className="case-eyebrow">The problem</p><h2>A more focused workflow</h2><p>{project.challenge}</p></section>
          <section><p className="case-eyebrow">My contribution</p><h2>Design &amp; engineering</h2>{project.sections.map((section) => <div className="case-detail" key={section.title}><h3>{section.title}</h3><p>{section.text}</p></div>)}</section>
          </>}
        </div>
      </article>
      <footer className="case-footer">
        <p className="case-eyebrow">Next project</p>
        <Link className="case-next" href={nextProject.listing ?? `/projects/${nextProject.slug}`}>{nextProject.title} <span aria-hidden="true">→</span></Link>
        <Link className="primary" href="/#work">All projects</Link>
      </footer>
    </main>
  );
}
