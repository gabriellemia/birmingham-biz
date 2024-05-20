"use client";
import { v4 as uuidv4 } from "uuid";
import styles from "../page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import MostPopularAside from "../../components/MostPopularAside/MostPopularAside";
import ChangingAd from "../../components/ChangingAd/ChangingAd";
import { getNewsArticles, getNewsArticleById } from "../../request/request";

const News = ({ params: { slug } }) => {
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [recentArticleOne, setRecentArticleOne] = useState({});
  const [recentArticleTwo, setRecentArticleTwo] = useState({});
  const [recentArticleThree, setRecentArticleThree] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timer = setTimeout(async () => {
          const data = await getNewsArticleById(slug);
          if (data) {
            console.log("Fetched article:", data);
            setArticle(data);
            setLoading(false);
          }
        }, 1500);
        return () => clearTimeout(timer);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsArticles();
        if (data) {
          console.log("Fetched articles:", data);
          setArticles(data);
          console.log(data[data.length - 3]);
          const recentArticleFirst = data[data.length - 1];
          const recentArticleSecond = data[data.length - 2];
          const recentArticleThird = data[data.length - 3];
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

  // Call the getArticles function to retrieve all articles
  // Find the article with the ID number that matches the array length
  // Find the article with the ID number that matches the array length -1
  // Find the article with the ID number that matches the array length -2
  // Locate the image, headline, and subheading

  if (!article) {
    return (
      <section className={styles.loadingscreen}>
        <div className={styles.loader}></div>
      </section>
    );
  }

  const content = article.attributes;

  return (
    <>
      <main className={styles.maincontainer}>
        <article>
          <h1 className={styles.articlehead}>{content.headline}</h1>
          <hr className={styles.mainhr}></hr>
          <p className={styles.maindescription}>{content.description}</p>
          <div className={styles.imagecontainer}>
            <Image
              src={content.image.data.attributes.url}
              fill={true}
              className={styles.image}
              sizes="max-width: 100%"
              alt={
                content.image.data.attributes.alternativeText
                  ? content.image.data.attributes.alternativeText
                  : "Featured image"
              }
              priority={true}
            />
          </div>
          <div className={styles.copyContainer}>
            {content.copy.map((paragraph) => (
              <div key={uuidv4()}>
                <p className={styles.para}>{paragraph.children[0].text}</p>
              </div>
            ))}
          </div>
        </article>
        <aside className={styles.aside}>
          <ChangingAd
            images={[
              content.ad1 && content.ad1.data && content.ad1.data.attributes
                ? { src: content.ad1.data.attributes.url, url: content.ad1Link }
                : null,
              content.ad2 && content.ad2.data && content.ad2.data.attributes
                ? { src: content.ad2.data.attributes.url, url: content.ad2Link }
                : null,
              content.ad3 && content.ad3.data && content.ad3.data.attributes
                ? { src: content.ad3.data.attributes.url, url: content.ad3Link }
                : null,
              content.ad4 && content.ad4.data && content.ad4.data.attributes
                ? { src: content.ad4.data.attributes.url, url: content.ad4Link }
                : null,
              content.ad5 && content.ad5.data && content.ad5.data.attributes
                ? { src: content.ad5.data.attributes.url, url: content.ad5Link }
                : null,
            ].filter((ad) => ad !== null)}
          />
          <div className={styles.mostpopularsection}>
            <h2 className={styles.mostpopularhead}>Most Popular</h2>
            <hr className={styles.mostpopularhr}></hr>

            <MostPopularAside
              src={recentArticleOne?.attributes?.image?.data?.attributes?.url}
              heading={recentArticleOne?.attributes?.headline}
              subheading={recentArticleOne?.attributes?.subheading}
            />

            <MostPopularAside
              src={recentArticleTwo?.attributes?.image?.data?.attributes?.url}
              heading={recentArticleTwo?.attributes?.headline}
              subheading={recentArticleTwo?.attributes?.subheading}
            />
            <MostPopularAside
              src={recentArticleThree?.attributes?.image?.data?.attributes?.url}
              heading={recentArticleThree?.attributes?.headline}
              subheading={recentArticleThree?.attributes?.subheading}
            />
          </div>
        </aside>
      </main>
    </>
  );
};

export default News;
