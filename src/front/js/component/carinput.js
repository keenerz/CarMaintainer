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
      <form onSubmit={(e) => {
        if (
          vin == "" ||
          mileage == ""
        ) {
          alert(
            "Cannot Submit without a VIN and mileage"
          );
          e.preventDefault();
        } else {
          actions
            .loadInformationvin(vin, mileage)
            .then(e.preventDefault());
        }
      }}>
        <div className="form-container col-3 m-auto">
          <label for="vin" className="form-label">
            Car VIN
          </label>
          <input className="form-control" name="vin" value={vin} placeholder="1FAFP45X83F403461"></input>
        </div>
          <div className="form-container col-3 m-auto">
            <label for="vin" className="form-label">
            Mileage
          </label>
          <input className="form-control" name="vinmileage" value={mileage} placeholder="69420"></input>
        </div>
        <button>Submit</button>
      </form>
      <h5>or</h5>
      <form onSubmit={(e) => {
        if (
          model == "" ||
          mileage == ""
        ) {
          alert(
            "Cannot Submit without a model info and mileage"
          );
          e.preventDefault();
        } else {
          actions
            .loadInformationvin(model, mileage)
            .then(e.preventDefault());
        }
      }}>
        <div className="form-container col-3 m-auto">
          <label for="models" className="form-label">
            Car Year, Make, and Model
          </label>
          <input className="form-control" name="models" value={model} placeholder="1996 Ford Pinto"></input>
          <label for="models" className="form-label">
            Mileage
          </label>
          <input className="form-control" name="modelsmileage" value={mileage} placeholder="69420"></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
