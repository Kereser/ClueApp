import React from 'react'
import Home from './components/Home'
import TableGame from './components/TableGame'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

window.onbeforeunload = function (e) {
  console.log(e)
  return 'Texto de aviso'
}

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/game" component={TableGame} /> */}
          <Route path="/Game" element={<TableGame />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
