import React from "react";

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  values,
  handleCatagoryChange,
  addDesAttribute,
  desattributes,
  handleDesAttributeChange,
}) => {
  const {
    art,
    title,
    description,
    shippingcharges,
    categories,
    images,
    brands,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Article Number (Required) </label>
        <input
          type="number"
          className="form-control"
          name="art"
          value={art}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Title (Required) </label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      {desattributes.map((desattr, index) => {
        // Get the current key and value from the object
        const currentKey = Object.keys(desattr)[0] || "";
        const currentValue = Object.values(desattr)[0] || "";

        return (
          <div key={index} className="form-group">
            <label>Key</label>
            <input
              type="text"
              className="form-control"
              value={currentKey}
              onChange={(e) =>
                handleDesAttributeChange(index, e.target.value, currentValue)
              }
            />

            <label>Value</label>
            <input
              type="text"
              className="form-control"
              value={currentValue}
              onChange={(e) =>
                handleDesAttributeChange(index, currentKey, e.target.value)
              }
            />
          </div>
        );
      })}

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={addDesAttribute}
      >
        Add Description Attribute
      </button>

      <div className="form-group">
        <label>Shipping Cahrges[0 for free item]</label>
        <input
          type="number"
          name="shippingcharges"
          className="form-control"
          value={shippingcharges}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Category (Required)</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCatagoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label>Material type (Required)</label>
        <select name="brand" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <br />
      <button disabled={!images.length} className="btn btn-outline-info">
        Save
      </button>
    </form>
  );
};

export default ProductCreateForm;
