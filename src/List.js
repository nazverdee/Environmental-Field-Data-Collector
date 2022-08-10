import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { Table } from "semantic-ui-react";

export default function List() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://62f3115118493ca21f3d133f.mockapi.io/CityForm`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <div id="main">
      <Table singleLine id="tables">
        <Table.Header className="thead">
          <Table.Row className="headTr">
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>AQI</Table.HeaderCell>
            <Table.HeaderCell>Noise</Table.HeaderCell>
            <Table.HeaderCell>Pollutant</Table.HeaderCell>
            <Table.HeaderCell>Comment</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.newCityValue} className="rows">
                <Table.Cell>{data.newCityValue}</Table.Cell>
                <Table.Cell>{data.AQI.value}</Table.Cell>
                <Table.Cell>{data.noise.value}</Table.Cell>
                <Table.Cell>{data.pollutants.value}</Table.Cell>
                <Table.Cell>{data.comment}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
