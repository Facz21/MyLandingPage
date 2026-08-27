import { useEffect, useState } from "react";
import { Menu, X, Terminal, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-lg"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="truncate font-mono text-sm tracking-tight text-foreground font-semibold">
            andres<span className="text-accent">.</span>cortes
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
            >
              {l.label}
            </a>
          ))}

          {/* Language Switcher */}
          <Button variant="neon" size="sm" className="ml-2" asChild>
            <a href="#contact">{t.nav.contact}</a>
          </Button>
          <div className="ml-2 flex items-center rounded-full border border-border/80 bg-surface/70 p-0.5 font-mono text-xs backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={cn(
                "rounded-full px-2.5 py-1 transition-all duration-200",
                language === "es"
                  ? "bg-accent text-background font-bold shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              title="Cambiar a Español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={cn(
                "rounded-full px-2.5 py-1 transition-all duration-200",
                language === "en"
                  ? "bg-accent text-background font-bold shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              title="Switch to English"
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center rounded-full border border-border/80 bg-surface/70 p-0.5 font-mono text-xs">
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={cn(
                "rounded-full px-2 py-0.5 transition-all",
                language === "es" ? "bg-accent text-background font-bold" : "text-muted-foreground",
              )}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={cn(
                "rounded-full px-2 py-0.5 transition-all",
                language === "en" ? "bg-accent text-background font-bold" : "text-muted-foreground",
              )}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            aria-label={t.nav.toggleMenu}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 pb-4 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <Button variant="neon" size="sm" className="w-full" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                {t.nav.contact}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
