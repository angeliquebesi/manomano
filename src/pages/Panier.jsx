import React from "react";
import Buttonturquoise from "../components/Button/Buttonturquoise";
// import parebaignoire from "../assets/images/Accessoires/parebaignoire.jpg";
// import vidage from "../assets/images/Accessoires/vidage.jpg";
// import mitigeur from "../assets/images/Accessoires/mitigeur.jpg";
import { AccessoiresB } from "../api/data";

function Panier() {
  return (
    <div className="text-white bg-darkgrey flex flex-col">
      <h1 className="mt-20 mb-4 text-center text-h1 font-semibold">
        Your order :
      </h1>
      <section className="p-6 flex flex-col w-full justify-around gap-4">
        {AccessoiresB.map((access) => (
          <div className="flex">
            <img className="rounded h-28" src={access.image} alt="" />
            <div className="flex flex-col w-full text-h2 items-end">
              <span className="truncate w-48 text-right text-normal ">
                {access.nom}
              </span>
              <span className="text-h1 font-bold">{access.prix}</span>
              <button
                className="transition mt-5 h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
                type="button"
              >
                X
              </button>
            </div>
          </div>
        ))}

        {/* <div className="flex">
          <img className="rounded h-32 " src={vidage} alt="" />
          <div className="flex flex-col w-48 text-h2 items-end">
            <span className="text-normal ">Vidage de baignoire</span>
            <span className="text-h1 font-bold">29,07 €</span>
            <button
              className="transition mt-9 h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
              type="button"
            >
              X
            </button>
          </div>
        </div>
        <div className="flex">
          <img className="rounded h-32 " src={mitigeur} alt="" />
          <div className="flex flex-col w-48 text-h2 items-end">
            <span className="text-ellipsis text-normal ">
              Mitigeur thermostatique de bain-douche
            </span>
            <span className="text-h1 font-bold">179,90 €</span>
            <button
              className="transition mt-9 h-6 w-6 rounded bg-teal font-semibold hover:bg-teal-400 active:bg-teal-700  text-white text-normal"
              type="button"
            >
              X
            </button>
          </div>
        </div> */}
      </section>
      <div className="border-t-2 border-t-white w-10/12 mx-auto" />
      <div className="px-12 grid grid-cols-2 place-content-around items-center">
        <div className="text-h1 font-semibold">Price:</div>
        <div className="text-right text-h2">500€</div>
      </div>
      <div className="my-10 mx-auto">
        <Buttonturquoise content="send" />
      </div>
    </div>
  );
}

export default Panier;
