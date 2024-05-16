"use client";
import { v4 as uuidv4 } from "uuid";
import styles from "../page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import MostPopularAside from "../../components/MostPopularAside/MostPopularAside";
import ChangingAd from "../../components/ChangingAd/ChangingAd";
import { getArticles, getArticleById } from "../../request/request";

const Story = ({ params: { slug } }) => {
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [recentArticleOne, setRecentArticleOne] = useState({});
  const [recentArticleTwo, setRecentArticleTwo] = useState({});
  const [recentArticleThree, setRecentArticleThree] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticleById(slug);
        if (data) {
          console.log("Fetched article:", data);
          setArticle(data);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticles();
        if (data) {
          console.log("Fetched articles:", data);
          setArticles(data);

          const recentArticleFirst = data.filter(
            (obj) => obj.id === data.length
          );
          const recentArticleSecond = data.filter(
            (obj) => obj.id === data.length - 1
          );
          const recentArticleThird = data.filter(
            (obj) => obj.id === data.length - 2
          );
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
    return <p>Loading...</p>;
  }

  const content = article.attributes;

  // console.log("All the articles:", articles);
  // const recentArticle = articles.filter((obj) => obj.id === articles.length);
  // console.log("Most recent article", recentArticle);
  // console.log("Recent article content", recentArticle[0]["attributes"]);

  // console.log("Recent Article:", recentArticleOne);
  // console.log("Recent article content:", recentArticleOne[0]);
  // console.log("Second article attributes:", recentArticleTwo);
  // console.log(
  //   "Recent article headline:",
  //   recentArticleOne[0].attributes.headline
  // );

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
              alt="Picture of Ian Burns"
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
              src={
                recentArticleOne.length > 0 &&
                recentArticleOne[0].attributes &&
                recentArticleOne[0].attributes.image.data.attributes.url
              }
              heading={
                recentArticleOne.length > 0 &&
                recentArticleOne[0].attributes &&
                recentArticleOne[0].attributes.headline
              }
              subheading={
                recentArticleOne.length > 0 &&
                recentArticleOne[0].attributes &&
                recentArticleOne[0].attributes.subheading
              }
            />

            <MostPopularAside
              src={
                recentArticleTwo.length > 0 &&
                recentArticleTwo[0].attributes &&
                recentArticleTwo[0].attributes.image.data.attributes.url
              }
              heading={
                recentArticleTwo.length > 0 &&
                recentArticleTwo[0].attributes &&
                recentArticleTwo[0].attributes.headline
              }
              subheading={
                recentArticleTwo.length > 0 &&
                recentArticleTwo[0].attributes &&
                recentArticleTwo[0].attributes.subheading
              }
            />
            <MostPopularAside
              src={
                recentArticleThree.length > 0 &&
                recentArticleThree[0].attributes &&
                recentArticleThree[0].attributes.image.data.attributes.url
              }
              heading={
                recentArticleThree.length > 0 &&
                recentArticleThree[0].attributes &&
                recentArticleThree[0].attributes.headline
              }
              subheading={
                recentArticleThree.length > 0 &&
                recentArticleThree[0].attributes &&
                recentArticleThree[0].attributes.subheading
              }
            />
          </div>
        </aside>
      </main>
    </>
  );
};

export default Story;
