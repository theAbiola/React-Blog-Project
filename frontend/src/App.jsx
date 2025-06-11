import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Create from './components/Create.jsx'
import BlogDetails from './components/BlogDetails.jsx'
import NotFound from './components/NotFound.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
