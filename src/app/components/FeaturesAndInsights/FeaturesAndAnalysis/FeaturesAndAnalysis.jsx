import styles from "./FeaturesAndAnalysis.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FeaturesCardAside from "./FeaturesCardAside";
import Link from "next/link";

export default function FeaturesAndAnalysis({
  imgUrl,
  featureHeadline,
  featureDescription,
}) {
  return (
    <section
      className={styles.featuresAndAnalysisContainer}
      aria-labelledby="features-heading"
    >
      <h1 id="features-heading" className={styles.featAndAnalysis}>
        Features & Analysis
      </h1>

      <section className={styles.featureCardContainer}>
        <article className={styles.featureCard} aria-labelledby="feature-title">
          <Image
            src={imgUrl}
            alt={featureHeadline}
            width={320}
            height={270}
            className={styles.imgStyle}
          />
          <section className={styles.featureCardText}>
            <h2 className={styles.featureHeadline}>
              {featureHeadline} title goes here
            </h2>
            <p className={styles.featureDescription}>
              {featureDescription} description here
            </p>
          </section>
          <p className={styles.readMore}
            aria-label="Read more about this feature"
          >
            <Link href={"/story"}className={styles.readMoreLink} >
              <span className={styles.readMoreText}>Read More</span>
              &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.arrowIcon}
                aria-hidden="true"
              ></FontAwesomeIcon>
            </Link>
          </p>
        </article>
        <aside className={styles.featureAsideContainer}>
          <FeaturesCardAside />
          <FeaturesCardAside />
        </aside>
      </section>
    </section>
  );
}
