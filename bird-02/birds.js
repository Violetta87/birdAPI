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

    findById: function (id){
        const foundBird = birdList.find(bird => bird.id ===id);
        return foundBird;
    },

    create: function (bird){
        const id = uuid.v4();
        bird.id = id;
        birdList.push(bird);
        return birdList
    },

    updateById: function (id, name, age, type){
        const birdToBeUpdated = birdList.find(bird => bird.id ===id);

        if(name) birdToBeUpdated.name = name;
        if(age) birdToBeUpdated.age = age;
        if(type) birdToBeUpdated.type = type;
        return birdToBeUpdated 
    },

    updateByIdPut: function (id, newbird){
        const birdToBeUpdated = birdList.find(bird => bird.id === id);
        const upDatedBird = Object.assign(birdToBeUpdated, newbird)
        return upDatedBird
    },
    
    deleteById: function (id){
        
        let deletedBird = birdList.findIndex(bird => bird.id === id);
        birdList.splice(deletedBird, 1);
        return deletedBird
    }
}