/* eslint-disable react/no-unescaped-entities */
import React from "react";
import pommeau from "../../assets/images/pommeau.jpg";
import "../../index.css";

function Cardproduct() {
  return (
    <div>
      <div className="p-2 w-72 flex flex-col gap-4 md:flex-row md:w-96 rounded-lg shadowed">
        <img className="w-48 rounded-lg object-cover" src={pommeau} alt="" />
        <div className="p-2 flex flex-col">
          <h1 className="text-ellipsis overflow-hidden w-full h-20 font-bold">
            Le pommeau de douche vintage retro blanc steampunk laiton doré
          </h1>

          <p className="text-ellipsis overflow-hidden w-full h-24 ">
            Alliant le charme désuet de l'époque Victorienne à l'hygiène
            impeccable du XXIe siècle, le pommeau de douche vintage égaiera la
            tristesse de votre salle de bains moderne. Vendu avec un lot de 3
            joints mx37.
          </p>
          <div className="pt-2">
            <span className="w-16 text-h1 font-bold">149</span>
            <sup className="font-bold">€99</sup>
            <span className="pl-1 line-through w-16 text-sm">199€99</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardproduct;
