import { useEffect, useState } from "react";

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 1. Moving Tech Grid Layer */}
      <div
        className="absolute -inset-y-32 inset-x-0 bg-tech-grid opacity-30 mask-radial-fade transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.18}px, 0)`,
        }}
      />

      {/* 2. Top-Left Cyan Ambient Orb (Drifts down with scroll) */}
      <div
        className="absolute -left-40 top-12 h-[550px] w-[550px] rounded-full bg-accent/15 blur-[140px] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
        }}
      />

      {/* 3. Middle-Right Violet Ambient Orb (Drifts in counter-motion) */}
      <div
        className="absolute -right-40 top-1/3 h-[600px] w-[600px] rounded-full bg-accent-2/15 blur-[150px] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.15}px, 0)`,
        }}
      />

      {/* 4. Lower-Center Cyan/Emerald Orb (Emerges in lower sections) */}
      <div
        className="absolute left-1/4 top-2/3 h-[650px] w-[650px] rounded-full bg-accent/10 blur-[160px] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.12}px, 0)`,
        }}
      />
    </div>
  );
}
