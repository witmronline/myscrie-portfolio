export const background = {
  // 🌐 Page base
  base: "bg-base-100 text-base-content",

  // 🧾 Cards
  card: "bg-base-200/60 border border-base-300",
  cardMuted: "bg-base-300/30 border border-base-300",
  cardSoft: "bg-base-100/60 border border-base-200 shadow-sm",

  // 🎨 Primary / Accent cards
  cardPrimary: "bg-primary/20 border border-primary/30",
  cardAccent: "bg-accent/20 border border-accent/30",

  // ✨ Hero / overlays
  heroOverlay: "bg-gradient-to-b from-base-100/70 to-base-200/90",
  overlayDark: "bg-black/50 backdrop-blur-sm",
  overlayLight: "bg-white/60 backdrop-blur",

  // 🌗 Glass effects
  glassNav: [
  "backdrop-blur-md",
  "bg-base-100/60",          // semi-transparent base color
  "border-b",
  "border-base-content/10",  // subtle bottom border
  "shadow-sm",
  "supports-[backdrop-filter]:bg-base-100/40", // fallback-safe
  "transition-all",
  "duration-300",
  "z-50",
],
  glassDark: "bg-black/40 backdrop-blur-md text-white",
  glassLight: "bg-white/60 backdrop-blur-sm text-black",

  // 🧱 Panels / sidebars
  panel: "bg-base-300/40 border-l border-base-200 shadow-inner",

  // 🧪 Debug / test
  debug: "bg-red-100 border border-red-500 text-red-800",
};
