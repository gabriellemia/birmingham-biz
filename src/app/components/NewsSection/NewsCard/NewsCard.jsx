
import Image from 'next/image'
import styles from './NewsCard.css'
import React from 'react'

const NewsCard = ({imgUrl, newsCardImage, headline, description}) => {
  return (
    <section className={styles.cardContainer} >
       <Image src={imgUrl} alt={newsCardImage} width={300} height={200}/>
       <h2 className={styles.headline}>{headline} headline title</h2>
        <p className={styles.description}>{description} description/content </p>
      
    </section>
  )
}

export default NewsCard
