import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/CoffeeShopMenu.module.scss"

export default function CoffeeShopMenu() {
  
  return (
    <Layout
      title="Coffe Shop Menu"
      text="Using display flex isn't always necessary to position elements side by side we also can use float: left and float: right as alternatives."
      next="/projects/4"
    >
      <section className={styles.card_div}>
        <div className={styles.about_div}>
          <h1>Bean & Brew Cafe</h1>
          <h5>Discover our selection of drinks and snacks</h5>
        </div>

        <div className={styles.list_div}>
          <ul>
            <li>Espresso</li>
            <li>Cappuccino</li>
            <li>Latte</li>
            <li>Croissant</li>
            <li>Blueberry Muffin</li>
            <li>Matcha Cookie</li>
          </ul>

          <img src="\image\cappucino.jpg" alt="" />
        </div>
      </section>
    </Layout>
  );
}
