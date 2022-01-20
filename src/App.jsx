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
  Imagetest,
  Produit,
  Mano,
} from "./pages/index";

const App = function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/comparator/:id" element={<Produit />} />
        <Route path="/house/room" element={<Roomproject />} />
        <Route path="/comparator" element={<Comparaison />} />
        <Route path="/imagetest" element={<Imagetest />} />
        <Route path="/house" element={<Houseproject />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/cart" element={<Panier />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Mano />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
