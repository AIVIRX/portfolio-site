import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../sober-tracker/privacy-policy/privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — TaskNow",
  description: "Privacy policy for TaskNow: Simple To-Do List by Maicol Cabreja.",
};

export default function TaskNowPrivacyPolicy() {
  return (
    <main className={styles.page}>
      <nav className={`nav ${styles.navigation}`} aria-label="Main navigation">
        <Link className="brand wordmark" href="/">Maicol<span>Cabreja</span></Link>
        <Link className={styles.back} href="/">Back to home <span aria-hidden="true">↗</span></Link>
      </nav>
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>TaskNow: Simple To-Do List</p>
          <h1>Privacy Policy</h1>
          <p className={styles.date}>Effective November 1, 2026</p>
        </header>
        <div className={styles.content}>
          <p>This Privacy Policy explains how TaskNow: Simple To-Do List (“TaskNow,” “the app,” “we,” “us,” or “our”) handles information. TaskNow is operated by Maicol Cabreja.</p>

          <h2>Information stored on your device</h2>
          <p>TaskNow stores your tasks, task titles, due dates, routines, completion history, app preferences, and achievement progress locally on your device. This information is used to provide the app’s planning, reminder, analytics, and personalization features.</p>
          <p>We do not operate an account system for TaskNow, and we do not transmit your task content, routines, or completion history to our own servers.</p>

          <h2>Notifications</h2>
          <p>If you allow notifications, TaskNow schedules local reminders on your device. A reminder may display a task title and scheduled time. Notification permission is controlled by you in iOS Settings, and you can turn off reminders in the app at any time.</p>

          <h2>Premium purchases</h2>
          <p>TaskNow offers optional Premium access. Payments are processed by Apple. We use RevenueCat to verify Premium access, restore purchases, and present purchase offers.</p>
          <p>RevenueCat may process an anonymous app user identifier, purchase history, device and app information, and paywall interactions to provide those services. TaskNow may also send the last paywall entry point to RevenueCat so we can understand how users reach an offer. We do not send your task content, routines, or completion history to RevenueCat.</p>
          <p>For more information, review <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noreferrer">RevenueCat’s Privacy Policy</a>.</p>

          <h2>Analytics in the app</h2>
          <p>TaskNow’s task analytics are calculated from tasks saved on your device. They are not sent to us as an external analytics service.</p>

          <h2>Data retention and deletion</h2>
          <p>Your locally stored TaskNow data remains on your device until you delete it in the app or uninstall the app. Deleting or reinstalling the app may remove locally stored information, subject to your device and backup settings.</p>
          <p>Purchase records are handled by Apple and RevenueCat under their respective retention practices. Deleting local app data does not cancel a purchase or delete purchase records held by those providers.</p>

          <h2>Your choices</h2>
          <ul>
            <li>Control notification permission through iOS Settings.</li>
            <li>Turn task reminders and reminder sounds on or off in TaskNow.</li>
            <li>Delete local TaskNow data through the app’s data controls or by uninstalling the app.</li>
            <li>Restore eligible Premium purchases through the app’s purchase settings.</li>
          </ul>

          <h2>Children’s privacy</h2>
          <p>TaskNow is not directed to children under 13. We do not knowingly collect personal information from children through the app.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy when TaskNow’s features or data practices change. The current version will always be posted on this page with its effective date.</p>

          <h2>Contact</h2>
          <p>For privacy questions or requests, email <a href="mailto:hello@maicol.me">hello@maicol.me</a>.</p>
        </div>
      </article>
    </main>
  );
}
