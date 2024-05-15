import styles from "./FeaturesAndAnalysis.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FeaturesCardAside from "./FeaturesCardAside";




export default function FeaturesAndAnalysis({
  imgUrl,
  featureHeadline,
  featureDescription,
}) {
  return (
    <section className={styles.featuresAndAnalysisContainer}>
      <h1 className={styles.featAndAnalysis}>Features & Analysis</h1>

      <section className={styles.featureCardContainer}>
        <section className={styles.featureCard}>
         
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
          <p className={styles.readMore}>
            <span className={styles.readMoreText}>Read More</span>
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              icon={faArrowRight}
              className={styles.arrowIcon}
              aria-hidden="true" // Hide decorative icons from screen readers
            ></FontAwesomeIcon>
          </p>
        </section>
        <section className={styles.featureAsideContainer}>
          
          <FeaturesCardAside />
          <FeaturesCardAside />
        </section>
      </section>
    </section>
  );
}
