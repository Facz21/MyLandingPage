import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    alt: "Network of connected API service nodes",
    title: "Modular API Platform",
    description:
      "A .NET 8 REST API with clean architecture, JWT auth and versioned endpoints serving multiple client apps.",
    tags: ["C#", ".NET", "REST"],
  },
  {
    image: project2,
    alt: "Abstract data pipeline visualization",
    title: "Data Sync Engine",
    description:
      "Background worker that reconciles records across databases with retries, idempotency and full audit logging.",
    tags: ["Python", "PostgreSQL", "Workers"],
  },
  {
    image: project3,
    alt: "Terminal automation interface",
    title: "Linux Ops Toolkit",
    description:
      "Fish-shell tooling and scripts that automate provisioning, backups and deploys on Xubuntu servers.",
    tags: ["Linux", "Fish", "Infra"],
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="surface-card group overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden border-b border-border">
              <img
                src={p.image}
                alt={p.alt}
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
                {p.tags.map((t) => (
                  <li key={t} className="font-mono text-xs text-accent">
                    #{t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} GitHub repository`}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} live demo`}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
