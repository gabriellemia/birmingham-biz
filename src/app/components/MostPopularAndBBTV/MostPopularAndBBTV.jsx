import styles from "./MostPopularAndBBTV.module.css";
import MostPopular from "./MostPopular/MostPopular.jsx";
import BBTV from "./BBTV/BBTV.jsx";

export default function MostPopularAndBBTV() {
  return (
    <section className={styles.MostPopularAndBBTVContainer}>
      <MostPopular />
      <BBTV />
    </section>
  );
}
