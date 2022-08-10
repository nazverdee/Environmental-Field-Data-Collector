import React from "react";
import "./ButtonCityForm.css";

export default function CreateTodoButton({ setIsOpen }) {
  return (
    <button
      className="CreateTodoButton cityFormBttn"
      id="Form"
      onClick={() => setIsOpen(true)}
    >
      Add City
    </button>
  );
}
