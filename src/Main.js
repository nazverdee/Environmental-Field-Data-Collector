import React, { useState } from "react";
import CityForm from "./CityForm";
import List from "./List";
import "./Main.css";
import ButtonCityForm from "./ButtonCityForm";
import Items from "./Items.js";
import ListHeader from "./ListHeader";
import useLocalStorage from "./UseLocalStorage";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const cities = [
    {
      ciudad: "Barquisimeto",
      aqi: 1,
      pollutants: 1,
      Noise: 1,
      Comments: " Clean City ",
    },
    {
      ciudad: "Santiago",
      aqi: 2,
      pollutants: 2,
      Noise: 2,
      Comments: "Foggy",
    },
  ];

  const { item: todos, saveItem: saveTodos } = useLocalStorage("TODOS_V1", []);

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

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
          {cities.map((city) => (
            <Items key={city.ciudad} ciudad={city.ciudad} />
          ))}
        </List>
      </div>
    </div>
  );
}
