import styles from "./MagazineAndFiveMins.module.css";
import Magazine from "./Magazine/Magazine";
import FiveMinsWith from "./FiveMinsWith/FiveMinsWith";

export default function MagazineAndFiveMins() {
  return (
    <section className={styles.MagazineAndFiveMinsContainer}>
      <Magazine />
      <FiveMinsWith />
    </section>
  );
}
