export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p className="font-mono">© {new Date().getFullYear()} Andrés Cortés — Full-Stack Developer</p>
        <p className="font-mono">Built on Linux, with too much coffee.</p>
      </div>
    </footer>
  );
}
