import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Carinput = () => {
  const {store, actions} = useContext(Context);
  const [vin, setVIN] = useState("")
  const [model, setModel] = useState("")
  const [mileage, setMileage] = useState("")

  return (
    <div>
      <form>
        <div className="form-container col-3 m-auto">
          <label for="vin" className="form-label">
            Car VIN
          </label>
          <input className="form-control" name="vin" value={vin}></input>
        </div>
          <div className="form-container col-3 m-auto">
            <label for="vin" className="form-label">
            Mileage
          </label>
          <input className="form-control" name="vinmileage" value={mileage}></input>
        </div>
      </form>
      <h5>or</h5>
      <form>
        <div className="form-container col-3 m-auto">
          <label for="models" className="form-label">
            Car Year, Make, and Model
          </label>
          <input className="form-control" name="models" value={model}></input>
          <label for="models" className="form-label">
            Mileage
          </label>
          <input className="form-control" name="modelsmileage" value={mileage}></input>
        </div>
      </form>
    </div>
  );
};
