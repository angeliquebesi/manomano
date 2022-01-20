import React from "react";
import { Categories } from "../../api/data";

function Cardcategory() {
  return (
    <div className="p-8 flex gap-4 flex-wrap bg-lightgrey text-darkblue ">
      {Categories.map((categorie) => (
        <div className="p-2 w-36 flex flex-col gap-4 md:flex-row md:w-96 rounded-lg shadow-md bg-white border-1 border-lightgrey2">
          <img
            className="object-contain"
            src={categorie.photo}
            alt="illustration de la categorie"
          />
          <p className="text-ellipsis overflow-hidden w-full font-bold text-center">
            {categorie.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cardcategory;
