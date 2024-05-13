
import Image from 'next/image'
import styles from './NewsCard.css'

const NewsCard = ({imgUrl, headline, description}) => {
  return (
    <section className={styles.cardContainer} >
       <Image src={imgUrl} alt={headline} width={300} height={200}/>
       <h2 className={styles.headline}>{headline} headline title</h2>
        <p className={styles.description}>{description} description/content </p>
      
    </section>
  )
}

export default NewsCard
