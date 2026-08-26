import { GraduationCap, Languages, Layers, BarChart3, Bot } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  {
    icon: Bot,
    title: "AI Engineering & LLM systems",
    body: "Building intelligent applications, RAG pipelines, vector search integration, and autonomous agents powered by modern LLMs.",
  },
  {
    icon: Layers,
    title: "Modern React & frontend",
    body: "Designing fast, responsive, and intuitive interfaces with React, TypeScript, and Tailwind CSS, keeping user experience smooth and accessible.",
  },
  {
    icon: BarChart3,
    title: "Data analysis & insights",
    body: "Extracting value and patterns from complex datasets using Python, Pandas, and SQL to support data-informed decision-making.",
  },
  {
    icon: GraduationCap,
    title: "Academic & intensive foundation",
    body: "University studies combined with intensive training at RIWI, grounding solid engineering practices in real collaborative workflows.",
  },
  {
    icon: Languages,
    title: "Completely bilingual",
    body: "C2 English. I work, document, and communicate with international teams without friction.",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineering systems, AI, interfaces & data">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m <span className="font-medium text-foreground">Andrés Cortés</span>, a full-stack developer and AI engineer with{" "}
            <span className="text-foreground">5 years of programming experience</span>. I specialize in building complete digital solutions — from scalable backend architectures (.NET / Python) and <span className="text-foreground">AI-powered systems (RAG / LLMs)</span> to reactive frontend applications in <span className="text-foreground">React</span>.
          </p>
          <p>
            With a strong focus on <span className="text-foreground">AI Engineering and Data Analysis</span>, I design intelligent workflows, integrate vector databases, and utilize Python, Pandas, and SQL to clean, process, analyze, and visualize data that uncovers actionable insights.
          </p>
          <p>
            I&apos;m <span className="text-foreground">completely bilingual (C2 English)</span>, with a mindset geared towards clean architecture, continuous learning, and high-impact collaboration with international teams.
          </p>

          <div className="mt-4 rounded-xl border border-border bg-surface/70 p-4 font-mono text-xs shadow-inner">
            <div className="mb-3 flex items-center justify-between border-b border-border/60 pb-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
                <span className="ml-1 text-[11px] text-muted-foreground">andres_profile.ts</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Ready to build
              </span>
            </div>
            <div className="space-y-1.5 text-muted-foreground">
              <p>
                <span className="text-accent">const</span> <span className="text-foreground">engineer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-foreground/90">name</span>: <span className="text-chart-3">&quot;Andrés Cortés&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-foreground/90">role</span>: <span className="text-chart-3">&quot;Full-Stack &amp; AI Engineer&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-foreground/90">experience</span>: <span className="text-chart-3">&quot;5+ Years&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-foreground/90">coreStack</span>: [<span className="text-chart-3">&quot;.NET&quot;</span>, <span className="text-chart-3">&quot;Python&quot;</span>, <span className="text-chart-3">&quot;React&quot;</span>, <span className="text-chart-3">&quot;LLMs&quot;</span>],
              </p>
              <p className="pl-4">
                <span className="text-foreground/90">data&amp;AI</span>: [<span className="text-chart-3">&quot;RAG&quot;</span>, <span className="text-chart-3">&quot;Pandas&quot;</span>, <span className="text-chart-3">&quot;SQL Analytics&quot;</span>, <span className="text-chart-3">&quot;Vector DBs&quot;</span>],
              </p>
              <p className="pl-4">
                <span className="text-foreground/90">languages</span>: [<span className="text-chart-3">&quot;Spanish (Native)&quot;</span>, <span className="text-chart-3">&quot;English (C2 Fluent)&quot;</span>],
              </p>
              <p className="pl-4">
                <span className="text-foreground/90">mindset</span>: <span className="text-chart-3">&quot;Clean architecture, robust systems &amp; data insights&quot;</span>
              </p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {highlights.map((h) => (
            <article key={h.title} className="surface-card flex gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <h.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
