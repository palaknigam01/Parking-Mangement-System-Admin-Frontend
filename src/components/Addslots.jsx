import React from "react";

const Addslots = () => {
  return (
    <div>
      <div>
        <h1>Add Slots</h1>
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
            <label>Charges</label>
            <input
              name="Travelling Charge"
              type="number"
              class="form-control"
              placeholder="Travelling charges"
            />
          </div>
          <div class="form-group">
            <label>Service Description</label>
            <input
              type="text"
              name="Service Description"
              class="form-control"
              placeholder="Service Description"
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

export default Addslots;
