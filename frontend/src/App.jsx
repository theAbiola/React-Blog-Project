import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </>
  )
}

export default App
