import React from "react";
import { Link } from "react-router-dom";

export const Carinput = () => {
  return (
    <div>
      <form>
        <div className="form-container col-3 m-auto">
          <label for="vin" className="form-label">
            Car VIN
          </label>
          <input className="form-control" name="vin"></input>
        </div>
      </form>
      <h5>or</h5>
      <form>
        <div className="form-container col-3 m-auto">
          <label for="models" className="form-label">
            Car Year, Make, and Model
          </label>
          <input className="form-control" name="models"></input>
        </div>
      </form>
    </div>
  );
};
