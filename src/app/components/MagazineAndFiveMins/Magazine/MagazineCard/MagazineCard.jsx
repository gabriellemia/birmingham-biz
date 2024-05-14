import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MagazineCard.module.css";
import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function MagazineCard({ imgUrl, magazineCover }) {
  return (
    <div className={styles.MagazineCardContainer}>
      <Image src={imgUrl} alt={magazineCover} width={188} height={215} />
      <div className={styles.dateDiv}>
        {" "}
        <p className={styles.dateText}>date/date year</p>{" "}
        <FontAwesomeIcon icon={faDownload}
        className={styles.faDownload}
        aria-hidden={true}></FontAwesomeIcon>
      </div>
    </div>
  );
}
