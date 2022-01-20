import React from "react";
import { Categories } from "../../api/data";
import "../../index.css";

function Cardcategory() {
  return (
    <div className="p-8 flex gap-4 flex-wrap  bg-darkgrey text-lightgrey3">
      {Categories.map((categorie) => (
        <a
          href={
            categorie.name === "Baignoire et accessoires" ? "/comparator" : "/"
          }
        >
          <div className="p-2 my-3 w-36 flex flex-col gap-4 md:flex-row md:w-96 rounded-lg shadowed">
            <img
              className="object-contain rounded-2xl"
              src={categorie.photo}
              alt="illustration de la categorie"
            />
            <p className="text-ellipsis overflow-hidden w-full font-bold text-center">
              {categorie.name}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Cardcategory;
