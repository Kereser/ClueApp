import React, { useState } from 'react'

import {
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Button,
  Typography,
} from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
// import { styled } from '@mui/material/styles'
// import Paper from '@mui/material/Paper'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ddd',
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: tealColor,
// }))

function TableGame() {
  const [variable, setVariable] = useState([
    ['Confirmed', 'P1', 'P2', 'P3', 'P4'],
    [
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
    ],
    [
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
    ],
    [
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
    ],
    [
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
    ],
  ])

  function addColumn() {
    for (let i = 0; i < variable.length; i++) {
      if (i === 0) {
        const newState = [...variable]
        newState[i].push(`X${variable[i].length}`)
        setVariable(newState)
      } else {
        const newState = [...variable]
        newState[i].push(<HorizontalRuleIcon fontSize="small" />)
        setVariable(newState)
      }
    }
    return variable
  }
  function setBlock(position) {
    const [x, y] = position
    const newState = [...variable]
    newState[x][y] = <ClearIcon />
    setVariable(newState)
    // setVariable()
  }

  const genId = () => {
    return Math.random() * 10000000000
  }

  const handleVote = (position) => {
    return () => {
      console.log(position)
      setBlock(position)
    }
  }

  const handleExtraColumn = () => {
    addColumn()
  }

  function anexarTablas(variable, Index) {
    let blockCells = []
    for (let i = Index; i < variable.length; i++) {
      for (let j = 0; j < variable[i].length; j++) {
        blockCells.push(
          <TableCell align="center" key={genId()} onClick={handleVote([i, j])}>
            {variable[i][j]}
          </TableCell>,
        )
      }
      return blockCells
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: '#77f' }}>
            <TableRow>
              <TableCell variant="head"></TableCell>
              {anexarTablas(variable, 0)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ backgroundColor: '#ff0' }}>
              <TableCell>Suspects</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Verdi</TableCell>
              {anexarTablas(variable, 1)}
            </TableRow>
            <TableRow>
              <TableCell>Mora</TableCell>
              {anexarTablas(variable, 2)}
            </TableRow>
            <TableRow>
              <TableCell>Blanca</TableCell>
              {anexarTablas(variable, 3)}
            </TableRow>
            <TableRow>
              <TableCell>Mostaza</TableCell>
              {anexarTablas(variable, 4)}
            </TableRow>
            <TableRow>
              <TableCell>Escarlata</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Celeste</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: '#f88' }}>
              <TableCell>Armas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cuchillo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pistola</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cuerda</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pesas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Candelabro</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tubo</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: '#3fa' }}>
              <TableCell>Habitaciones</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hab. de Huespedes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Comedor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Observatorio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cocina</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Teatro</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Spa</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sala</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Patio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vestibulo</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography component="h3" variant="h4">
        Symbols:
      </Typography>
      <Button onClick={handleExtraColumn}>Extra Column</Button>
    </>
  )
}

function App() {
  return (
    <Container maxWidth={false}>
      <TableGame />
    </Container>
  )
}

export default App
