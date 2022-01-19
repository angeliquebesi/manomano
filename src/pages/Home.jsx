import React from "react";
import { Buttonturquoise, Cardproduct } from "../components/index";

const Home = function Home() {
  return (
    <div className="text-red-500">
      <h1>Home page</h1>
      <Buttonturquoise />
      {/* begin test design */}
      <section className="p-8 gap-6 mx-auto flex items-center bg-lightgrey text-darkblue">
        <div className="p-8 w-1/4 rounded-lg shadow-md bg-white border-1 border-lightgrey2">
          <h1 className="text-h1 font-bold pb-4">Lorem ipsum dolor sit</h1>
          <img className="w-32" src="./assets/images/placeholder.png" alt="" />
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="p-8 w-1/4 rounded-lg shadow-md bg-white border-1 border-lightgrey2">
          <h1 className="text-h1 font-bold pb-4">Lorem ipsum dolor sit</h1>
          <img
            className="w-32"
            src="../../src/assets/images/placeholder.png"
            alt=""
          />
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      {/* end test design */}
      <Cardproduct />
    </div>
  );
};

export default Home;
