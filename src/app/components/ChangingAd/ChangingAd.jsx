"use client";

import styles from "./ChangingAd.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

const ChangingAd = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <a
      href={currentImage.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Learn more about our product"
    >
      <figure className={styles.imagecontainer}>
        <Image
          src={currentImage.src}
          alt="Advertisement for our product"
          className={styles.image}
          fill={true}
          sizes="max-width: 300px"
        />
      </figure>
    </a>
  );
};

export default ChangingAd;
