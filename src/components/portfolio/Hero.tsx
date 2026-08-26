import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[image:var(--gradient-hero)] px-5 pb-16 pt-28 sm:pt-36"
    >
      <div className="mx-auto max-w-6xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Available for new projects
        </span>

        <div className="mt-6">
          <p className="font-mono text-xl font-medium tracking-wide text-accent sm:text-2xl lg:text-3xl">
            Hi, I&apos;m
          </p>
          <h1 className="mt-1 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-gradient">Andrés Cortés</span>
          </h1>
          <h2 className="mt-3 max-w-4xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Full-Stack Developer <span className="font-light text-muted-foreground">|</span>{" "}
            <span className="text-muted-foreground">AI Engineering, React &amp; Backend</span>
          </h2>
        </div>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Building AI-driven systems, resilient backends with .NET &amp; Python, dynamic React frontends, and insightful data solutions.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="neon" size="xl" asChild>
            <a href="/cv.pdf" download>
              <Download className="h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "5+", v: "Years coding" },
            { k: "React", v: "Frontend stack" },
            { k: "Data", v: "Analytics & Python" },
            { k: "C2", v: "English level" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-border bg-surface/60 p-4">
              <dt className="font-display text-2xl font-bold text-accent">{s.k}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
