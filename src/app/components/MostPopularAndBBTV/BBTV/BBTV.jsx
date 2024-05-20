"use client";
import React, { useState, useEffect } from "react";
import { getBbtvEpisodes } from "../../../request/request";
import styles from "./BBTV.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BBTV() {
  const [bbtvEpisode, setBbtvEpisode] = useState({});
  const [videoPlaying, setVideoPlaying] = useState(true);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const episodes = await getBbtvEpisodes();
        console.log(episodes);
        if (episodes && episodes.length > 0) {
          const latestEpisode = episodes[episodes.length -1].attributes;
          setBbtvEpisode({
            link: latestEpisode.link,
            title: latestEpisode.title,
            date: latestEpisode.date,
            description: latestEpisode.description,
          });
        }
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };
    fetchEpisode();
  }, []);


  const handleVideoClick = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <article className={styles.BBTVContainer} aria-labelledby="bbtv-title">
      <h1 id="bbtv-title" className={styles.bbtv}>
        BBTV
      </h1>
      {bbtvEpisode.link && (
        <iframe
          src={bbtvEpisode.link}
          title={`BBTV ${bbtvEpisode.title}`}
          width="525"
          height="315"
          frameborder="0"
          allowFullScreen
          loading="lazy"
          aria-describedby="bbtv-description"
          onClick={handleVideoClick}
        ></iframe>
      )}
    


      <section className={styles.content}>
        {bbtvEpisode.title && (
          <h2 className={styles.episodeTitle} aria-live="polite">
            {bbtvEpisode.title}
          </h2>
        )}
        {bbtvEpisode.date && <p className={styles.date}>{bbtvEpisode.date}</p>}
        {bbtvEpisode.description && (
          <p id="bbtv-description" className={styles.description}>
            {bbtvEpisode.description}
          </p>
        )}

        <p className={styles.watchNow}>
          <a
            href="https://bbtv.live/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch now on BBTV"
            className={styles.watchNowLink}
          >
            <span className={styles.watchNowText}>Watch Now</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={styles.arrowRightIcon}
              aria-hidden="true"
            />
          </a>
        </p>
      </section>
    </article>
  );
}
