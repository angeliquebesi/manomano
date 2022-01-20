import React from "react";
import { Link, useParams } from "react-router-dom";
import Buttonturquoise from "../components/Button/Buttonturquoise";
import { AccessoiresB, Baignoires } from "../api/data";

function Panier() {
  const { id } = useParams();
  const baignoire = Baignoires.filter((bain) => bain.id === parseInt(id, 10));
  return (
    <div className="text-white bg-darkgrey flex flex-col">
      <h1 className="mt-20 mb-4 text-center text-h1 font-semibold">
        Your order :
      </h1>
      <section className="p-6 flex flex-col w-full justify-around gap-4">
        {baignoire.map((bain) => (
          <div className="flex">
            <img className="rounded h-28" src={bain.image} alt="" />
            <div className="flex flex-col w-full text-h2 items-end">
              <span className="truncate w-48 text-right text-normal ">
                {bain.nom}
              </span>
              <span className="text-h1 font-bold">{bain.prix}</span>
              <button
                className="transition  mt-5 h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  width="1em"
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  className="h-6 w-6"
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        {AccessoiresB.map((access) => (
          <div className="flex">
            <img className="rounded h-28" src={access.image} alt="" />
            <div className="flex flex-col w-full text-h2 items-end">
              <span className="truncate w-48 text-right text-normal ">
                {access.nom}
              </span>
              <span className="text-h1 font-bold">{access.prix}</span>
              <button
                className="transition  mt-5 h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  width="1em"
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  className="h-6 w-6"
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>
      <div className="border-t-2 border-t-white w-10/12 mx-auto" />
      <div className="px-12 grid grid-cols-2 place-content-around items-center">
        <div className="text-h1 font-semibold">Price:</div>
        <div className="text-right text-h2">500€</div>
      </div>
      <div className="mx-auto px-6 text-sm flex flex-col items-center">
        <p className="mt-7">Other renovation works ? </p>
        <p>
          <Link to="/house">
            <button
              className="transition px-2 mx-3 mt-3 rounded border-2 border-white font-light "
              type="button"
            >
              house
            </button>
          </Link>
          or
          <Link to="/house/room">
            <button
              className="transition mt-2 mb-6 mx-3 px-2 rounded border-2 border-white font-light "
              type="button"
            >
              bathroom
            </button>
          </Link>
        </p>
      </div>
      <div className=" w-sceen my-5 mx-auto">
        <Buttonturquoise content="Buy" />
      </div>
    </div>
  );
}

export default Panier;
