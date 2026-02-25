import './App.css'

function App() {
  const birthYear = 2001;
  const year = 2026;
  const myAge = year - birthYear;
  const canRentCar = myAge >= 25 
    ? "can legally" 
    : "cannot legally";

  return (
    <div>Hello, World! I was born in {birthYear}, so I {canRentCar} rent a car in the state of New Jersey.</div>
      )
}

export default App