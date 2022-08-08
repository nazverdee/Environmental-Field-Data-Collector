import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <header
        className="App-header row p-4 mb-4 text-white text-center"
        id="TITLE"
      >
        <h4>
          <span id="Subtitle">Environmental Field Data Collection</span>
        </h4>
      </header>
      <Main />
    </div>
  );
}

export default App;
