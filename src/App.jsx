import React from "react";
import { Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import {
  Home,
  Page404,
  Panier,
  Comparaison,
  Guidance,
  Roomproject,
  Houseproject,
} from "./pages/index";

const App = function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/house" element={<Houseproject />} />
        <Route path="/house/room" element={<Roomproject />} />
        <Route path="/comparator" element={<Comparaison />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/cart" element={<Panier />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
