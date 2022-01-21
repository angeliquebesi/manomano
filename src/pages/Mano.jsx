/* eslint-disable react/jsx-curly-brace-presence */
import React from "react";
import { Link } from "react-router-dom";
import Manoimg from "../assets/images/Mano.png";
import "./mano.css";

function Mano() {
  return (
    <div className="w-screen h-screen">
      <img src={Manoimg} alt="" className="w-full absolute z-40" />
      <Link to="/home">
        <button className="btn-entrée" type="button">
          {" "}
          DIY
        </button>
      </Link>
    </div>
  );
}

export default Mano;
