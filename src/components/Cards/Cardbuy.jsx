/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

function Cardbuy({ product }) {
  return (
    <div className="py-2">
      <Link to="/comparator">
        <p className="text-3xl">←</p>
      </Link>
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
        </div>
      </div>
    </div>
  );
}

export default Cardbuy;
