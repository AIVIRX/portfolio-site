import type { Metadata } from "next";
import Link from "next/link";
import styles from "../privacy-policy/privacy-policy.module.css";
import contact from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Support — Sober Streak: Day Counter",
  description: "Get help with Sober Streak: Day Counter. Contact Maicol Cabreja for app support, feedback, or privacy questions.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <nav className={`nav ${styles.navigation}`} aria-label="Main navigation">
        <Link className="brand wordmark" href="/">Maicol<span>Cabreja</span></Link>
        <Link className={styles.back} href="/">Back to home <span aria-hidden="true">↗</span></Link>
      </nav>
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Sober Streak: Day Counter</p>
          <h1>Here to help.</h1>
          <p className={contact.intro}>Have a question, found a bug, or have an idea for the app? Get in touch.</p>
          <a className={`primary ${contact.button}`} href="mailto:hello@maicol.me?subject=Sober%20Streak%20Support">Email support <span aria-hidden="true">↗</span></a>
          <p className={contact.email}><a href="mailto:hello@maicol.me">hello@maicol.me</a></p>
        </header>
        <div className={styles.content}>
          <section aria-labelledby="support-details">
            <h2 id="support-details">Help me help you.</h2>
            <p>For technical issues, please include your device model, iOS version, app version, and a short description of what happened. Screenshots are welcome—please leave out any personal information you don’t want to share.</p>
          </section>
          <section aria-labelledby="privacy-questions">
            <h2 id="privacy-questions">Privacy questions?</h2>
            <p>You can use the same email for privacy questions or data requests. Read the <Link href="/sober-tracker/privacy-policy">Privacy Policy</Link> for more information.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
