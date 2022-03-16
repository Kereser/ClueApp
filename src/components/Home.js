import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ControlledInput from './ControlledInput'

const Home = () => {
  const [inputQuantity, setInputQuantity] = useState('')

  const inputCreator = (inputQuantity) => {
    if (!inputQuantity) {
      return null
    }

    let inputs = []

    for (let i = 0; i < inputQuantity; i++) {
      inputs.push(
        <div className="col-12 input-group" key={uuidv4()}>
          <span className="input-group-text">{`P${i + 1}`}</span>
          <ControlledInput key={uuidv4()} />
        </div>,
      )
    }

    return inputs
  }

  console.log(inputQuantity)

  return (
    <div className="container px-1">
      <div className="row gx-1 gy-2">
        <div className="col-sm-12">
          <div className="p-3 border bg-light text-center">Clue App</div>
        </div>
        <div className="col-8">
          <div className="p-2 border bg-light text-center">
            Number of players
          </div>
        </div>
        <div className="col-4">
          <select
            className="form-select p-2"
            value={inputQuantity}
            onChange={({ target }) => setInputQuantity(Number(target.value))}
          >
            <option value={0}>Open this select menu</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <div className="col-12 text-center">
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => inputCreator(inputQuantity)}
          >
            Create Players
          </button>
        </div>
        {inputCreator(inputQuantity)}
      </div>
    </div>
  )
}

export default Home
