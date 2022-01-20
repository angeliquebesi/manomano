import React from "react";
import Buttonturquoise from "../components/Button/Buttonturquoise";

function Panier() {
  return (
    <div className="w-screen h-screen text-white bg-darkgrey flex flex-col">
      <h1 className="mt-20 mb-10 text-center text-h1 font-semibold">
        Your order :
      </h1>
      <section className="grid grid-rows-5 grid-flow-col w-full justify-around gap-4">
        <div className="text-h2">
          <span className="">something is here </span>
          <span className="px-8">50€</span>
          <button
            className="transition h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
            type="button"
          >
            X
          </button>
        </div>
        <div className="text-h2">
          <span className="">something is here </span>
          <span className="px-8">50€</span>
          <button
            className="transition h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
            type="button"
          >
            X
          </button>
        </div>
        <div className="text-h2">
          <span className="">something is here </span>
          <span className="px-8">50€</span>
          <button
            className="transition h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
            type="button"
          >
            X
          </button>
        </div>
        <div className="text-h2">
          <span className="">something is here </span>
          <span className="px-8">50€</span>
          <button
            className="transition h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
            type="button"
          >
            X
          </button>
        </div>
      </section>
      <div className="border-t-2 border-t-white w-10/12 mx-auto" />
      <div className="px-8 grid grid-cols-2 place-content-around items-center">
        <div className="text-h1 font-semibold">Price:</div>
        <div className="text-right text-h2">500€</div>
      </div>
      <div className="mt-10 mx-auto">
        <Buttonturquoise content="send" />
      </div>
    </div>
  );
}

export default Panier;
