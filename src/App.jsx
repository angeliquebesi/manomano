import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cache from "./components/Cache";
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
} from "./pages/index";

const App = function App() {
  const { pathname } = useLocation();

  const appRef = React.useRef();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <div ref={appRef}>
      <Logo />
      <Routes>
        <Route exact path="/comparator/:id/cart" element={<Panier />} />
        <Route exact path="/comparator/:id" element={<Produit />} />
        <Route exact path="/house/room" element={<Roomproject />} />
        <Route exact path="/comparator" element={<Comparaison />} />
        <Route exact path="/imagetest" element={<Imagetest />} />
        <Route exact path="/house" element={<Houseproject />} />
        <Route exact path="/guidance" element={<Guidance />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Cache />
    </div>
  );
};

export default App;
