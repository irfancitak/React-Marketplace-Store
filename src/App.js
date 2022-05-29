import React from "react";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import CreateAndSell from "./components/CreateAndSell";
import Home from "./components/Home";
import MarketPlace from "./components/Marketplace";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <MarketPlace />
      <Subscribe />
      <Footer />
    </div>
  );
}
