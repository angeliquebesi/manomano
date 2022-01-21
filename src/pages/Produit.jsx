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
        The Bath series rectangular drop-in bathtub fits into any bathroom style
        with its contemporary and timeless design. Its sloping backrest provides
        the perfect position for a relaxing bath.
      </p>
      <section className="grid grid-rows-6 grid-flow-col w-full mt-10 text-sm font-semibold gap-4">
        <label className="flex gap-2">
          <input className="form-checkbox h-5 w-5 text-teal" type="checkbox" />
          Dimensions of the location
        </label>
        <label className="flex gap-2">
          <input className="form-checkbox h-5 w-5 text-teal" type="checkbox" />
          Position of water inlets and drains
        </label>
        <label className="flex gap-2">
          <input className="form-checkbox h-5 w-5 text-teal" type="checkbox" />
          Size of water inlets and drains
        </label>
        <label className="flex gap-2">
          <input className="form-checkbox h-5 w-5 text-teal" type="checkbox" />
          Type of water inlet and drain connection
        </label>
        <label className="flex gap-2">
          <input className="form-checkbox h-5 w-5 text-teal" type="checkbox" />
          Have a bubble level, wrenches, a tool gripper, a hammer and a
          measuring tape
        </label>
        <label className="flex gap-2">
          <input className="form-checkbox h-5 w-5 text-teal" type="checkbox" />
          Have some teflon
        </label>
      </section>
      <Link to={`/comparator/${id}/cart`}>
        <input
          className="transition h-12 rounded bg-teal px-16 font-semibold hover:bg-teal-400 active:bg-teal-700  text-white w-72 flex flex-row justify-center cursor-pointer"
          type="submit"
          value="Buy"
        />
      </Link>
      <Reviews />
    </div>
  );
}

export default Produit;
