import type { Metadata } from "next";
import ScrollReveal from "./ScrollReveal";
import "./globals.css";
import "./hero.css";
import "./glance.css";
import "./glance-fix.css";
import "./color-system.css";
import "./footer-icons.css";
import "./hero-icons.css";
import "./footer-linkedin.css";
import "./instagram-icons.css";
import "./social-style.css";
import "./footer-social-fix.css";
import "./footer-instagram.css";
import "./social-sizing.css";
import "./hero-type.css";
import "./typography.css";
import "./avatar.css";
import "./projects.css";
import "./tech-stack.css";
import "./contact.css";
import "./scroll-reveal.css";
import "./wordmark.css";

export const metadata: Metadata = {
  title: "Maicol Cabreja — Product Designer & Developer",
  description: "Portfolio of Maicol Cabreja, creating thoughtful digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}<ScrollReveal /></body>
    </html>
  );
}
