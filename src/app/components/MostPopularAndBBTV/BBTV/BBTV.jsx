import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./BBTV.module.css";

const videoUrl = "https://player.vimeo.com/video/889425912?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=88c00148cf#t=";

const handleWatch = ()=>{
  <a href="https://bbtv.live/"></a>
}


export default function BBTV({ episodeNumber, date, description, videoTitle  }) {

  return (
    <section className={styles.BBTVContainer}>
      <h1 className={styles.bbtv}>BBTV</h1>
      
      <iframe
        src={videoUrl}
        title={videoTitle}
        width="675"
        height="365"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <section className={styles.content}>
        <h2 className={styles.episodeTitle} aria-live="polite">Episode 10{episodeNumber}</h2>
        <p className={styles.date}>{date}Friday 1st December, 2023</p>
        <p className={styles.description}>
          {description} Some information about the episode, key stories, key
          guests and things.
        </p>
        <p className={styles.watchNow} onClick={''}>
          Watch now{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.arrowIcon}
            aria-hidden="true" // Hide decorative icons from screen readers
          ></FontAwesomeIcon>
        </p>
      </section>
    </section>
  );
}
