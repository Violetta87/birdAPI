const express = require("express");
const { getAll, findById, create, updateById, updateByIdPut, deleteById } = require("./birds");
const app = express();
app.use(express.json());

//get all birds route GET
app.get("/birds", (req, res) =>{
    res.send({message: "Succesfully found birdlist", data : getAll()}); 
});

//findbyID new version route GET
app.get("/birds/:id", (req, res) =>{
    const { id } = req.params
    const birdById = findById(id);
    if(birdById == null){
        res.send({message: "no bird found with id : ", id})
    }
    res.send({message: "Succesfully found :" + id, data: birdById})
});

//create route POST
app.post("/birds", (req, res) => {
    const createBird = create(req.body)
    res.send({message: "New bird has been created", data: createBird});
    
})

//update birds PATCH
app.patch("/birds/:id", (req, res) =>{
    //destructuring - define fields within object. 
    const { name, age, type } = req.body
    const { id } = req.params
    const updateBird = updateById(id, name, age, type)
    res.send({message: id + "has been updated", data: updateBird});
   
})

//delete by id route DELETE
app.delete("/birds/:id", (req, res) =>{
    const {id } = req.params
    const newBirdList = deleteById(id);
    res.send({message: req.params.id + " has been deleted", data: newBirdList})
})

app.listen(8080, (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log("server is running on port : ", 8080)
});

