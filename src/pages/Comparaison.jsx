import React from "react";
import { Cardproduct } from "../components/Cards/index";

function Comparaison() {
  return (
    <div>
      <h2 className="text-ellipsis text-3xl overflow-hidden w-full h-8 font-bold text-center">
        Which products ?
      </h2>
      <Cardproduct />
    </div>
  );
}

export default Comparaison;
