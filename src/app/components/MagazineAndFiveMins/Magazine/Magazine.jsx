import styles from "./Magazine.module.css";
import MagazineCard from "./MagazineCard/MagazineCard";
import Story from "./Story/Story";

const dummyData = [
  {
    id: "1",
    magazineCover: "/cover1.png",
    date: "Mar/Apr 2024",
    topStories: [
      {
        title: "Title 1",
        description: "This provides a short summary description of the title.",
      },
      {
        title: "Title 2",
        description: "This provides a short summary description of the title.",
      },
      {
        title: "Title 3",
        description: "This provides a short summary description of the title.",
      },
    ],
  },
  {
    id: "2",
    magazineCover: "/cover2.png",
    date: "Jan/Feb 2024",
    topStories: [
      {
        title: "Title 1",
        description: "This provides a short summary description of the title.",
      },
      {
        title: "Title 1",
        description: "This provides a short summary description of the title.",
      },
      {
        title: "Title 1",
        description: "This provides a short summary description of the title.",
      },
    ],
  },
  {
    id: "3",
    magazineCover: "/cover3.png",
    date: "Nov/Dec 2024",
    topStories: [
      {
        title: "Title 1",
        description: "This provides a short summary description of the title.",
      },
      {
        title: "Title 1",
        description: "This provides a short summary description of the title.",
      },
      {
        title: "Title 1",
        description: "This provides a short summary description of the title.",
      },
    ],
  },
];

export default function Magazine() {
  return (
    <div className={styles.MagazineContainer}>
      <h1 className={styles.h1}>Magazine</h1>
      <div className={styles.cardContainer}>
        {dummyData.map((magazine) => {
          return (
            <MagazineCard
              key={magazine.id}
              imgUrl={magazine.magazineCover}
              date={magazine.date}
            />
          );
        })}
      </div>
      <div className={styles.stories}>
        <h2 className={styles.topStoriesHead}>Top Stories</h2>
        {dummyData[0].topStories.map((story) => {
          return (
            <Story
              key={story.title}
              title={story.title}
              description={story.description}
            />
          );
        })}
      </div>
      <h2 className={styles.archive}>View the archive</h2>
    </div>
  );
}
