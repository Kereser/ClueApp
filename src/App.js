import React from 'react'
import Home from './components/Home'
// import TableGame from './components/TableGame'
import { Route } from 'wouter'

function App() {
  return (
    <div className="container">
      <Route path="/" component={Home} />
      {/* <Route path="/game" component={TableGame} /> */}
    </div>
  )
}

export default App
