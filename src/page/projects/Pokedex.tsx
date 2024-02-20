import { useEffect, useState } from "react"
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/Pokedex.module.scss"

interface Pokemon {
  name: string
  url: string
}

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    fetchPokemon()
  }, [])

  const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      const data = await response.json()
      setPokemons(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout
      title="Pokedex"
      text="And finally, this is the last project in Mimo, where I start learn about the React framework."
      next="/projects/1"
    >
      <section className={styles.card_div}>
        <div className={styles.title_div}>
          <h2>Pokedex</h2>
        </div>

        <article className={styles.pokemon_div}>
          <h2>Pokemons</h2>
          <ul>
            {pokemons.map((pokemon, index) => 
                (
                  <li key={index}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                    {pokemon.name}
                  </li>
                ))
              }
          </ul>
        </article>
      </section>
    </Layout>
  );
}
