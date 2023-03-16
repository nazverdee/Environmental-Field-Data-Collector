//AKA index.js

const express = require('express');
const Router = require('./route.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/cities", Router);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`);  //console.log
});