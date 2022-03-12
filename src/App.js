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
  IconButton,
} from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import ToggleButtons from './components/ToggleButton'
import AddBoxIcon from '@mui/icons-material/AddBox'
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
    [
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
      <HorizontalRuleIcon fontSize="small" />,
    ],
  ])
  const [symb, setSymb] = useState(<HorizontalRuleIcon fontSize="small" />)

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
    newState[x][y] = symb
    setVariable(newState)
    // setVariable()
  }

  const genId = () => {
    return Math.random() * 10000000000
  }

  const handleVote = (position) => {
    return () => {
      setBlock(position)
    }
  }

  const handleChangeSymbol = (symb) => {
    setSymb(symb)
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
        <Table size="small" sx={{ backgroundColor: 'rgba(236,235,236,1)' }}>
          <TableHead sx={{ backgroundColor: 'rgba(215,219,227,1)' }}>
            <TableRow hover>
              <TableCell variant="head">
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: 'rgb(142,95,76,1)' }}
                  endIcon={<AddBoxIcon />}
                  onClick={() => addColumn()}
                >
                  Add
                </Button>
              </TableCell>
              {anexarTablas(variable, 0)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ backgroundColor: 'rgba(29,33,52,1)' }}>
              <TableCell sx={{ color: 'white' }}>Suspects</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Sr. Verdi</TableCell>
              {anexarTablas(variable, 1)}
            </TableRow>
            <TableRow hover>
              <TableCell>Prof. Moradillo</TableCell>
              {anexarTablas(variable, 2)}
            </TableRow>
            <TableRow hover>
              <TableCell>Blanca</TableCell>
              {anexarTablas(variable, 3)}
            </TableRow>
            <TableRow hover>
              <TableCell>Coronel Mostaza</TableCell>
              {anexarTablas(variable, 4)}
            </TableRow>
            <TableRow hover>
              <TableCell>Srita. Escarlata</TableCell>
              {anexarTablas(variable, 5)}
            </TableRow>
            <TableRow hover>
              <TableCell>Sr. Azulino</TableCell>
              {anexarTablas(variable, 6)}
            </TableRow>
            <TableRow sx={{ backgroundColor: 'rgb(142,95,76,1)' }}>
              <TableCell sx={{ color: 'white' }}>Armas</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Cuchillo</TableCell>
              {anexarTablas(variable, 7)}
            </TableRow>
            <TableRow hover>
              <TableCell>Pistola</TableCell>
              {anexarTablas(variable, 8)}
            </TableRow>
            <TableRow hover>
              <TableCell>Cuerda</TableCell>
              {anexarTablas(variable, 9)}
            </TableRow>
            <TableRow hover>
              <TableCell>Pesas</TableCell>
              {anexarTablas(variable, 10)}
            </TableRow>
            <TableRow hover>
              <TableCell>Candelabro</TableCell>
              {anexarTablas(variable, 11)}
            </TableRow>
            <TableRow hover>
              <TableCell>Veneno</TableCell>
              {anexarTablas(variable, 12)}
            </TableRow>
            <TableRow sx={{ backgroundColor: 'rgba(29,33,52,1)' }}>
              <TableCell sx={{ color: 'white' }}>Habitaciones</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Hab. de Huespedes</TableCell>
              {anexarTablas(variable, 13)}
            </TableRow>
            <TableRow hover>
              <TableCell>Comedor</TableCell>
              {anexarTablas(variable, 14)}
            </TableRow>
            <TableRow hover>
              <TableCell>Observatorio</TableCell>
              {anexarTablas(variable, 15)}
            </TableRow>
            <TableRow hover>
              <TableCell>Cocina</TableCell>
              {anexarTablas(variable, 16)}
            </TableRow>
            <TableRow hover>
              <TableCell>Teatro</TableCell>
              {anexarTablas(variable, 17)}
            </TableRow>
            <TableRow hover>
              <TableCell>Spa</TableCell>
              {anexarTablas(variable, 18)}
            </TableRow>
            <TableRow hover>
              <TableCell>Sala</TableCell>
              {anexarTablas(variable, 19)}
            </TableRow>
            <TableRow hover>
              <TableCell>Patio</TableCell>
              {anexarTablas(variable, 20)}
            </TableRow>
            <TableRow hover>
              <TableCell>Vestibulo</TableCell>
              {anexarTablas(variable, 21)}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography component="h2">Symbols:</Typography>
      <ToggleButtons handleChangeSymbol={handleChangeSymbol} />
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
