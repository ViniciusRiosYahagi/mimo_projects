import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/GuessingGame.module.scss"

export default function GuessingGame() {
  
  const [random, setRandom] = useState<number>(() => Math.floor(Math.random() * 100 + 1))
  const [inputValue, setInputValue] = useState<number | undefined>(undefined)
  const [clickable, setClickable] = useState<boolean>(true)
  const [attempts, setAttempts] = useState<number>(5)
  const [hintText, setHintText] = useState<string>("")

  useEffect(() => {
    if(attempts === 0) {
      setHintText(`You have lost. The game will reset automatically. Correct Answer ${random} `)
      setClickable(false)
      
      setTimeout(() => {
        resetGame()
        setClickable(true)
      }, 3000)
    }
  }, [attempts])

  const guessing = () => {
    if (inputValue === random) {
      setHintText("Congratulations, you got it right, The game will reset automatically")
      setClickable(false)

      setTimeout(() => {
        resetGame()
        setClickable(true)
      }, 3000)
      
    } 
    else if (inputValue && inputValue > random) {
      setAttempts((prevAttempts) => prevAttempts - 1)
      setHintText(`Less! ${attempts - 1} remaining.`)
    } 
    else if (inputValue && inputValue < random) {
      setAttempts(((prevAttempts) => prevAttempts - 1))
      setHintText(`High! ${attempts - 1} remaining.`)
    }
  }

  const resetGame = () => {
    setRandom(() => Math.floor(Math.random() * 100 + 1))
    setInputValue(undefined)
    setHintText('')
    setAttempts(5)
  }

  return (
    <Layout
      title="Guessing Game"
      text="This was my first game project using JavaScript. I learned how to use mathematical methods, such as random methods."
      next="/projects/5"
    >
      <section className={styles.card_div}>
      <div className={styles.game_container}>
        <h1>Guessing Game</h1>
        <p>Guess a number between 1 and 100</p>
        <input type="number" value={inputValue || ""} onChange={(e) => setInputValue(Number(e.target.value))} min={1} max={100}/>
        <button onClick={guessing} disabled={!clickable}>
          Submit Guess
        </button>
        <p style={{ color: 'red', fontSize: '18px', marginTop: '10px' }}>{hintText}</p>
      </div>
      </section>
    </Layout>
  )
}