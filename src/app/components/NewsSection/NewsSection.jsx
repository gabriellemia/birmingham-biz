import NewsCard from './NewsCard/NewsCard';
import styles from './NewsSection.css';
import React from 'react';

const NewsSection = () => {
  return (
    <div>
    
      <h1>News</h1>
      <section className={styles.newsContainer}>
      <NewsCard className={styles.newsCard}/>
      <NewsCard className={styles.newsCard}/>
      <NewsCard className={styles.newsCard}/>
             
      </section>
     
    </div>
  )
}

export default NewsSection;
