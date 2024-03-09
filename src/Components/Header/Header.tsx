import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_name}>
          <Link to="/" className={styles.options}>
            <h1>
              Mimo<span>Projects</span>
            </h1>
          </Link>
        </div>

        <div className={styles.header_menu}>
          <ul>
            <li>
              <Link to="/projects/1" className={styles.options}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.options}>
                About
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/ViniciusRiosYahagi"
                className={styles.options}
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
