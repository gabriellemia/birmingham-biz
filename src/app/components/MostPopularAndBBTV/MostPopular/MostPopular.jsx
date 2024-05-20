"use client";

import { useState, useEffect } from "react";
import styles from "./MostPopular.module.css";
import MostPopularCard from "./MostPopularCard/MostPopularCard.jsx";
import { getNewsArticles } from "@/app/request/request";

export default function MostPopular() {
  const [articles, setArticles] = useState([]);
  const [recentArticleOne, setRecentArticleOne] = useState({});
  const [recentArticleTwo, setRecentArticleTwo] = useState({});
  const [recentArticleThree, setRecentArticleThree] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsArticles();
        if (data) {
          console.log("Fetched articles:", data);
          setArticles(data);
          const recentArticleFirst = data[data.length - 1];
          const recentArticleSecond = data[data.length - 2];
          const recentArticleThird = data[data.length - 3];
          console.log("Fetched recent article first", recentArticleFirst);
          setRecentArticleOne(recentArticleFirst);
          setRecentArticleTwo(recentArticleSecond);
          setRecentArticleThree(recentArticleThird);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.MostPopularContainer}>
      <h1 className={styles.h1}>Most Popular</h1>
      <div className={styles.cardContainer}>
        <MostPopularCard
          imgUrl={recentArticleOne?.attributes?.image?.data?.attributes?.url}
          headline={recentArticleOne?.attributes?.headline}
          description={recentArticleOne?.attributes?.subheading}
          key={recentArticleOne?.id}
        />
        <MostPopularCard
          imgUrl={recentArticleTwo?.attributes?.image?.data?.attributes?.url}
          headline={recentArticleTwo?.attributes?.headline}
          description={recentArticleTwo?.attributes?.subheading}
          key={recentArticleTwo?.id}
        />
        <MostPopularCard
          imgUrl={recentArticleThree?.attributes?.image?.data?.attributes?.url}
          headline={recentArticleThree?.attributes?.headline}
          description={recentArticleThree?.attributes?.subheading}
          key={recentArticleThree?.id}
        />
      </div>
    </div>
  );
}
