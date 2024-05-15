import React from "react";
import Image from "next/image";
import styles from "./FeaturesAndAnalysis.module.css";



const FeaturesCardAside = ({ imgUrl, featureHeadline, featureDescription }) => {
  return (
    <section className={styles.featureCardAside}>
      <Image
        src={imgUrl}
        alt={featureHeadline}
        width={180}
        height={140}
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
    </section>
  );
};

export default FeaturesCardAside;
