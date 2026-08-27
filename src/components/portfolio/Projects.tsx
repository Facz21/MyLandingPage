import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { useLanguage } from "@/context/language-context";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projectImages = [
  { img: project1, alt: "Network of connected API service nodes", github: "https://github.com/Facz21", demo: "https://example.com" },
  { img: project2, alt: "Abstract data pipeline visualization", github: "https://github.com/Facz21", demo: "https://example.com" },
  { img: project3, alt: "Terminal automation interface", github: "https://github.com/Facz21", demo: "https://example.com" },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((p, idx) => {
          const meta = projectImages[idx] || projectImages[0];
          return (
            <article key={p.title} className="surface-card group overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden border-b border-border">
                <img
                  src={meta.img}
                  alt={meta.alt}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tTag) => (
                    <li key={tTag} className="font-mono text-xs text-accent">
                      #{tTag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-2">
                  <a
                    href={meta.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t.projects.repoAria} ${p.title}`}
                    className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={meta.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t.projects.demoAria} ${p.title}`}
                    className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
