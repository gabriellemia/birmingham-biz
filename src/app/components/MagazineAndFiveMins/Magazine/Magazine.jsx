import styles from "./Magazine.module.css";
import MagazineCard from "./MagazineCard/MagazineCard";

export default function Magazine() {
  return (
    <div className={styles.MagazineContainer}>
      <h1 className={styles.h1}>Magazine</h1>
      <div className={styles.cardContainer}>
        <MagazineCard />
        <MagazineCard />
        <MagazineCard />
      </div>
      <div className={styles.stories}>
        <h2 className={styles.topStoriesHead}>Top Stories</h2>
        <div className={styles.story}>
          <h3 className={styles.h3}>Story Title 1</h3>
          <p className={styles.storyDescription}>Some description goes here. More lines.</p>
        </div>
        <div className={styles.story}>
          <h3 className={styles.h3}>Story Title 2</h3>
          <p className={styles.storyDescription}>Some description goes here. More lines.</p>
        </div>
        <div className={styles.story}>
          <h3 className={styles.h3}>Story Title 3</h3>
          <p className={styles.storyDescription}>Some description goes here. More lines.</p>
        </div>
      </div>
      <h2 className={styles.archive}>View the archive</h2>
    </div>
  );
}
