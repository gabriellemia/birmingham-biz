import Image from "next/image";
import styles from "./page.module.css";
import NewsSection from "./components/NewsSection/NewsSection";
import Story from "./story/page";
import MostPopularAndBBTV from "./components/MostPopularAndBBTV/MostPopularAndBBTV.jsx";
import FeaturesAndInsights from "./components/FeaturesAndInsights/FeaturesAndInsights";
import MagazineAndFiveMins from "./components/MagazineAndFiveMins/MagazineAndFiveMins";

export default function Home() {
  return (
    <div className={styles.pageContainer}>

    <main className={styles.main}>
      {/* <h1>Hello World!</h1> */}
      <NewsSection />
      <MostPopularAndBBTV />
      <FeaturesAndInsights />
      <MagazineAndFiveMins />
    </main>
    </div>
  );
}
