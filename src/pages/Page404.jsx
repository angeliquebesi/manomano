import React from "react";
import { Link } from "react-router-dom";
import img404 from "../assets/images/img404.gif";

const Page404 = function Page404() {
  return (
    <div className="w-screen h-screen text-white bg-darkgrey flex flex-col">
      <div className="mt-24 text-center font-bold">Error</div>
      <h1 className="text-center text-7xl font-semibold">404</h1>
      <img src={img404} alt="" className="p-4" />
      <div className="mx-auto">
        <Link to="/">
          <button
            className="transition px-6 mx-1 h-12 rounded bg-teal "
            type="button"
          >
            take me home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
