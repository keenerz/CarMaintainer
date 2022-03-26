import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carinput } from "../component/carinput";
import { Carinfo } from "../component/carinfo";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Check what needs to be done on your car!</h1>
      <Carinput />
      <br />
      <Carinfo />
    </div>
  );
};
