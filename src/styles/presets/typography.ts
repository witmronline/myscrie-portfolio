export const typography = {
  // 📖 Base text styles
  base: "text-base text-base-content",
  paragraph: "text-base leading-relaxed text-base-content/90",
  small: "text-sm leading-snug text-base-content/70",
  caption: "text-xs text-base-content/60",
  label: "text-sm font-medium text-base-content/80 tracking-wide",
  muted: "text-sm text-base-content/60 italic",

  // 🧾 Headings
  h1: "text-3xl sm:text-4xl font-bold tracking-tight text-base-content",
  h2: "text-2xl sm:text-3xl font-semibold tracking-tight text-base-content",
  h3: "text-xl sm:text-2xl font-semibold text-base-content",
  h4: "text-lg font-medium text-base-content",
  h5: "text-base font-medium text-base-content/80",
  h6: "text-sm font-semibold text-base-content/60",

  // 🎯 Use-case headings
  subheading: "text-lg font-semibold text-base-content",
  hero: "text-3xl md:text-4xl font-bold text-base-content",
  title: "text-2xl font-bold text-base-content",

  // 🧱 Utility text (used in buttons, navs, badges etc.)
  button: "text-sm font-medium text-base-content",
  nav: "text-sm font-semibold uppercase tracking-wide text-base-content/90",
  badge: "text-xs font-semibold text-base-content/80",

  // ✍️ Special text
  blockquote:
    "text-lg italic text-base-content/80 border-l-4 pl-4 border-base-300",
  code: "font-mono text-sm text-base-content bg-base-200 px-1.5 py-0.5 rounded",
} as const;
