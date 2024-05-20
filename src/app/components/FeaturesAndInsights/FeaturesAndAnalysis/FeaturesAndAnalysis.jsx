"use client";

import styles from "./FeaturesAndAnalysis.module.css";
import FeaturesCard from "./FeaturesCard/FeaturesCard.jsx";
import { useState, useEffect } from "react";
import { getFeaturesArticles } from "@/app/request/request";

export default function FeaturesAndAnalysis() {
  const [articles, setArticles] = useState([]);
  const [reducedArticles, setReducedArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeaturesArticles();
        if (data) {
          console.log("Fetched articles:", data);
          setArticles(data);
          setReducedArticles(data.reverse().slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.featuresContainer}>
      <h1 className={styles.h1}>Features & Analysis</h1>
      <div className={styles.cardContainer}>
        {reducedArticles.map((article) => {
          return (
            <FeaturesCard
              imgUrl={article?.attributes?.image?.data?.attributes?.url}
              headline={article?.attributes?.headline}
              description={article?.attributes?.subheading}
              key={article?.id}
              id={article?.id}
            />
          );
        })}
      </div>
    </div>
  );
}
