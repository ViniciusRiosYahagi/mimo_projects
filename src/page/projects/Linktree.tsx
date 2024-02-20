import styles from "../../../styles/Linktree.module.scss"
import Layout from "../../Components/Layout/Layout";

export default function Linktree() {
  
  return (
    <Layout
      title="Linktree"
      text="This is the first project in Mimo. Here I learned how to use an element <a> with the attribute href, and I also learned some CSS stylings."
      next="/projects/2"
    >
      <section className={styles.card_div}>
        <img
          className={styles.profile_image}
          src="https://avatars.githubusercontent.com/u/136207802?v=4"
          alt="persona"
        />
        <h1 className={styles.profile_name}>Vinicius Rios</h1>
        <h3>Aspiring Software Developer</h3>
        <p>Welcome to my page!</p>
        <div className={styles.profile_info_div}>
          <a
            className={styles.profile_link}
            href="https://github.com/ViniciusRiosYahagi"
            target="_blank"
          >
            Github
          </a>
          <a
            className={styles.profile_link}
            href="https://www.linkedin.com/in/vinicius-rios-350647280/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </section>
    </Layout>
  )
}