import { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "../../../styles/Gallery.module.scss"

export default function Gallery() { 

  const [modal, setModal] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string>("")
  
  const data: {image: string, id: number}[] = [
    { image: "https://mimo.app/i/whispurr.png", id: 1 },
    { image: "https://mimo.app/i/babaganoosh.png", id: 2 },
    { image: "https://mimo.app/i/nacho.png", id: 3 },
  ]

  const openModal = (image: any) => {
    setSelectedImage(image)
    setModal(true)
  }

  const closeModal = () => {
    setModal(!modal)
  }
  return (
    <Layout
      title="Gallery"
      text="Here are my first modal."
      next="/projects/6"
    >
      <section className={styles.card_div}>
        <h1>Welcome To My Gallery</h1>
        <div>
          { data.map((item,index) => 
            (
              <img 
                className={styles.gallery_image}
                src={item.image} 
                alt={item.image} 
                key={index} 
                onClick={() => openModal(item.image)}
              />
            )
          )}
        </div>
        <p>Select an image to view it in full-screen mode.</p>
        { modal && 
          (
            <div className={styles.gallery_overlay} onClick={closeModal}>
              <div className={styles.gallery_modal}>
                <img className={styles.gallery_modal_image} src={selectedImage} alt={selectedImage} />
              </div>
            </div>
          )
        }
      </section>
    </Layout>
  )
}