import styles from "./MagazineCard.module.css";
import Image from "next/image";

export default function MagazineCard({ imgUrl, magazineCover }) {
  return (
    <div className={styles.MagazineCardContainer}>
      <Image src={imgUrl} alt={magazineCover} width={188} height={264} />
      <div className={styles.dateDiv}>
        {" "}
        <p className={styles.dateText}>Date</p>
      </div>
    </div>
  );
}
