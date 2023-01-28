import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

import "../../styles/Clients.css";

import imageHouse from "../../images/house.jpg";
import ClientBox2 from "../parts/ClientBox2";
import ClientBox3 from "../parts/ClientBox3";
import ClientBox4 from "../parts/ClientBox4";
import ClientBox1 from "../parts/ClientBox1";

export default function Clients() {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="container-fluid overflow-hidden">
        <div className="row vh-90 overflow-auto">
          <ClientBox1 />
          <ClientBox2 />
          <ClientBox3 />
          <ClientBox4 />
          <Footer />
        </div>
      </div>
    </div>
  );
}
