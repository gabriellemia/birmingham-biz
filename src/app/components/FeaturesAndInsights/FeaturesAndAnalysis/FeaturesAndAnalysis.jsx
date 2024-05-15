import styles from "./FeaturesAndAnalysis.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
          <Image src={imgUrl} alt={featureHeadline} width={415} height={310} />
          <section className={styles.featureCardText}>
            <h2 className={styles.featureHeadline}>
              {featureHeadline} title goes here
            </h2>
            <p className={styles.featureDescription}>
              {featureDescription} description here 
            </p>
          </section>
          <p className={styles.readMore}>
        <span className={styles.readMoreText}>Read More</span>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon
          icon={faArrowRight}
          className={styles.arrowIcon}
          aria-hidden="true" // Hide decorative icons from screen readers
        ></FontAwesomeIcon>
      </p>
        </section>
        <section className={styles.featureAsideContainer}>
          <section className={styles.featureCardAside}>
            <Image
              src={imgUrl}
              alt={featureHeadline}
              width={215}
              height={160}
            />
            <section className={styles.featureCardText}>
              <h2 className={styles.featureHeadline}>
                {featureHeadline} title goes here
              </h2>
              <p className={styles.featureDescription}>
                {featureDescription} description here  
              </p>
            </section>
          </section>
          <section className={styles.featureCardAside}>
            <Image
              src={imgUrl}
              alt={featureHeadline}
              width={215}
              height={160}
            />
            <section className={styles.featureCardText}>
              <h2 className={styles.featureHeadline}>
                {featureHeadline} title goes here
              </h2>
              <p className={styles.featureDescription}>
                {featureDescription} description here 
              </p>
            </section>
          </section>
        </section>
      </section>

      {/* <p className={styles.readMore}>
        Read More{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          className={styles.arrowIcon}
          aria-hidden="true" // Hide decorative icons from screen readers
        ></FontAwesomeIcon>
      </p> */}
    </section>
  );
}
