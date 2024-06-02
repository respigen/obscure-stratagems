import styles from "./page.module.css";
import CardContainer from "./cards/card-container";
import { prefersReducedMotion } from "./globals";

export default function Home() {
  return (
    <main className={styles.main}>
      <CardContainer
        prefersReducedMotion={prefersReducedMotion}
      ></CardContainer>
    </main>
  );
}
