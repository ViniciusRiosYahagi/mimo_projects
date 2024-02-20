import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/PixelPaws.module.scss"


class Pet {
  id: number
  pet: any
  fedLevel: number

  constructor(id: number, pet: any) {
    this.id = id
    this.pet = pet
    this.fedLevel = 100
  }

  decreaseFedLevel() {
    this.fedLevel -= 7

    if (this.fedLevel < 0) {
      this.fedLevel = 0
      this.pet = "💀"
    }
    if (this.fedLevel > 100) {
      this.fedLevel = 100
    }
  }

  feed(amount: number) {
    this.fedLevel += amount
  }
}

export default function PixelPaws() {
  const [pet1, setPet1] = useState(new Pet(1, "😺"))

  useEffect(() => {
    if (pet1.fedLevel > 0) {
      const interval = setInterval(() => {
        setPet1((prevPet) => {
          const updatedPet = new Pet(prevPet.id, prevPet.pet)
          updatedPet.fedLevel = prevPet.fedLevel
          updatedPet.decreaseFedLevel()
          return updatedPet
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [pet1])

  return (
    <Layout
      title="Pixel Paws"
      text="This project taught me about JavaScript classes."
      next="/projects/13"
    >
      <section className={styles.card_div}>
        <article className={styles.title_div}>
          <h2>Pixel Paws</h2>
        </article>

        <article className={styles.pets_contents_div}>
          <div className={styles.pet_div} key={pet1.id}>
            <span className={styles.pet}>{pet1.pet}</span>
            <p>{pet1.fedLevel === 0 ? "Dead" : `Saturation Level: ${pet1.fedLevel}`}</p>
          </div>
        </article>

        <article className={styles.food_div}>
          <div className={styles.food} onClick={() => pet1.feed(12)}>
            🥩
          </div>
        </article>
      </section>
    </Layout>
  )
}
