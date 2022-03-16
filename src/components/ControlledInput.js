import { useState } from 'react'

const ControlledInput = () => {
  const [value, setValue] = useState('')
  return (
    <input
      className="form-control"
      type="text"
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  )
}

export default ControlledInput
