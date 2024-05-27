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
    <section className={styles.insightsContainer} aria-labelledby="insights-heading">
      <h1 id="insights-heading" className={styles.h1}>Insights</h1>
      <section className={styles.cardContainer}>
        {reducedArticles.map((article) => {
          return (
            <article key={article.id} >
              <InsightsCard
              imgUrl={article?.attributes?.image?.data?.attributes?.url}
              headline={article?.attributes?.headline}
              description={article?.attributes?.subheading}
              key={article?.id}
              id={article?.id}
              />
            </article>
          );
        })}
      </section>
    </section>
  );
}
