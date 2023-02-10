//import express module
const express = require("express");
const app = express();
//import birds list
const birds = require("./birds");

app.get("/bird", (req, res) =>{
    res.send({birdlist : birds.list});  
});

app.get("/bird/:id", (req, res) =>{
    const birdById = birds.findById(req.params.id, birds.list);
    res.send({bird: birdById})
});

app.get("/bird/type/:type", (req, res) =>{
    const birdByType = birds.findByType(req.params.type, birds.list);
    res.send({bird: birdByType})
});


app.listen(8080);

