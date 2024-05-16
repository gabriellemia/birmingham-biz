import styles from "./FeaturesAndInsights.module.css";
import FeaturesAndAnalysis from "./FeaturesAndAnalysis/FeaturesAndAnalysis";
import Insights from "./Insights/Insights";

export default function FeaturesAndInsights() {
  return (
    <div className={styles.featuresAndInsightsContainer}>
      <FeaturesAndAnalysis />
      <Insights />
    </div>
  );
}
