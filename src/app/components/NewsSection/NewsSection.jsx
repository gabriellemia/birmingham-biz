import NewsCard from './NewsCard/NewsCard';
import styles from './NewsSection.css';

const NewsSection = () => {
  return (
    <div>
    
      <h1>News</h1>
      <section className={styles.newsContainer}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
             
      </section>
     
    </div>
  )
}

export default NewsSection;
