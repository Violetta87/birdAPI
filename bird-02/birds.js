const uuid = require("uuid")

let birdList = [
    {
        id: uuid.v4(),
        name: "Miki",
        age: 2,
        type: "due"
    }, 
    {
        id: uuid.v4(),
        name: "Thomas",
        age: 3,
        type: "krage"
    }
]

module.exports = {
    getAll: function(){
        return birdList
    },

    create: function (bird){
        const id = uuid.v4();
        bird.id = id;
        birdList.push(bird);
        return birdList
    },

    findById: function (id){
        const foundBird = birdList.find(bird => bird.id ===id);
        return foundBird;
    },

    updateById: function (id, name, age, type){
        const birdToBeUpdated = birdList.find(bird => bird.id ===id);

        if(name) birdToBeUpdated.name = name;
        if(age) birdToBeUpdated.age = age;
        if(type) birdToBeUpdated.type = type;
        return birdToBeUpdated 
    },
    
    deleteById: function (id){

        console.log(birdList)
        console.log(id)
        let deletedBird = birdList.findIndex(bird => bird.id === id);
        birdList.splice(deletedBird, 1);
        return deletedBird
    }
}