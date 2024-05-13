import styles from "./page.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles.backgroundContainer}>
      <h1 className={styles.mainTitle}>Contact Us</h1>
      <main className={styles.mainPage}>
        <p className={styles.contactText}>
          Birmingham Business is an editorially-led magazine and we are keen to
          hear from you, though the inclusion of articles or comment columns
          cannot be guaranteed and is always at the Editor’s discretion.
        </p>

        <form className={styles.contactForm}>
          <label for="name">
            Name
            <input className={styles.input} type="text" id="name" name="name" />
          </label>
          <label for="email">
            Email{" "}
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
            ></input>
          </label>
          <label for="subject">
            Subject{" "}
            <select className={styles.input} name="select" id="issue">
              <option value="dropdown">Select...</option>
              <option value="editor">Editor</option>
              <option value="webContent">Website Content</option>
              <option value="advert">Advertising</option>
              <option value="general">General Enquiries</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label from="message">
            Message{" "}
            <textarea
              className={styles.input}
              name="message"
              rows="10"
              cols="50"
            ></textarea>
          </label>
          <button className={styles.submitButton}>Submit</button>
          {/* <input className={styles.submitButton} type="submit" value="Submit" /> */}
        </form>
        <div className={styles.imageContainer}>
          <Image
            src={"/birmingham_background.svg"}
            layout="fill"
            className={styles.contactImage}
          />
        </div>
      </main>
    </div>
  );
}
