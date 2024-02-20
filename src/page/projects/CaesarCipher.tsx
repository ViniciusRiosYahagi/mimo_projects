import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/CaesarCipher.module.scss"

export default function CaesarCipher() {
  const [inputValue, setInputValue] = useState<number>(1)
  const [inputText, setInputText] = useState<string>("")
  const [result, setResult] = useState<string>("")

  useEffect(() => {
    const caesarCipher = () => {
      setResult(inputText.replace(/[a-zA-Z]/g, (letter) => {
        const base = letter < "a" ? 65 : 97
        return String.fromCharCode(((letter.charCodeAt(0) - base + inputValue) % 26) + base)
      }))
    }
    caesarCipher()
  }, [inputValue, inputText])

  return (
    <Layout
      title="Caesar Cipher"
      text="This project made me scratch my head because I had never heard about the Caesar Cipher before, but it was good because I learned about ASCII."
      next="/projects/10"
    >
      <section className={styles.card_div}>
        <h1>Caeser Cipher Translator</h1>
        <div>
          <label htmlFor="shift">Shift (1-25):</label>
          <input id="shift" type="number" value={inputValue} min={0} max={25} onChange={(e) => setInputValue(Number(e.target.value))} />
        </div>

        <div>
          <label htmlFor="text">Enter your text:</label>
          <textarea id="text" value={inputText} onChange={(e) => setInputText(String(e.target.value))} ></textarea>
        </div>

        <h3>Translated Text:</h3>
        <div className={styles.result_div}>
          <p>{result}</p>
        </div>
      </section>
    </Layout>
  )
}