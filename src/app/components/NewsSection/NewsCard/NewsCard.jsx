import Image from "next/image";
import styles from "./NewsCard.module.css";
import Link from "next/link";

const NewsCard = ({ imgUrl, headline, description, id }) => {
  return (
    <section className={styles.cardContainer}>
      <figure className={styles.imgDiv}>
        <Image
          src={imgUrl}
          alt=""
          size="max-width: 100%"
          fill={true}
          className={styles.imgStyle}
        />
      </figure>
      <div className={styles.newsCardText}>
        <Link href={`/news/${id}`}>
          <h2 className={styles.headline}>{headline}</h2>
        </Link>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default NewsCard;
