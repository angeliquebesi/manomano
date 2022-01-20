import React from "react";
import "./houseproject.css";
import { Link } from "react-router-dom";

function Houseproject() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      <div className="container-chargement">
        <div className="bar-chargement" />
      </div>
      <div className="container-plan">
        <iframe
          title="plan"
          src="https://my.spline.design/plan-e583a09ea61fb1c22d7681bc799cfbd6/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
        <h2 className="btn-wc">WC</h2>
        <Link to="/house/room">
          <h2 className="btn-bathroom">Bathroom</h2>
        </Link>
        <h2 className="btn-kitchen">Kitchen</h2>
        <h2 className="btn-living">Living room</h2>
        <h2 className="btn-bed">Bed room</h2>
        <h1 className="houseproject-title">
          Which rooms do you want to modify ?
        </h1>
      </div>
    </div>
  );
}

export default Houseproject;
