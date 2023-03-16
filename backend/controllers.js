const express = require('express');
const services = require('./services.js');
const app = express();


//When interacting W/ an API, 
//you send data with your request, 
//or you receive data with your response. 

//Let's create a method for each endpoint


const getAllCities = (req, res) => {
    const allCities = services.getAllCities();
    res.send({status: "OK", data: allCities});
};

const getOneCity = (req, res) => {
    const OneCity = services.getOneCity();
    res.send("Get an existing City");
};

const createCity = (req, res) => {
    const CreatedCity = services.CreateCity();
    res.send("Create new City");
};

const updateCity = (req, res) => {
    const updatedCity = services.UpdateCity();
    res.send("Update City");
};

const deleteCity = (req, res) => {
    const deletedCity = services.DeleteCity();
    res.send("Delete City");
}


module.exports = {
    getAllCities,
    getOneCity,
    createCity,
    updateCity,
    deleteCity
};