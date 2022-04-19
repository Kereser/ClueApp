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
          <Route path="/Game" element={<TableGame />} />
        </Routes>
      </Router>
    </div>
  )
}

//? Arreglar la vista pq en un lado tiene padding y en el otro no.
//? Arreglar el inicio para q este en la mitad.
//? Funcionalidad del boton para eliminar

export default App
