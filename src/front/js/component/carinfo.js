import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Carinfo = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="card">
        <h4>Car Info</h4>
        <p>Car Year: {store.carinfo?.year}</p>
        <p>Car Make: {store.carinfo?.make}</p>
        <p>Car Model: {store.carinfo?.model}</p>
      </div>
      <div>
        <h4>Car Maintenance</h4>
        <div>
          <ul>
            {store.carmaintenance.map((singleMaintenance, i) => {
              return (
                <li className="d-flex justify-content-center" key={i}>
                  <div className="card inline-block">
                    <div className="float-start">
                      Mileage:{singleMaintenance.due_mileage}
                    </div>
                    <br></br>
                    <div>Maintenance: {singleMaintenance.desc}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
