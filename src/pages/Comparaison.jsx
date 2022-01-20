import React from "react";
import { Baignoires } from "../api/data";
import Cardproduct from "../components/Cards/Cardproduct";

function Comparaison() {
  return (
    <div className="p-8 flex gap-4 flex-wrap bg-darkgrey text-lightgrey3 ">
      <h2 className="mt-8 text-ellipsis text-3xl overflow-hidden w-full h-8 font-bold text-center">
        Which products ?
      </h2>
      {Baignoires.map((product) => (
        <Cardproduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Comparaison;
