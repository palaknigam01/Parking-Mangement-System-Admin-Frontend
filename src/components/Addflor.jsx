import React from "react";
const Addfloors = () => {
  return (
    <div>
      <div>
        <h1>Add Floors</h1>
      </div>
      <div class="container">
        <form>
          <div class="form-group">
            <label>Floor no.</label>
            <input
              type="number"
              name="flor number"
              class="form-control"
              placeholder="floor name"
            />
          </div>
          <div class="form-group">
            <label>Slot numbers</label>
            <input
              type="number"
              name="Slots number"
              class="form-control"
              placeholder="slot numbers"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-success">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addfloors;
