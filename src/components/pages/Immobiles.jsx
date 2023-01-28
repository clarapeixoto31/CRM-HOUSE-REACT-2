import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

import "../../styles/Clients.css";

import imageHouse from "../../images/house.jpg";
import Immobile1 from "../parts/Immobile1";
import Immobile2 from "../parts/Immobile2";
import Immobile3 from "../parts/Immobile3";
import Immobile4 from "../parts/Immobile4";

export default function Immobiles() {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="container-fluid overflow-hidden">
        <div className="row vh-90 overflow-auto">
          <Immobile1 />
          <Immobile2 />
          <Immobile3 />
          <Immobile4 />
          <Footer />
        </div>
      </div>
    </div>
  );
}
