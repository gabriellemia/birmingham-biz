import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MagazineCard.module.css";
import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function MagazineCard({ imgUrl, date }) {
  return (
    <div className={styles.MagazineCardContainer}>
      <Image src={imgUrl} alt={date} width={155} height={215} className={styles.imgStyle} />
      <div className={styles.dateDiv}>
        <p className={styles.dateText}>{date}</p>
        <FontAwesomeIcon
          icon={faDownload}
          className={styles.faDownload}
          aria-hidden={true}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
