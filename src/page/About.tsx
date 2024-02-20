import Header from "../Components/Header/Header";
import styles from "../../styles/About.module.scss"

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.about_content}>
        <div>
          <h1>About Mimo Projects</h1>
          <p>
            Mimo Projects is a webpage showcasing all the projects I've
            completed throughout the Mimo course.
          </p>

          <h5>
            Mimo course webpage:
            <a href="https://mimo.org" target="_blank">
              Mimo
            </a>
          </h5>

          <h1>Contact</h1>
          <h5>Developed by:<a href="https://www.linkedin.com/in/vinicius-rios-350647280/" target="_blank">Vinicius Rios</a></h5>
          <h5>Email: viniciusrios.x3@gmail.com</h5>
          <h1>Technologies</h1>
          <h5>
            <a href="https://react.dev" target="_blank">React</a>
            <a href="https://sass-lang.com" target="_blank">Sass</a>
            <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a>
          </h5>
        </div>
      </main>
    </>
  );
}
