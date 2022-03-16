import React from 'react'
import Home from './components/Home'
import TableGame from './components/TableGame'
import { Container } from '@mui/material'
import { Route } from 'wouter'

function App() {
  return (
    <Container maxWidth={false}>
      <Route path="/" component={Home} />
      <Route path="/game" component={TableGame} />
    </Container>
  )
}

export default App
