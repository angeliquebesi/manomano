import React from "react";
import { Buttonturquoise } from "../components/index";

const Home = function Home() {
  return (
    <div className="w-screen h-screen p-8 flex gap-4 flex-wrap bg-black text-darkblue ">
      <Buttonturquoise content={"Let's go !"} />
    </div>
  );
};

export default Home;
