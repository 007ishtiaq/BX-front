import React from "react";

const BrandForm = ({ handleSubmit, name, setName, image }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
        required
      />

      <br />
      <button disabled={!image} className="btn btn-outline-primary">
        Save
      </button>
    </div>
  </form>
);

export default BrandForm;
