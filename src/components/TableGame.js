import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Button,
  Typography,
  TextField,
} from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import ToggleButtons from './ToggleButton'
import AddBoxIcon from '@mui/icons-material/AddBox'

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
  const ARMAS = [
    'Cuchillo',
    'Pistola',
    'Cuerda',
    'Pesas',
    'Candelabro',
    'Veneno',
  ]
  const SUSPECTS = [
    'Sr. Verdi',
    'Prof. Moradillo',
    'Blanca',
    'Coronel Mostaza',
    'Srita. Escarlata',
    'Sr. Azulino',
  ]
  const PLACES = [
    'Hab. de Huespedes',
    'Comedor',
    'Observatorio',
    'Cocina',
    'Teatro',
    'Spa',
    'Sala',
    'Patio',
    'Vestibulo',
  ]

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
  }

  const handleVote = (position) => {
    return () => {
      setBlock(position)
    }
  }

  const handleChangeSymbol = (symb) => {
    setSymb(symb)
  }

  function anexarCeldas(Index) {
    let blockCells = []
    for (let i = Index; i < variable.length; i++) {
      for (let j = 0; j < variable[i].length; j++) {
        blockCells.push(
          <TableCell align="center" key={uuidv4()} onClick={handleVote([i, j])}>
            {variable[i][j]}
          </TableCell>,
        )
      }
      return blockCells
    }
  }

  const generateRows = (nameArray, index) => {
    const nRows = []
    for (let i = 0; i < nameArray.length; i++) {
      nRows.push(
        <TableRow hover key={uuidv4()}>
          <TableCell>{nameArray[i]}</TableCell>
          {anexarCeldas(index + i)}
        </TableRow>,
      )
    }
    return nRows
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
              <TableCell>
                <TextField
                  label="P1"
                  contentEditable="true"
                  variant="filled"
                  sx={{ width: 100 }}
                />
              </TableCell>
              {anexarCeldas(0)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ backgroundColor: 'rgba(29,33,52,1)' }}>
              <TableCell sx={{ color: 'white' }}>Suspects</TableCell>
            </TableRow>
            {generateRows(SUSPECTS, 1)}
            <TableRow sx={{ backgroundColor: 'rgb(142,95,76,1)' }}>
              <TableCell sx={{ color: 'white' }}>Armas</TableCell>
            </TableRow>
            {generateRows(ARMAS, 7)}
            <TableRow sx={{ backgroundColor: 'rgba(29,33,52,1)' }}>
              <TableCell sx={{ color: 'white' }}>Habitaciones</TableCell>
            </TableRow>
            {generateRows(PLACES, 13)}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography component="h2">Symbols:</Typography>
      <ToggleButtons handleChangeSymbol={handleChangeSymbol} />
    </>
  )
}

export default TableGame
