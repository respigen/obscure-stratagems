import styles from "./page.module.css";
import { texts } from "./text";

export default function Home() {
  const text = texts[Math.floor(Math.random() * texts.length)];

  return (
    <main className={styles.main}>
      <span className={styles.card}>{text}</span>
    </main>
  );
}
