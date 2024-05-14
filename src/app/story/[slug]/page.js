"use client";
import { v4 as uuidv4 } from "uuid";
import styles from "../page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import MostPopularAside from "../../components/MostPopularAside/MostPopularAside";
import ChangingAd from "../../components/ChangingAd/ChangingAd";
import { getArticleById } from "../../request/request";

const Story = ({ params: { slug } }) => {
  const [article, setArticle] = useState(null);

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

  if (!article) {
    return <p>Loading...</p>;
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
              { src: "/1663_1.jpg", url: "https://www.efgha.com/" },
              { src: "/1663_2.jpg", url: "https://www.lokiwine.co.uk/" },
              { src: "/1663_4.gif", url: "https://ecapital.com/en-gb/" },
            ]}
          />
          <div className={styles.mostpopularsection}>
            <h2 className={styles.mostpopularhead}>Most Popular</h2>
            <hr className={styles.mostpopularhr}></hr>

            <MostPopularAside
              image="/mostpopular1.png"
              heading="New face joins corporate finance team"
              subheading="Claire has 25 years of experience"
            />
            <MostPopularAside
              image="/mostpopular2.png"
              heading="Disputes partner joins team"
              subheading="More than a decade of experience"
            />
            <MostPopularAside
              image="/mostpopular3.png"
              heading="City council lots under the hammer"
              subheading="Auction set for May 16"
            />
          </div>
        </aside>
      </main>
    </>
  );
};

export default Story;
