const RegularSelect = ({ selectedSymb, handleChange, symbs }) => {
  return (
    <select
      className="form-select form-select-sm"
      value={selectedSymb}
      onChange={handleChange}
    >
      {symbs.map((symb, index) => (
        <option key={index} value={symb}>
          {symb}
        </option>
      ))}
    </select>
  )
}

export default RegularSelect
