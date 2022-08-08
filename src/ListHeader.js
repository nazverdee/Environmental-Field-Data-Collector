import React from "react";
import "./ListHeader.css";

export default function List(props) {
  return (
    <div id="main">
      <table id="tables">
        <thead id="thead" className="thead">
          <tr className="headTr">
            <th>City</th>
            <th>AQI</th>
            <th>Noise</th>
            <th>Pollutant</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <th>{props.children}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
