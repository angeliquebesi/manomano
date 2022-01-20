/* eslint-disable react/prop-types */
import React from "react";
import "../../index.css";

function Cardproduct({ product }) {
  return (
    <div className="py-2">
      <div
        key={product.id}
        className="p-2 max-w-full flex gap-4 md:flex-row md:w-96 rounded-lg shadowed"
      >
        <img
          className="w-36 my-auto h-full rounded-2xl object-contain"
          src={product.image}
          alt="représentation de l'objet"
        />
        <div className="p-2 flex flex-col">
          <h1 className="text-ellipsis overflow-hidden w-full font-bold text-2xl">
            {product.nom}
          </h1>

          <p className="text-ellipsis overflow-hidden w-full ">
            {product.dimension}
          </p>
          <div className="pt-8">
            <span className="w-16 text-h2 font-bold">{product.prix}</span>
          </div>
          <div className="pt-4">
            <button
              className="transition h-12 rounded bg-teal px-4 text-md font-semibold hover:bg-teal-400 active:bg-teal-700"
              type="button"
            >
              View more
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardproduct;
