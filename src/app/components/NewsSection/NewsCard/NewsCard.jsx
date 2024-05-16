import Image from "next/image";
import styles from "./NewsCard.module.css";

const NewsCard = ({ imgUrl, headline, description }) => {
  return (
    <section className={styles.cardContainer}>
      <Image src={imgUrl} alt={headline} width={290} height={272} className={styles.imgStyle} />
      <div className={styles.newsCardText}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default NewsCard;
