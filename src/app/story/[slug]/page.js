"use client";
// import styles from "./page.module.css";
// import Image from "next/image";
import { useEffect, useState } from "react";
// import MostPopularAside from "../components/MostPopularAside/MostPopularAside";
// import ChangingAd from "../components/ChangingAd/ChangingAd";
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

  return <p>Story page for {slug}</p>;
};

export default Story;

// export default function Story() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getArticleById(id);
//         if (data) {
//           console.log("Fetched article:", data);
//           setArticle(data);
//         }
//       } catch (error) {
//         console.error("Error fetching article:", error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   if (!article) {
//     return <p>Loading...</p>;
//   }

//   return <h1>Story</h1>;
// }

// export default function Story() {
//   const router = useRouter();

//   const [article, setArticle] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const {id } = router.query;
//       if (id) {
//         const data = await getArticleById(id);
//         if (data) {
//           console.log("Fetched article:", data);
//           setArticle(data);
//         }
//       }
//     };
//   fetchData();
//   }, [router.query]);

//   return (
//     <h1>Story</h1>
//   )
// }
