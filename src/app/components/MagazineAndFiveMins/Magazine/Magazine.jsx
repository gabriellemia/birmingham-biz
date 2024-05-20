"use client";
import Link from "next/link";

import styles from "./Magazine.module.css";
import MagazineCard from "./MagazineCard/MagazineCard";
import { useState, useEffect } from "react";

const dummyData = [
  {
    id: "1",
    magazineCover: "/cover1.png",
    date: "Mar/Apr 2024",
  },
  {
    id: "2",
    magazineCover: "/cover2.png",
    date: "Jan/Feb 2024",
  },
  {
    id: "3",
    magazineCover: "/cover3.png",
    date: "Nov/Dec 2024",
  },
];

export default function Magazine() {
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

  return (
    <section className={styles.MagazineContainer}>
      <h1 className={styles.h1}>Magazine</h1>
      <section className={styles.cardContainer}>
        {dummyData.slice(0, itemCount).map((magazine) => {
          return (
            <MagazineCard
              key={magazine.id}
              alt={`Magazine cover for ${magazine.date}`}
              imgUrl={magazine.magazineCover}
              date={magazine.date}
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
