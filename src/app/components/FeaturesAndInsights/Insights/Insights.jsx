"use client";

import styles from "./Insights.module.css";
import InsightsCard from "./InsightsCard/InsightsCard";
import { useState, useEffect } from "react";
import { getInsightsArticles } from "@/app/request/request";

export default function Insights() {
const [articles, setArticles] = useState([]);
const [reducedArticles, setReducedArticles] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getInsightsArticles();
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
    <div className={styles.insightsContainer}>
      <h1 className={styles.h1}>Insights</h1>
      <div className={styles.cardContainer}>
        {reducedArticles.map((article) => {
          return (
            <InsightsCard
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
