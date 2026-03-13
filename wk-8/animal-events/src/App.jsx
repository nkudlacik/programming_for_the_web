import { useState } from 'react'
import './App.css'
import { Animal } from './components/Animal'

function App() {
  const animalTypesArray = ["dog", "llama", "raccoon", "snake"];
  const [focusAnimal, setFocusAnimal] = useState("");
  const [animalTypes, setAnimalTypes] = useState(animalTypesArray);
  function deleteAnimal(animal) {
    const animalsWithoutAnimal = animalTypes.filter((animalLoopVar) => {
      return animalLoopVar !== animal;
    })
    setAnimalTypes(animalsWithoutAnimal);
  };

  return (
    <>
      <h1>Animal Types</h1>
      <h2>Focus On: {focusAnimal}</h2>

      {animalTypes.map((animal, index) => {
        return <Animal
            key={index}
            animalName={animal}
            focusSetter={setFocusAnimal}
            deleteAnimal={deleteAnimal} />
      })}

<hr />
<button onClick={() => {
  setAnimalTypes(animalTypesArray);
  }}>Reset</button>
    </>
  );
}

export default App;