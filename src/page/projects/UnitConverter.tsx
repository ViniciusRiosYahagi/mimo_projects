import { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/UnitConverter.module.scss"

export default function UnitConverter() {
  
  const [inputValue, setInputValue] = useState<number>(0)
  const [selectValue, setSelectValue] = useState<string>("op1")
  const [result, setResult] = useState<number>(0)

  const convert = () => {
    if (selectValue === "op1") {
      setResult(inputValue * 1.60934)
    } else if (selectValue === "op2") {
      setResult(inputValue / 1.60934)
    }
  }

  return (
    <Layout
      title="Unit Converter"
      text="In this project i learned how to use conditional like if else or else if and how use <select> element."
      next="/projects/3"
    >
      <section className={styles.card_div}>
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(String(e.target.value))}
          >
            <option value="op1">Milhas para Quilômetros</option>
            <option value="op2">Quilômetros para Milhas</option>
          </select>
          <button onClick={convert}>Converter</button>
        </div>
        <h5>Resultado {result ?? 0}</h5>
      </section>
    </Layout>
  );
}
