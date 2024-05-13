import styles from './page.module.css'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className={styles.backgroundContainer}>
    <h1 className={styles.mainTitle}>Contact Us</h1>
    <main className={styles.mainPage}>
    <p className={styles.contactText}>Birmingham Business is an editorially-led magazine and we are keen to hear from you, though the inclusion or articles or comment columns cannot be guaranteed and is always at the Editor’s discretion.</p>
    
    <form className={styles.contactForm}>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
      <label for="email">Email</label>
<input type="email" id="email" name="email"></input>
<label for="subject">Subject</label>
<select name="select" id="issue">
  <option value="dropdown">Select...</option>
  <option value="editor">Editor</option>
  <option value="webContent">Website Content</option>
  <option value="advert">Advertising</option>
  <option value="general">General Enquiries</option>
  <option value="other">Other</option>
</select>
<label from="message">Message</label>
<textarea name="message" rows="10" cols="50">
</textarea>
      <input type="submit" value="Submit" />
    </form>
    
    </main>
    <Image className={styles.contactImage}
          src="/birmingham_background.svg"
          width={1440} height={556}
          alt="Birmingham Cityscape"
      />
    </div>
    
  )
}
