import Header from "../Components/Header/Header";
import styles from "../../styles/Home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.home_div}>
        <div className={styles.home_content}>
          <h1>My History With Mimo</h1>
          <p>
            It's October 2022, and I decided to do something different, learn
            programming. However, my job was very exhausting, and I didn't have
            much time after finishing work. While browsing on my cell phone, I
            found an application called Mimo, which presented me with a good
            proposition the ability to study from wherever I was, using just 15
            or 30 minutes. So, I downloaded it, and since then, I have been
            continuing to learn programming. It's an excellent app. I am not
            being sponsored by the Mimo this is just a statement about my
            beginnings in programming.
          </p>
          <br />
          <h5>
            All projects in Mimo are built solely using HTML, JavaScript, and
            CSS except the last project, so I converted it to React and TypeScript.
          </h5>
          <Link to="/projects/1" className={styles.home_link}>
            Start
          </Link>
        </div>
      </main>
    </>
  );
}
