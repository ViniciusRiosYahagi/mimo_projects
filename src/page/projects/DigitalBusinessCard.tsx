import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/DigitalBusinessCard.module.scss"
export default function DigitalBusinessCard() {
  
  return (
    <Layout
      title="Digital Business Card"
      text="In this project, I learned how to use some Grid properties."
      next="/projects/7"
    >
      <section className={styles.card_div}>
        <div className={styles.contact_card_div}>
          <div className={styles.contact_card_info}>
            <h1>Jane Doe</h1>
            <h3>Web Developer</h3>
            <p>Passionate web developer who loves to create modern websites.</p>
            <h4>Email: jane@mimo.org</h4>
            <h5>Phone: +1 (123) 456-7890</h5>
          </div>
          <div className={styles.contact_card_image}></div>
        </div>
      </section>  
    </Layout>
  )
}