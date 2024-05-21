"use client";
import Link from "next/link";

import styles from "./Magazine.module.css";
import MagazineCard from "./MagazineCard/MagazineCard";
import { useState, useEffect } from "react";
import { getArchive } from "@/app/request/request";

export default function Magazine() {
  const [archive, setArchive] = useState([]);
  const [reducedArchive, setReducedArchive] = useState([]);

  const [itemCount, setItemCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 510) {
        setItemCount(1);
      } else {
        setItemCount(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArchive();
        if (data) {
          console.log("Fetched articles:", data);
          setArchive(data);
          setReducedArchive(data.reverse().slice(0, 2));
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.MagazineContainer}>
      <h1 className={styles.h1}>Magazine</h1>
      <section className={styles.cardContainer}>
        {reducedArchive.slice(0, itemCount).map((magazine) => {
          return (
            <MagazineCard
              key={magazine?.id}
              alt={`Magazine cover for ${magazine?.attributes?.issue}`}
              imgUrl={
                magazine?.attributes?.magazinecover?.data?.attributes?.url
              }
              date={magazine?.attributes?.issue}
              pdfUrl={magazine?.attributes?.magazinePDF?.data?.attributes?.url}
            />
          );
        })}
      </section>
      <section className={styles.archiveDiv} aria-label="View the archive">
        <Link href={"/story"}>
          <h2 className={styles.archive}>View the archive</h2>
        </Link>
      </section>
    </section>
  );
}
