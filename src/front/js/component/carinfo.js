import React, {useContext} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Carinfo = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <p>Car Year: {store.carinfo?.year}</p>
      <p>Car Make: {store.carinfo?.make}</p>
      <p>Car Model: {store.carinfo?.model}</p>
    </div>
  );
};

// Carinfo.propTypes = {
//   year: PropTypes.string,
//   make: PropTypes.string,
//   model: PropTypes.string,
// };