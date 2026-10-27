import type { Metadata } from "next";
import Link from "next/link";
import { policyHtml } from "./policy-content";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Sober Streak: Day Counter",
  description: "Privacy policy for Sober Streak: Day Counter by Maicol Cabreja.",
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>
      <nav className={`nav ${styles.navigation}`} aria-label="Main navigation">
        <Link className="brand wordmark" href="/">Maicol<span>Cabreja</span></Link>
        <Link className={styles.back} href="/">Back to home <span aria-hidden="true">↗</span></Link>
      </nav>
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Sober Streak: Day Counter</p>
          <h1>Privacy Policy</h1>
          <p className={styles.date}>Effective October 27, 2026</p>
        </header>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: policyHtml }} />
      </article>
    </main>
  );
}
