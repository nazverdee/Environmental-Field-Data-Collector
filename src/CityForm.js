import React, { useState } from "react"; //State
import axios from "axios";
import "./CityForm.css";
//import createHistory from "history/createBrowserHistory";

export default function CityForm({ setIsOpen = true }) {
  let [count, setCount] = useState(0); //0 is initial value
  let [newCityValue, setNewCityValue] = useState(0); //0 as initial value bc simple selection questions.
  let [AQI, setAQI] = useState(0); 
  let [pollutants, setpollutants] = useState(0);
  let [noise, setnoise] = useState(0);
  let [comment, setcomment] = useState("");

  function values1() {
    axios.post(`https://62f3b096b81dba4a01393cf2.mockapi.io/CityForm`, {
      newCityValue,
      AQI,
      pollutants,
      noise,
      comment,
    });
  }

  return (
    <div className="ModalBackground">
      <div className="card p-2 text-dark bg-opacity-25 popUp_superMain">
        <div>
          <input
            list="countrySuggestions"
            type="text"
            className="form-control-lg mb-2"
            placeholder="City Name"
            autoComplete="off"
            onChange={(e) => setNewCityValue(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md mb-4">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectGrid"
              onChange={(event) => setAQI({ value: event.target.value })}
            >
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
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            pollutants
          </label>
          <select
            onChange={(event) => setpollutants({ value: event.target.value })}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>Select</option>
            <option value="PM">Particular matter</option>
            <option value="03">Tropospheric ozone (O3)</option>
            <option value="NO2">Nitrogen Dioxide (NO2)</option>
            <option value="SO2">sulfur dioxide (SO2)</option>
          </select>
        </div>
        <div className="col-md mb-4">
          <select
            className="form-select"
            id="floatingSelectGrid2"
            aria-label="Floating label select example"
            onChange={(event) => setnoise({ value: event.target.value })}
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
        <div className="input-group">
          <span className="input-group-text">Comments</span>
          <textarea
            type="text"
            rows={5}
            onChange={(e) => {
              setCount(e.target.value.length);
              setcomment(e.target.value);
            }}
            className="form-control"
            id="commentsId"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div>
          <p id="status">{count}</p>
        </div>
        <button
          type="submit"
          id="save"
          className="btn btn-outline-secondary btn-lg"
          onClick={() => {
            setIsOpen(false);
            values1();
            //history.go(0);
            window.location.reload();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
