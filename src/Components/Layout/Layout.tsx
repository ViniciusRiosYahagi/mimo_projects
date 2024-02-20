import { Link } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import styles from "./Layout.module.scss"

type LayoutProps = {
  children: React.ReactNode
  title: string
  text: string
  next: string
}

export default function Layout({ children, title = "title", text = "text", next }: LayoutProps) {
  return (
    <>
      <Header />
      <main>
          <div className={styles.layout_container}>
            <h3 className={styles.project_title}>{title}</h3>
            <div className={styles.project_content}>
              <Card>{children}</Card>
              <Link to={next} className={styles.project_link}>Next</Link>
            </div>
            <p className={styles.project_text}>{text}</p>
          </div>
      </main>
    </>
  );
}
