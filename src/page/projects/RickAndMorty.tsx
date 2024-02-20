import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/RickAndMorty.module.scss"

interface Character {
  name: string
  status: string
  species: string
  image: string
}

export default function RickAndMorty() {

  const [data, setData] = useState<{results: Character[]} | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        setData(data)
        console.log("request successfully")
      }
      catch (error: any) {
        setErrorMessage(error)
        console.log(`Error ${error}`)
      }
    }

    fetchData()
  }, [])

  return (
    <Layout
    title="Rick and Morty"
    text="This application uses the fetch function to integrate with the 'Rick and Morty' public API, displaying information about characters such as image, name, status, and species."
    next="/projects/9"
    >
      <section className={styles.card_div}>
        <h1>Rick and Morty Character Compass</h1>
        {data ? (
          data.results.map((item, index) => (
            <div className={styles.character_card} key={index}>
              <img src={item.image} alt={item.name} />
              <p>Name: {item.name}</p>
              <p>Status: {item.status}</p>
              <p>Species: {item.species}</p>
            </div>
          ))
        ) : (
          <h3>{errorMessage}</h3>
        )}
      </section>
    </Layout>
  )
}