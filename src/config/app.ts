import type { SiteConfig } from "@types";

export const siteConfig: SiteConfig = {
  title: "Wit Auria — Anime & Science Scriptwriter",
  author: "Wit Auria",
  siteName: "MyScrie",
  description:
    "Voice-ready scripts for anime lore, mystery storytelling, and science-based content. Crafted for YouTube creators and curious audiences.",
  lang: "en",
  theme: {
    dark: "myscrie-dark",
    light: "myscrie-light",
  },
  siteLogo: "", // update image later
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Myscrie Anime", href: "#myscrie-anime" },
    { text: "Myscrie Science", href: "#myscrie-science" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/WitAuria" },
    { text: "Instagram", href: "https://instagram.com/witAuria" },
    { text: "Email", href: "mailto:witauria@gmail.com" },
  ],
  socialImage: "/og-image.png",
  canonicalURL: "https://myscrie.netlify.app",
};
