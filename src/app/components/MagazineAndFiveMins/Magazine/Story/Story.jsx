import styles from "./Story.module.css";

export default function Story({ title, description }) {
  return (
    <div className={styles.story}>
      <h3 className={styles.h3}>{title}</h3>
      <p className={styles.storyDescription}>{description}</p>
    </div>
  );
}
