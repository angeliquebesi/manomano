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
        <Route exact path="/comparator/:id/cart" element={<Panier />} />
        <Route exact path="/comparator/:id" element={<Produit />} />
        <Route exact path="/house/room" element={<Roomproject />} />
        <Route exact path="/comparator" element={<Comparaison />} />
        <Route exact path="/imagetest" element={<Imagetest />} />
        <Route exact path="/house" element={<Houseproject />} />
        <Route exact path="/guidance" element={<Guidance />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={<Mano />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
