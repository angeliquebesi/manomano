import React from "react";
import { Cardcategory } from "../components/index";

function Roomproject() {
  return (
    <div>
      {/* Mettre le plan de la pièce Léonie */}
      <h2 className="text-ellipsis text-3xl overflow-hidden w-full h-8 font-bold text-center">
        Which elements ?
      </h2>
      <p className="text-ellipsis text-xl w-full h-5 text-center">
        Click on ↑ Or search ↓
      </p>
      <div className="text-black bg-white flex items-center justify-center mt-3">
        <div className="border rounded-3xl overflow-hidden flex">
          <input
            type="text"
            className="px-4 py-2"
            placeholder="Search your product ..."
          />
        </div>
      </div>
      <Cardcategory />
    </div>
  );
}

export default Roomproject;
