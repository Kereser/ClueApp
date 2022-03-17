import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useLocation } from 'react-router-dom'
import AddingForm from './AddingForm'
import RegularSelect from './RegularSelect'

function TableGame() {
  const location = useLocation()
  const { names } = location.state
  const arr = new Array(21).fill(new Array(names.length).fill('-'))
  const [variable, setVariable] = useState(arr)
  const [symbs, setSymbs] = useState([])
  const [newSymb, setNewSymb] = useState('')
  const [selectedSymb, setSelectedSymb] = useState('')
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
    const newState = [...variable]
    for (let i = 0; i < variable.length; i++) {
      if (i === 0) {
        names.push({ id: uuidv4(), firstName: `X${names.length}` })
        console.log(names)
        newState[i] = [...newState[i], '-']
      } else {
        console.log(newState)
        newState[i] = [...newState[i], '-']
      }
    }
    setVariable(newState)
    return variable
  }

  const handleVote = (position) => {
    return () => {
      setBlock(position)
    }
  }

  function setBlock(position) {
    const [x, y] = position
    const newRow = variable[x].map((el, index) => {
      if (index === y) {
        return selectedSymb
      }
      return el
    })
    const newVariable = [...variable]
    newVariable[x] = newRow
    setVariable(newVariable)
  }

  const generateRows = (nameArray, index) => {
    const nRows = []
    for (let i = 0; i < nameArray.length; i++) {
      nRows.push(
        <tr key={uuidv4()}>
          <td style={{ width: '100%' }}>{nameArray[i]}</td>
          {anexarCeldas(index)}
        </tr>,
      )
      index++
    }
    return nRows
  }

  function anexarCeldas(Index) {
    let blockCells = []
    for (let x = Index; x < variable.length; x++) {
      for (let y = 0; y < variable[x].length; y++) {
        blockCells.push(
          <td align="center" key={uuidv4()} onClick={handleVote([x, y])}>
            {variable[x][y]}
          </td>,
        )
      }
      return blockCells
    }
  }

  const handleAddSymb = () => {
    setSymbs([...symbs, newSymb])
    console.log(symbs, symbs.length)
    if (symbs.length === 0) {
      console.log('Entro al if')
      setSelectedSymb(newSymb)
    }
    setNewSymb('')
  }

  const handleChange = (e) => {
    console.log('Entro al change de select')
    setSelectedSymb(e.target.value)
  }

  return (
    <div>
      <table className="table table-dark table-striped table-sm">
        <thead>
          <tr>
            <td className="align-middle">
              <button className="btn btn-primary btn-sm" onClick={addColumn}>
                Add
              </button>
            </td>
            {names.map((name) => (
              <td className="align-middle" key={name.id}>
                {name.firstName}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-primary">Suspechosos</td>
            {names.map(() => (
              <td key={uuidv4()} className="table-primary"></td>
            ))}
          </tr>
          {generateRows(SUSPECTS, 0)}
          <tr>
            <td className="table-secondary">Armas</td>
            {names.map(() => (
              <td key={uuidv4()} className="table-secondary"></td>
            ))}
          </tr>
          {generateRows(ARMAS, 6)}
          <tr>
            <td className="table-danger">Habitaciones</td>
            {names.map(() => (
              <td key={uuidv4()} className="table-danger"></td>
            ))}
          </tr>
          {generateRows(PLACES, 12)}
        </tbody>
      </table>
      <div>
        {symbs.length === 0 ? (
          <AddingForm
            newSymb={newSymb}
            setNewSymb={setNewSymb}
            handleAddSymb={handleAddSymb}
          />
        ) : (
          <div>
            <RegularSelect
              selectedSymb={selectedSymb}
              handleChange={handleChange}
              symbs={symbs}
            />
            <AddingForm
              newSymb={newSymb}
              setNewSymb={setNewSymb}
              handleAddSymb={handleAddSymb}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default TableGame
