import React from "react";
import { Cardproduct } from "../components/Cards/index";
import { Buttonturquoise, ButtonTransparent } from "../components/Button/index";

const Home = function Home() {
  return (
    <div className="p-8 flex gap-4 flex-wrap bg-darkgrey text-lightgrey3 ">
      <h1>Home page</h1>
      <Buttonturquoise />
      <ButtonTransparent />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
    </div>
  );
};

export default Home;
