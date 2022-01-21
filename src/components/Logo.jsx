import React from "react";
import { Link } from "react-router-dom";
import Logoimg from "../assets/images/Logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={Logoimg} alt="Logo" className="absolute z-30 w-1/6 m-2" />{" "}
    </Link>
  );
}

export default Logo;
