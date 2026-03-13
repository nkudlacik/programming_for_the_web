import { useState } from 'react'
import llama from './assets/llama.jpg'
import alpaca from './assets/alpaca.jpg'
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState(llama)

  return (
    <>

      <h1>Camelid Image Comparison</h1>

      <div className="image-frame">
        <img className="current-image" src={currentImage} alt="" />
      </div>  

      <div className="button-container">
        <button onClick={() => {
          setCurrentImage(llama)
        }}>
          Llama
        </button>

        <button onClick={() => {
          setCurrentImage(alpaca)
        }}>
          Alpaca
        </button>
      </div>
    </>
  )
}

export default App