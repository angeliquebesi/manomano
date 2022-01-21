import React from "react";
import Buttonturquoise from "../components/Button/Buttonturquoise";
import "./guidance.css";

function Guidance() {
  return (
    <div className="w-screen h-screen text-white bg-darkgrey flex flex-col justify-center items-center">
      <h1 className="text-center text-h1 font-semibold">
        To build it you need :
      </h1>
      <h2 className="text-center text-h2">check if you have it</h2>
      <section className="grid grid-rows-4 grid-flow-col w-full justify-around mt-20 mb-10">
        <label className="container" htmlFor="check">
          One
          <input type="checkbox" checked="checked" />
          <span className="checkmark rounded" />
        </label>
        <label className="container" htmlFor="check">
          two
          <input type="checkbox" checked="checked" />
          <span className="checkmark rounded" />
        </label>
        <label className="container" htmlFor="check">
          three
          <input type="checkbox" checked="checked" />
          <span className="checkmark rounded" />
        </label>
        <label className="container" htmlFor="check">
          four
          <input type="checkbox" checked="checked" />
          <span className="checkmark rounded" />
        </label>
        <label className="container" htmlFor="check">
          five
          <input type="checkbox" checked="checked" />
          <span className="checkmark rounded" />
        </label>
      </section>
      <Buttonturquoise content="send" />
    </div>
  );
}

export default Guidance;
