import Link from "next/link";
import styles from "./Magazine.module.css";
import MagazineCard from "./MagazineCard/MagazineCard";

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
  return (
    <section className={styles.MagazineContainer}>
      <h1 className={styles.h1}>Magazine</h1>
      <section className={styles.cardContainer}>
        {dummyData.slice(0, 2).map((magazine) => {
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
      <section className={styles.archiveDiv}>
        <Link href={'/story'}>
        <h2 className={styles.archive}>View the archive</h2>
      </Link></section>
    </section>
  );
}
