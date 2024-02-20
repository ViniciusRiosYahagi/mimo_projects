import { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/ComedianBot.module.scss"


interface Message {
  type: string
  content: string
}

export default function ComedianBot() {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const [messages, setMessages] = useState<Message[]>([])
  
  const data = [
    {
      joke: "What would bears be without bees?",
      answer: "Ears",
      user: "Tell me a joke!",
    },

    {
      joke: "What do elves learn in school?",
      answer: "The elf-abet.",
      user: "Tell me a joke!",
    },

    {
      joke: "Why was the fish's grades bad?",
      answer: "They were below sea level.",
      user: "Tell me a joke!",
    },
  ]

  const tellMeAJoke = () => {
    if (index < data.length) {
      setIsButtonDisabled(true)
      setMessages((prevMessage) => [...prevMessage, {type: "user", content: data[index].user }])
      setMessages((prevMessage) => [...prevMessage, {type: "bot", content: data[index].joke}])

      setTimeout(() => {
        setMessages((prevMessage) => [...prevMessage, { type: "bot", content: data[index].answer }])
        setIsButtonDisabled(false)
      }, 1500);
  
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1)
      }, 2000)
    }
  }

  return (
    <Layout
      title="Comedian Bot"
      text="Was my first bot. I remember how excited I was about this project. It one of my favorite projects at Mimo."
      next="/projects/12"
    >
      <section className={styles.card_div}>
        <div className={styles.title}>
          <h2>Comedian Bot</h2>
        </div>

        <div className={styles.chat}>

          <div className={styles.bot_message} id="bot">
            Hello! I am Comedian Bot, here to make you laugh. Let me think of a
            joke.
          </div>
          {messages.map((message, index) => (
            <div key={index} className={message.type === "bot" ? styles.bot_message : styles.user_message}>
              {message.content}
            </div>
          ))}

          <div className={styles.user_input}>
            <button onClick={tellMeAJoke} disabled={isButtonDisabled}>
              {index > 2 ? "Sorry, I'm out of jokes for now!" : "Tell me a joke!"}
            </button>
          </div>

        </div>
      </section>
    </Layout>
  );
}
