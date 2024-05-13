import Image from "next/image";
import styles from "./NewsCard.module.css";

const NewsCard = ({ imgUrl, headline, description }) => {
  return (
    <section className={styles.cardContainer}>
      <Image src={imgUrl} alt={headline} width={390} height={292} />
      <div className={styles.newsCardText}>
        <h2 className={styles.headline}>{headline} headline title</h2>
        <p className={styles.description}>{description} description/content </p>
      </div>
    </section>
  );
};

export default NewsCard;
