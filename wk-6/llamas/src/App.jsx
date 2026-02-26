import './App.css'
import './index.css'

function App() {
  const llamaFacts = [
    "Llamas have a maximum running speed of 40 miles per hour, making them more than twice as fast as the average human.",

    "Llamas' blood has a high hemoglobin content, this availability of oxygen allows them to survive in high altitudes.",

    "Llamas' eye positioning allows them to see 360 degrees around them, which helps them to spot predators from a distance.",

    "Llamas' thick fur not only insulates them during cold months, but it also protects their flesh from animal bites.",

    "Llamas are polygamous animals; males will mate with multiple females in their respective herd and are very territorial towards other males llamas.",

    "Llamas are monogamous animals and this bullet point is a lie for ternary's sake."
  ]

  const monogamy = false;

  return (
    <div>
      <h1>Llama Facts</h1>

      <ul>
        <li>{llamaFacts[0]}</li>
        <li>{llamaFacts[1]}</li>
        <li>{llamaFacts[2]}</li>
        <li>{llamaFacts[3]}</li>
        <li>{monogamy ? llamaFacts[5] : llamaFacts[4]}</li>
      </ul>

    </div>
  )
}

export default App