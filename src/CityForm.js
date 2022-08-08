import React from "react";
import "./CityForm.css";

export default function CityForm({ setIsOpen, addTodo }) {
  let [count, setCount] = React.useState(0);
  let [newCityValue, setNewCityValue] = React.useState("");

  const newCity = (e) => {
    setNewCityValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newCityValue.length <= 0) return;
    addTodo(newCityValue);
  };

  return (
    <div className="ModalBackground">
      <div className="card p-2 text-dark bg-opacity-25 popUp_superMain">
        <form id="myForm" onSubmit={onSubmit}>
          <input
            list="countrySuggestions"
            type="text"
            className="form-control-lg mb-2"
            placeholder="City Name"
            autoComplete="off"
            onChange={newCity}
            required
          ></input>
          <datalist id="countrySuggestions">
            <option value="Madrid"></option>
            <option value="Valparaiso"></option>
            <option value="Washington-DC"></option>
            <option value="Denmarc"></option>
            <option value="Montreal"></option>
            <option value="Monterrey"></option>
            <option value="Seville"></option>
            <option value="Dublin"></option>
          </datalist>
        </form>
        <div className="col-md mb-4">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectGrid">
              <option>Air Quality Index</option>
              <option value="Good" className="dropdown-item">
                0-50 (Good)
              </option>
              <option value="Moderate" className="dropdown-item">
                51-100 (moderate)
              </option>
              <option value="Harmful-low" className="dropdown-item">
                101-150 (harmful for vulnerable groups)
              </option>
              <option value="Harmful-high" className="dropdown-item">
                151-200 (harmful for the rest of the population)
              </option>
              <option value="unhealthy" className="dropdown-item">
                201-300 (very unhealthy)
              </option>
              <option value="hazardous" className="dropdown-item">
                over 300 (Hazardous)
              </option>
            </select>
          </div>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">
            pollutants
          </label>
          <select className="form-select" id="inputGroupSelect01">
            <option>Select</option>
            <option value="P-M">Particular matter</option>
            <option value="03">Tropospheric ozone (O3)</option>
            <option value="NO2">Nitrogen Dioxide (NO2)</option>
            <option value="SO2">sulfur dioxide (SO2)</option>
          </select>
        </div>
        <div className="col-md mb-4">
          <div>
            <select
              className="form-select"
              id="floatingSelectGrid2"
              aria-label="Floating label select example"
            >
              <option>Noise Pollution levels</option>
              <option value="Low" className="dropdown-item">
                0-50db (low)
              </option>
              <option value="Considerate" className="dropdown-item">
                51-75db (considerate noise)
              </option>
              <option value="High" className="dropdown-item">
                75-100db (high noise)
              </option>
              <option value="Harmful" className="dropdown-item">
                101-120db (harmful noise){" "}
              </option>
              <option value="Irreversible" className="dropdown-item">
                121db (irreversible damage)
              </option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-text">Comments</span>
          <textarea
            type="text"
            rows={5}
            onChange={(e) => setCount(e.target.value.length)}
            className="form-control"
            id="commentsId"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div>
          <p id="status">{count}</p>
        </div>
        <button
          type="button"
          id="save"
          className="btn btn-outline-secondary btn-lg"
          onClick={() => setIsOpen(false)}
        >
          save
        </button>
      </div>
    </div>
  );
}
