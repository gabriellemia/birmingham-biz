import NewsCard from "./NewsCard/NewsCard";
import styles from "./NewsSection.module.css";

const NewsSection = () => {
  return (
    <section className={styles.newsContainer}>
      <h1 className={styles.h1}>News</h1>
      <section className={styles.newsCardWrapper}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
      {/* <div className={styles.divider}></div> */}
    </section>
  );
};

export default NewsSection;
