import Image from "next/image";
import styles from "./page.module.css";
import NewsSection from "./components/NewsSection/NewsSection";
import MostPopularAndBBTV from "./components/MostPopularAndBBTV/MostPopularAndBBTV.jsx";
import FeaturesAndInsights from "./components/FeaturesAndInsights/FeaturesAndInsights";
import MagazineAndFiveMins from "./components/MagazineAndFiveMins/MagazineAndFiveMins";

export default function Home() {
  return (
    <main className={styles.main}>
      <NewsSection />
      <MostPopularAndBBTV />
      <FeaturesAndInsights />
      <MagazineAndFiveMins />
    </main>
  );
}
