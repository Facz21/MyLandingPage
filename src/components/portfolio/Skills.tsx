import { Bot, Code2, Layout, BarChart3, Cloud, Database } from "lucide-react";
import { Section } from "./Section";
import { useLanguage } from "@/context/language-context";

const skillIcons = [Bot, Code2, Layout, BarChart3, Cloud, Database];

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.categories.map((g, idx) => {
          const Icon = skillIcons[idx] || Bot;
          return (
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
                    <Icon className="h-6 w-6" />
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
          );
        })}
      </div>
    </Section>
  );
}
