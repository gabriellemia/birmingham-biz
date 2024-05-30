import styles from "./UnderConstruction.module.css";
import Link from "next/link";

export default function UnderConstruction(props) {
  return (
    <section className={styles.newspage}>
      <iframe
        className={styles.animation}
        src="https://lottie.host/embed/1dd87f5b-567d-4a45-9e08-acdceeb897e6/nWBJkQcPwg.json"
        title="Animation"
        role="img"
        aria-label="Lively animation showing builder painting a wall"
        loading="lazy"
      ></iframe>
      {props.section && props.number ? (
        <Link className={styles.storyLink} href={`/${props.section}/${props.number}`}><h3>View the latest {props.title} story</h3></Link>
      ) : null}
    </section>
  );
}
