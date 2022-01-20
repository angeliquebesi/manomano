import React from "react";
import { useParams } from "react-router-dom";
import Cardproduct from "../components/Cards/Cardproduct";
import { Baignoires } from "../api/data";

function Produit() {
  const { id } = useParams();
  return (
    <div className="p-8 flex gap-4 flex-wrap bg-darkgrey text-lightgrey3 ">
      <h2 className="mt-8 text-ellipsis text-3xl overflow-hidden w-full h-8 font-bold text-center">
        Your product
      </h2>
      {Baignoires.map((product) => {
        if (parseInt(id, 2) === product.id) {
          return <Cardproduct key={id} product={product} />;
        }
        return <div />;
      })}
    </div>
  );
}

export default Produit;
