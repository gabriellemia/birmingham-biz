"use client";

import styles from "./FiveMinsWith.module.css";
import FiveMinsWithCard from "./FiveMinsWithCard/FiveMinsWithCard.jsx";
import { useState, useEffect } from "react";
import { getFiveArticles } from "@/app/request/request";


export default function FiveMinsWith() {
  const [articles, setArticles] = useState([]);
  const [reducedArticles, setReducedArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFiveArticles();
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
    <section className={styles.FiveMinsWithContainer}>
      <h1 className={styles.h1}>Five Minutes With</h1>
      <section className={styles.cardContainer}>
        {reducedArticles.map((article) => {
          return (
            <FiveMinsWithCard
            imgUrl={article?.attributes?.image?.data?.attributes?.url}
            headline={article?.attributes?.headline}
            description={article?.attributes?.subheading}
            key={article?.id}
            id={article?.id}
            />
          );
        })}
      </section>
    </section>
  );
}
