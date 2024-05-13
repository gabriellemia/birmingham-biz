import Image from "next/image";
import styles from "./page.module.css";
import NewsSection from "./components/NewsSection/NewsSection";
import Story from "./story/page";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1>Hello World!</h1> */}
      <NewsSection />
    </main>
  );
}
