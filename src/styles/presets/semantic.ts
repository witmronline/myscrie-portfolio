// presets/semantic.ts
// export const containers = {
//   // 🪶 Extra tight container (good for small sections, forms, etc.)
//   "container-xs": [
//     "container",                        // Tailwind's container behavior (responsive breakpoints)
//     "max-w-3xl",                        // Tighter than full xl (about 768px–896px)
//     "mx-auto",
//     "px-4", "sm:px-6", "lg:px-8",       // Clean responsive horizontal padding
//   ].join(" "),

//   // 📦 Standard content container (good for full page sections)
//   "container-sm": [
//     "container",
//     "max-w-screen-xl",                 // Wide but constrained (1280px)
//     "mx-auto",
//     "px-4", "md:px-6", "lg:px-8", "xl:px-12", // Slightly wider padding on large screens
//   ].join(" "),
// };

// presets/containers.ts
// export const containers = {
//   // 📦 Extra small — narrow content (forms, small sections)
//   "container-xs": [
//     "container",
//     "max-w-3xl",
//     "mx-auto",
//     "px-4", "sm:px-6", "lg:px-10", "xl:px-12",
//   ].join(" "),

//   // 📄 Small — most standard article/blog width
//   "container-sm": [
//     "container",
//     "max-w-screen-md", // ~768px
//     "mx-auto",
//     "px-4", "md:px-6", "lg:px-10", "xl:px-14", "2xl:px-20",
//   ].join(" "),

//   // 🧱 Medium — common section width (hero, grids)
//   "container-md": [
//     "container",
//     "max-w-screen-lg", // ~1024px
//     "mx-auto",
//     "px-4", "md:px-6", "lg:px-12", "xl:px-16", "2xl:px-24",
//   ].join(" "),

//   // 🏗️ Large — wider landing page or resource section
//   "container-lg": [
//     "container",
//     "max-w-screen-xl", // ~1280px
//     "mx-auto",
//     "px-4", "md:px-6", "lg:px-14", "xl:px-20", "2xl:px-32",
//   ].join(" "),

//   // 🖥️ XL — maxed layout for modern wide screens
//   "container-xl": [
//     "container",
//     "max-w-screen-2xl", // ~1536px
//     "mx-auto",
//     "px-4", "md:px-8", "lg:px-16", "xl:px-24", "2xl:px-40",
//   ].join(" "),

//   // 🧊 Full — edge-to-edge with padding only
//   "container-full": [
//     "w-full",
//     "px-4", "sm:px-6", "lg:px-8", "xl:px-12", "2xl:px-16",
//   ].join(" "),
// };

// presets/containers.ts
export const containers = {
  // 🟦 Extra small gutters — tight layout (mobile-first sections)
  "container-xs": ["w-full", "px-2", "sm:px-4", "lg:px-6"].join(" "),

  // 🟩 Small gutters — standard blog/article style
  "container-sm": ["w-full", "px-4", "sm:px-6", "lg:px-8", "xl:px-10"].join(
    " ",
  ),

  // 🟨 Medium gutters — good for general layout
  "container-md": ["w-full", "px-6", "sm:px-8", "lg:px-12", "xl:px-16"].join(
    " ",
  ),

  // 🟥 Large gutters — wider breathing room
  "container-lg": ["w-full", "px-8", "sm:px-10", "lg:px-16", "xl:px-24"].join(
    " ",
  ),

  // 🟪 Extra large gutters — landing page sections
  "container-xl": [
    "w-full",
    "px-10",
    "sm:px-14",
    "lg:px-20",
    "xl:px-32",
    "2xl:px-40",
  ].join(" "),

  // 🧊 Full bleed — no padding, edge-to-edge
  "container-full": ["w-full", "px-0"].join(" "),
};

export const semantic = {
  // 🧭 Layout-level tags
  main: [
    "min-h-screen",
    // "pt-[88px] sm:pt-[96px] lg:pt-[104px]",
    "pt-[88px] sm:pt-[108px] md:pt-[128px]", // Enough space under fixed header (80px + 8px buffer)
    "pb-20", // Bottom breathing room (5rem)
    "space-y-10 sm:space-y-14", // Clean vertical rhythm between children
  ].join(" "),

  footer: ["pt-12 pb-16 text-sm text-base-content/70"].join(" "),

  section: ["max-w-screen-xl"].join(" "),

  //   section: "py-12 sm:py-16 lg:py-24 space-y-8",
  article: "prose prose-base max-w-3xl mx-auto py-8 space-y-6",
  aside: "bg-base-200/70 p-4 rounded-xl border border-base-300 shadow-sm",
  nav: "flex items-center justify-between gap-4 px-4 sm:px-6",
  header:
    "fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-md h-16 flex items-center px-4 sm:px-6",

  // 🔠 Headings
  h1: "text-3xl sm:text-4xl font-bold tracking-tight text-base-content",
  h2: "text-2xl sm:text-3xl font-semibold tracking-tight text-base-content",
  h3: "text-xl sm:text-2xl font-semibold text-base-content",
  h4: "text-lg font-medium text-base-content",
  h5: "text-base font-medium text-base-content/80",
  h6: "text-sm font-semibold text-base-content/60",

  // 📄 Paragraph & text
  p: "text-base text-base-content/80 leading-relaxed",
  small: "text-xs text-base-content/60 tracking-wide",
  blockquote: "pl-4 border-l-4 border-base-300 italic text-base-content/70",

  // 🔗 Links
  a: "text-primary hover:underline hover:text-primary-focus transition-colors",
  linkMuted: "text-base-content/70 hover:text-base-content transition-colors",
  buttonLink:
    "inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-focus transition",

  // 📋 Lists
  ul: "list-disc pl-5 space-y-2",
  ol: "list-decimal pl-5 space-y-2",
  li: "text-base-content/80",

  // 🔘 Inputs (basic)
  input: "input input-bordered w-full",
  textarea: "textarea textarea-bordered w-full min-h-[120px]",
  select: "select select-bordered w-full",

  // 🧪 Dev test
//   debugBox: "bg-red-100 text-red-800 border border-red-500 p-2 rounded",
    debugBox: "",

  ...containers,
};
