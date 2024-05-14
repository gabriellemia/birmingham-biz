import styles from "./MostPopularAndBBTV.module.css";
import MostPopular from "./MostPopular/MostPopular.jsx";
import BBTV from "./BBTV/BBTV.jsx";

export default function MostPopularAndBBTV() {
  return (
    <div className={styles.MostPopularAndBBTVContainer}>
      <MostPopular />
      <BBTV />
    </div>
  );
}
