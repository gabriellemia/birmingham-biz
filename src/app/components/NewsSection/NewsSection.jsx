"use client";

import NewsCard from "./NewsCard/NewsCard";
import styles from "./NewsSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { getNewsArticles } from "@/app/request/request";

const NewsSection = () => {
  const [scroll, setScroll] = useState(0);
  const [itemCount, setItemCount] = useState(10);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [articles, setArticles] = useState([]);
  const [reducedArticles, setReducedArticles] = useState([]);

  const handleClickRight = () => {
    setScroll(scroll + 1);
    let firstItem = reducedArticles[0];
    reducedArticles.shift();
    reducedArticles.push(firstItem);
  };

  const handleClickLeft = () => {
    setScroll(scroll - 1);
    let lastItem = reducedArticles[reducedArticles.length - 1];
    reducedArticles.pop();
    reducedArticles.unshift(lastItem);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const touchDifference = touchStart - touchEnd;

      if (Math.abs(touchDifference) > 50) {
        if (touchDifference > 0) {
          handleClickRight();
        } else {
          handleClickLeft();
        }
      }
    }
    // if (touchStart - touchEnd > 50) {
    //   handleClickRight();
    // } else if (touchEnd - touchStart > 50) {
    //   handleClickLeft();
    // }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 510) {
        setItemCount(10);
      } else {
        setItemCount(10);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsArticles();
        if (data) {
          console.log("Fetched articles:", data);
          setArticles(data);
          setReducedArticles(data.reverse().slice(0, itemCount));
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchData();
  }, [itemCount]);
  return (
    <section className={styles.newsContainer}>
      <h1 className={styles.h1}>News</h1>
      <section
        className={styles.newsCardWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {reducedArticles.map((article) => (
          <NewsCard
            imgUrl={article.attributes.image.data.attributes.url}
            headline={article.attributes.headline}
            description={article.attributes.subheading}
            key={article.id}
            id={article.id}
          />
        ))}
      </section>
      <div className={styles.arrowDiv} onClick={handleClickRight}>
        <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon1} />
      </div>
      <div className={styles.arrowDiv} onClick={handleClickLeft}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowIcon2} />
      </div>
    </section>
  );
};

export default NewsSection;
