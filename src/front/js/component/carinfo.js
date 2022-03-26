import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Carinfo = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <p>Car Make: {props?.data.make}</p>
    </div>
  );
};
