import NewsCard from './NewsCard/NewsCard';
import styles from './NewsSection.css';

const NewsSection = () => {
  return (
    <section className={styles.newsContainer}>
    
      <h1>News</h1>
      <section className={styles.newsCardWrapper}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      </section>

    </section>
  )
}

export default NewsSection;
