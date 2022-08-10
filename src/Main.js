import React, { useState } from "react";
import CityForm from "./CityForm";
import List from "./List";
import "./Main.css";
import ButtonCityForm from "./ButtonCityForm";
import { BrowserRouter as Router } from "react-router-dom";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router className="row">
      <div id="recentCitiesAdded">
        <section className="cityTopSection">
          <h1 id="listtitle">Cities Added List</h1>
          <ButtonCityForm setIsOpen={setIsOpen} />
        </section>
        <div></div>
        {isOpen && <CityForm setIsOpen={setIsOpen} />}
        <List />
      </div>
    </Router>
  );
}
