import styles from "./FeaturesAndInsights.module.css";
import FeaturesAndAnalysis from "./FeaturesAndAnalysis/FeaturesAndAnalysis";
import Insights from "./Insights/Insights";

export default function FeaturesAndInsights() {
  return (
    <section className={styles.featuresAndInsightsContainer}>
      <FeaturesAndAnalysis />
      <Insights />
    </section>
  );
}
