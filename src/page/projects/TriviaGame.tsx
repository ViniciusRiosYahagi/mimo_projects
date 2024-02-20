import { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/TriviaGame.module.scss"

export default function TriviaGame() {
  
  const [index, setIndex] = useState<number>(0)
  const [hits, setHits] = useState<number>(0)

  const analyzeAnwser = (answer: string) => {
      if(answer === data[index].answer) {
        setHits((prevHits) => prevHits + 1)
      }
      setIndex((prevIndex) => prevIndex + 1)
  }

  const restartGame = () => {
    setIndex(0)
    setHits(0)
  }

  const data = [
    {
      title: "What's the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      title: "Who painted the Mona Lisa?",
      choices: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
      answer: "Da Vinci",
    },
  ]

  return (
    <Layout
      title="Trivia Game"
      text="Trivia Game is my second game project on Mimo. I learned about arrays with objects and how to manipulate them."
      next="/projects/8"
    >
      <section className={styles.card_div}>
        <div className={styles.game_container}>
            <h1>Trivia Game</h1>
            {index < data.length ? (
              <>
              <h2>{data[index].title}</h2>
              <div>
                {data[index].choices.map((item, index) => (
                  <button onClick={() => analyzeAnwser(item)} key={index}>{item}</button>
                ))}
              </div>
              </>
            ) : (
              <>
              <p>{`You scored ${hits} out of ${data.length}`}</p>
              <button onClick={restartGame}>Restart</button>
              </>
            )
          }
        </div>
      </section>
    </Layout>
  )
}