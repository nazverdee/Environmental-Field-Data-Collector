import React, { useState } from "react";
import CityForm from "./CityForm";
import List from "./List";
import "./Main.css";
import ButtonCityForm from "./ButtonCityForm";
import Items from "./Items.js";
import ListHeader from "./ListHeader";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="row">
      <div id="recentCitiesAdded">
        <section className="cityTopSection">
          <h1 id="listtitle">Cities Added List</h1>
          <ButtonCityForm setIsOpen={setIsOpen} />
        </section>
        {isOpen && <CityForm setIsOpen={setIsOpen} />}
        <ListHeader />
        <List>
          <Items />
        </List>
      </div>
    </div>
  );
}
