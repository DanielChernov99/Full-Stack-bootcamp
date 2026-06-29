import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Exercise1 from './Components/Exercise1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Exercise1 />
    </>
  )
}

export default App
