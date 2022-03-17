import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const Home = () => {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: '' },
  ])

  const handleChangeInput = (id, target) => {
    const newInputs = inputFields.map((input) => {
      if (id === input.id) {
        return { ...input, [target.name]: target.value }
      }
      return input
    })
    setInputFields(newInputs)
  }

  const handleAddClick = () => {
    const newInputs = [...inputFields]
    newInputs.push({ id: uuidv4(), firstName: '' })
    setInputFields(newInputs)
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(inputFields)
  }

  return (
    <div className="container px-1">
      <div className="row gx-1 gy-2">
        <div className="col-sm-12">
          <div className="p-3 border bg-light text-center text-primary">
            Clue App
          </div>
        </div>
        <div className="col-8 mx-auto">
          <div className="p-2 border bg-dark text-light text-center">
            Players
          </div>
        </div>
        <form className="row gx-1 gy-2" onSubmit={submit}>
          {inputFields.map((input, index) => (
            <div key={input.id} className="input-group">
              <span className="input-group-text">{`P${index + 1}`}</span>
              <input
                className="form-control"
                name="firstName"
                type="text"
                value={input.firstName}
                onChange={({ target }) => handleChangeInput(input.id, target)}
              />
            </div>
          ))}
          <div className="col-6 text-start">
            <button className="btn btn-dark btn-sm" type="button">
              Delete Player
            </button>
          </div>
          <div className="col-6 text-end">
            <button
              className="btn btn-dark btn-sm"
              type="button"
              onClick={handleAddClick}
            >
              Create Player
            </button>
          </div>
          <div className="col-6 mx-auto d-grid gap-2">
            <Link
              to="/Game"
              state={{
                names: [
                  { id: uuidv4(), firstName: 'Confirmado' },
                  ...inputFields,
                ],
              }}
              type="submit"
              className="text-info btn btn-secondary btn-sm"
            >
              Play
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
