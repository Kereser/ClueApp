const MultipleSelect = ({ handleChange, symbs }) => {
  return (
    <select
      className="form-select form-select-sm"
      multiple
      size={1}
      value={symbs}
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
export default MultipleSelect
