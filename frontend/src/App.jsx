import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Create from './components/Create.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
