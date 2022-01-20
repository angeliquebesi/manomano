import React from "react";
import { Link, useParams } from "react-router-dom";
import Cardbuy from "../components/Cards/Cardbuy";
import Reviews from "./Reviews";
import { Baignoires } from "../api/data";

function Produit() {
  const { id } = useParams();
  return (
    <div className="p-8 flex gap-4 flex-wrap bg-darkgrey text-lightgrey3 ">
      <h2 className="mt-8 text-ellipsis text-3xl overflow-hidden w-full h-8 font-bold text-center">
        Your product
      </h2>
      <Cardbuy product={Baignoires[id]} />
      <p>
        The Baignoire Corvette series rectangular drop-in bathtub fits into any
        bathroom style with its contemporary and timeless design. Its sloping
        backrest provides the perfect position for a relaxing bath.
      </p>
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
      <Link to="/cart" className="w-screen">
        <input
          className="transition h-12 w-50 rounded bg-teal px-16 font-semibold hover:bg-teal-400 active:bg-teal-700  text-white w-full"
          type="submit"
          value="Buy"
        />
      </Link>
      <Reviews />
    </div>
  );
}

export default Produit;
