export const layout = {
  /**
   * 🧭 Sticky Sidebar (used in blog or docs layout)
   */
  "aside-sticky": [
    "col-span-1 w-full h-fit space-y-10",
    "lg:sticky sticky-section top-header",
  ].join(" "),

  /**
   * 🧱 Section Wrapper — standard page block
   */
  section: [
    "max-w-screen-xl mx-auto",
    "py-6 md:py-10 lg:py-14",
    "px-4 md:px-6 lg:px-8 xl:px-12",
    "space-y-6 md:space-y-8 lg:space-y-10",
  ].join(" "),

  /**
   * 🎯 Hero Section — for feature introductions
   */
  hero: [
    "max-w-screen-xl mx-auto",
    "py-10 md:py-14 lg:py-20",
    "px-4 md:px-6 lg:px-8 xl:px-12",
    "space-y-8 md:space-y-10 lg:space-y-12",
  ].join(" "),

  /**
   * 🧩 Card — reusable blocks (blog, pricing, features)
   */
  card: [
    "rounded-xl",
    "shadow",
    "bg-base-200/60",
    "backdrop-blur",
    "transition-all duration-200",
    "hover:shadow-lg hover:scale-[1.01]",
    "flex flex-col",
  ].join(" "),

  /**
   * 🔳 Panel — smaller UI sections or sidebar blocks
   */
  panel: [
    "border",
    "rounded-lg",
    "p-4 md:p-6",
    "bg-base-100",
    "flex flex-col",
  ].join(" "),

  /**
   * 📢 Banner — announcement, alert, promo
   */
  banner: [
    "bg-accent text-accent-content",
    "px-4 py-3 md:px-6 md:py-4",
    "rounded-lg shadow",
    "text-center",
  ].join(" "),

  /**
   * ⚡️ Call To Action — wide attention area
   */
  cta: [
    "bg-primary text-primary-content",
    "rounded-xl",
    "py-10 md:py-16 lg:py-20",
    "px-4 md:px-6 lg:px-8 xl:px-12",
    "text-center",
    "space-y-6 md:space-y-8",
  ].join(" "),

  /**
   * 🧾 Form — consistent form wrapper
   */
  form: [
    "w-full max-w-2xl",
    "space-y-6",
    "bg-base-100",
    "p-6 md:p-8",
    "rounded-xl shadow",
  ].join(" "),

  /**
   * 🧠 Stack — vertical spacing utility
   */
  stack: [
    "flex flex-col",
    "space-y-4 md:space-y-6 lg:space-y-8",
  ].join(" "),

  /**
   * 📐 Grid Layouts — responsive grid blocks
   */
  "grid-2": [
    "grid gap-6 md:grid-cols-2",
  ].join(" "),

  "grid-3": [
    "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  ].join(" "),

  "grid-4": [
    "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  ].join(" "),

  /**
   * 🖼 Centered — useful for headings, CTA, etc.
   */
  centered: [
    "flex flex-col items-center justify-center text-center",
    "space-y-4 md:space-y-6",
  ].join(" "),

  /**
   * 📦 Container — default width wrapper
   */
  container: ["max-w-screen-xl mx-auto"].join(" "),

  /**
   * 🦶 Footer — often used in dark mode, with padding
   */
  footer: [
    "bg-base-200 text-base-content",
    "pt-10 md:pt-14 lg:pt-20",
    "pb-6 md:pb-8 lg:pb-12",
    "px-4 md:px-6 lg:px-8 xl:px-12",
  ].join(" "),
};
