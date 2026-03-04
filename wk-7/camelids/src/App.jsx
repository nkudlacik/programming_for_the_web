import './App.css'
import Camelid from "./assets/components/camelids";

function App() {
  const llama = {
    name: "Llama",
    image:"https://pbs.twimg.com/media/FRIZYgKXMAEdOyx.jpg",
    trivia: "Llamas typically weigh between 300-450 pounds, usually standing about 5.5-6 feet tall."
  }

  const alpaca = {
    name: "Alpaca",
    image:"https://cdn.shopify.com/s/files/1/0404/6018/9854/files/max_cb4b7858-b8bd-40e7-85b2-a41dee3516ee_480x480.jpg?v=1591831889",
    trivia: "Alpacas typically weigh between 100-200 pounds, usually standing about 3-4 feet tall."
  }

  return (
  <div>
    <h1>Camelid Stat Comparison</h1>

<Camelid
  name={llama.name}
  image={llama.image}
  trivia={llama.trivia}
/>

<Camelid
  name={alpaca.name}
  image={alpaca.image}
  trivia={alpaca.trivia}
/>

  </div>
  )
};

export default App