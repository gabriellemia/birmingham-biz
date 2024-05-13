import styles from "./page.module.css";
import Image from "next/image";
import MostPopularAside from "../components/MostPopularAside/MostPopularAside";
import ChangingAd from "../components/ChangingAd/ChangingAd";

export default function Story() {
  // Create array of images
  // Map over the array and add timer functionality

  return (
    <>
      <main className={styles.maincontainer}>
        <article>
          <h1 className={styles.articlehead}>Homebuilder celebrates 30 years</h1>
          <hr className={styles.mainhr}></hr>
          <p className={styles.maindescription}>
            Burntwood-based homebuilder Cameron Homes has launched a 12-month calendar of celebrations to mark 30 years
            of building homes across the Midlands.
          </p>
          <div className={styles.imagecontainer}>
            <Image src="/ianburns.png" fill={true} className={styles.image} sizes="max-width: 100%" alt="Picture of Ian Burns" priority={true} />
          </div>
          <p>
            Cameron Homes was set up by Ian Burns in 1994, with the backing of Tara Group owner Noel Sweeney, with its
            first two developments - Meadow View in Doveridge and Rake End in Hill Ridware, Rugeley - launching for sale
            in early 1995. Since then, Cameron Homes has delivered over 130 developments across the region.
          </p>
          <br />
          <p>
            Cameron Homes has won many awards for not only the quality homes it has built, but also for the culture and
            ethos it has created for its 100-strong workforce, including the highly-regarded Great Places to Work award
            and multiple NHBC Pride in the Job awards.
          </p>
          <br />
          <p>
            The homebuilder, which is part of Tara Group, is well known for the support it provides to local charities,
            projects and initiatives through The Noel Sweeney Foundation - Tara Groups charitable trust, which was
            founded in memory of Noel Sweeney.
          </p>
          <br />
          <p>
            Celebrations for the 30th anniversary begin with events at current developments including Amber Grove in
            Kirk Langley, Sutton Park Grange in Kidderminster and Eaton Grange in Swadlincote. They will be followed by
            a 12-month programme of events, initiatives and charitable projects in the local communities that Cameron
            Homes operates in.
          </p>
          <br />
          <p>
            Ian Burns, founder and director at Cameron Homes, said: Its been a fantastic 30 years during which weve seen
            remarkable growth at Cameron Homes. Im proud of everything that weve achieved the ambitious projects weve
            delivered, the team weve grown and the culture weve created in the business.
          </p>
          <br />
          <p>
            Weve experienced and seen so many changes in the housing market including the introduction of new
            technology, the evolving wants and needs of customers and the increasing demand for sustainable and
            environmentally friendly properties, but one thing has remained the same for us our aim to deliver
            high-quality homes for our customers in beautiful and desirable locations.
          </p>
          <br />
          <p>
            Guy Bebbington, managing director at Cameron Homes, said: At Cameron Homes, our values family, pride,
            passion and ambition - are at the heart of everything we do. This incredible milestone provides a great
            opportunity to reflect on the achievements of the whole team at Cameron Homes, past and present, and weve
            got a big programme in place to celebrate our 30th year.
          </p>
          <br />
          <p>
            It also presents the opportunity to look ahead to the future and with many projects in the pipeline across
            the East and West Midlands, we look forward to continuing to deliver quality homes for our customers for
            many years to come.
          </p>
        </article>
        <aside>
          <ChangingAd images={[
            {src: "/1663_1.jpg", url: "https://www.efgha.com/"}, 
            {src: "/1663_2.jpg", url: "https://www.lokiwine.co.uk/"}, 
            {src: "/1663_4.gif", url: "https://ecapital.com/en-gb/"}
            ]} 
          />
          <div className={styles.mostpopularsection}>
            <h2 className={styles.mostpopularhead}>Most Popular</h2>
            <hr className={styles.mostpopularhr}></hr>

            <MostPopularAside
              image="/mostpopular1.png"
              heading="New face joins corporate finance team"
              subheading="Claire has 25 years of experience"
            />
            <MostPopularAside
              image="/mostpopular2.png"
              heading="Disputes partner joins team"
              subheading="More than a decade of experience"
            />
            <MostPopularAside
              image="/mostpopular3.png"
              heading="City council lots under the hammer"
              subheading="Auction set for May 16"
            />
          </div>
        </aside>
      </main>
    </>
  );
}
