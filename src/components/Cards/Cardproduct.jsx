/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Baignoires } from "../../api/data";
import "../../index.css";

function Cardproduct() {
  return (
    <div className="py-6">
      {Baignoires.map((baignoire) => (
        <div
          key={baignoire.id}
          className="p-2 my-3 max-w-full flex gap-4 md:flex-row md:w-96 rounded-lg shadowed"
        >
          <img
            className="w-36 my-auto h-full rounded-2xl object-contain"
            src={baignoire.image}
            alt="représentation de l'objet"
          />
          <div className="p-2 flex flex-col">
            <h1 className="text-ellipsis overflow-hidden w-full font-bold text-2xl">
              {baignoire.nom}
            </h1>

            <p className="text-ellipsis overflow-hidden w-full ">
              {baignoire.dimension}
            </p>
            <div className="pt-8">
              <span className="w-16 text-h1 font-bold">{baignoire.prix}</span>
            </div>
            <div className="pt-4">
              <button
                className="transition h-12 rounded bg-teal px-5 text-lg font-semibold hover:bg-teal-400 active:bg-teal-700"
                type="button"
              >
                View more
              </button>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardproduct;
