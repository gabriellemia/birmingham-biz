import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MagazineCard.module.css";
import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MagazineCard({ imgUrl, date, pdfUrl }) {
  return (
    <article className={styles.MagazineCardContainer}>
      <Image
        src={imgUrl}
        alt={`Magazine Cover - ${date}`}
        width={243}
        height={336}
        className={styles.imgStyle}
      />
      <Link href={pdfUrl} passHref legacyBehavior>
        <a
          className={styles.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          download={`magazine-${date}.pdf`}
          aria-label="Download Magazine"
        >
          <button className={styles.dateDiv}>
            <p className={styles.dateText}>{date}</p>
            <FontAwesomeIcon
              icon={faDownload}
              className={styles.faDownload}
              aria-hidden={true}
            ></FontAwesomeIcon>
          </button>
        </a>
      </Link>
    </article>
  );
}
