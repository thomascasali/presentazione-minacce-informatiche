import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Presentation from './pages/Presentation.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modulo/:moduleId" element={<Presentation />} />
    </Routes>
  )
}

export default App
