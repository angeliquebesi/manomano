import React from "react";
import Cardproduct from "../components/Cards/Cardproduct";

function Comparaison() {
  return (
    <div className="p-8 flex gap-4 flex-wrap bg-darkgrey text-lightgrey3 ">
      <h2 className="text-ellipsis text-3xl overflow-hidden w-full h-8 font-bold text-center">
        Which products ?
      </h2>
      <Cardproduct />
    </div>
  );
}

export default Comparaison;
