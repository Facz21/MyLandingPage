import { Bot, Code2, Layout, BarChart3, Cloud, Database } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Bot,
    title: "AI Engineering & LLMs",
    tagline: "Intelligent systems, RAG & agents",
    items: [
      "LLM APIs & Prompting",
      "RAG Architecture",
      "Semantic Kernel & LangChain",
      "Vector DBs (pgvector / Qdrant)",
      "AI Agents & Function Calling",
    ],
  },
  {
    icon: Code2,
    title: "Backend & API Architecture",
    tagline: "Scalable, secure & clean services",
    items: [
      "C# / .NET 8+",
      "Python / FastAPI",
      "RESTful Clean Architecture",
      "Entity Framework & Dapper",
      "Microservices & Auth (JWT)",
    ],
  },
  {
    icon: Layout,
    title: "Frontend & React",
    tagline: "Interactive, fluid & modern UI",
    items: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite & State Management",
      "Responsive & Accessible UI",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    tagline: "ETL pipelines & data-driven value",
    items: [
      "Python (Pandas, NumPy)",
      "SQL Query Optimization",
      "Data Cleaning & ETL",
      "Interactive Dashboards",
      "Statistical Insights",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Containers, CI/CD & Linux environments",
    items: [
      "Docker & Containers",
      "CI/CD (GitHub Actions)",
      "Linux (Xubuntu / Xfce)",
      "Fish Shell Automation",
      "Cloud Deployment & Edge",
    ],
  },
  {
    icon: Database,
    title: "Databases & Performance",
    tagline: "High throughput, caching & modeling",
    items: [
      "PostgreSQL & SQL Server",
      "Database Modeling",
      "Redis (Cache & Queues)",
      "WebSockets & Event-Driven",
      "Performance Tuning",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Tech stack" title="Tools & technologies I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, idx) => (
          <article
            key={g.title}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-surface/90 via-surface/60 to-surface/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.7)]"
          >
            {/* Top glowing line on hover */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-accent/20" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-accent/40 bg-gradient-to-br from-accent/20 to-accent-2/10 text-accent shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_16px_rgba(var(--accent),0.35)]">
                  <g.icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground/50 transition-colors group-hover:text-accent">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-white">
                {g.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{g.tagline}</p>
            </div>

            <ul className="relative z-10 mt-6 flex flex-wrap gap-2 border-t border-border/40 pt-4">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/15 hover:text-accent"
                >
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
