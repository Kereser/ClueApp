const AddingForm = ({ newSymb, setNewSymb, handleAddSymb }) => {
  return (
    <div className="row gx-2">
      <div className="input-group input-group-sm col p-0">
        <span className="input-group-text">Sim/Le</span>
        <input
          className="form-control"
          value={newSymb}
          onChange={({ target }) => setNewSymb(target.value)}
        />
      </div>
      <button
        className="btn btn-primary btn-sm col-4"
        type="button"
        onClick={handleAddSymb}
      >
        Agregar
      </button>
    </div>
  )
}

export default AddingForm
