import { useState } from 'react'
import './index.css'
import "./App.css"
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Contact/>
    </>
  )
}

export default App
