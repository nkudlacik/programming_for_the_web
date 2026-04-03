import {Link, Routes, Route} from 'react-router-dom';
import { Home } from './views/Home';
import { Songs } from './views/Songs'; 
import './App.css'
import musicData from "./assets/music.json";

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<Songs data={musicData} />} />
     </Routes>
    </>
  )
}

export default App
