import React from "react";
import { Link } from "react-router-dom";
import Buttonturquoise from "../components/Button/Buttonturquoise";
import "./home.css";

const Home = function Home() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="home-title">Build your own project on Sunday !</h1>
      <div className="container-clef">
        <iframe
          title="home"
          src="https://my.spline.design/clef-96e61e87c98117bb2a410d12b3cb036f/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      <Link to="/house">
        <Buttonturquoise content={"Let's go !"} className="absolute z-30" />
      </Link>
    </div>
  );
};

export default Home;
