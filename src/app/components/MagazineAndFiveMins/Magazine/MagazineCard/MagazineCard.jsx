import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MagazineCard.module.css";
import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function MagazineCard({ imgUrl, date }) {
  return (
    <article className={styles.MagazineCardContainer}>
      <Image
        src={imgUrl}
        alt={`Magazine Cover - ${date}`}
        width={243}
        height={336}
        className={styles.imgStyle}
      />
      <button className={styles.dateDiv} aria-label="Download Magazine">
        <p className={styles.dateText}>{date}</p>
        <FontAwesomeIcon
          icon={faDownload}
          className={styles.faDownload}
          aria-hidden={true}
        ></FontAwesomeIcon>
      </button>
    </article>
  );
}
