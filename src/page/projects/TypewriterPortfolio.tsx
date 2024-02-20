import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/TypewriterPortfolio.module.scss"

export default function TypewriterPortfolio() {
  return (
    <Layout
      title="Typewriter Portfolio"
      text="This project was built using just HTML and CSS, using elements such as  <progress> , <details> , <summary>."
      next="/projects/11"
    >
      <section className={styles.card_div}>
        <header className={styles.header}>
          <h1>Welcome to Tara's Portfolio</h1>
          <nav>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </nav>
        </header>

        <article className={styles.about} id="about">
          <h2>About Me</h2>
          <img className={styles.profile} src="https://mimo.app/i/tara.png" alt="profile-photo"/>
          <p>
            My name is Tara. I'm an aspiring developer. Besides spending time coding, I love hiking through the woods with my dog, Brutus
          </p>
        </article>

        <article className={styles.skills} id="skills">
          <h2>Skills</h2>
          <div className={styles.skill_item}>
            <label htmlFor="HTML">HTML:</label>
            <progress value="90" max="100"></progress>
            <p>90%</p>
          </div>

          <div className={styles.skill_item}>
            <label htmlFor="CSS">CSS:</label>
            <progress value="75" max="100"></progress>
            <p>75%</p>
          </div>

          <div className={styles.skill_item}>
            <label htmlFor="JS">JS:</label>
            <progress value="50" max="100"></progress>
            <p>50%</p>
          </div>
        </article>

        <article className={styles.projects} id="projects">
          <h2>Projects</h2>
          <details>
              <summary>Caesar Cipher</summary>
              <p>A small project I built for a friend to help exchange secret messages.</p>
              <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Link to project</a>
            </details>

            <details>
              <summary>Rick and Morty Character Compass</summary>
              <p>As a big fan of the show, I created a character compass.</p>
              <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Link to project</a>
            </details>
        </article>
      </section>
    </Layout>
  )
}