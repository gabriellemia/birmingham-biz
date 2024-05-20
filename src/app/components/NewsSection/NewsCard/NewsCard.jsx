import Image from "next/image";
import styles from "./NewsCard.module.css";

const NewsCard = ({ imgUrl, headline, description }) => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.imgDiv}>
        <Image
          src={imgUrl}
          alt={headline}
          size="max-width: 100%"
          fill={true}
          className={styles.imgStyle}
        />
      </div>
      <div className={styles.newsCardText}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default NewsCard;
