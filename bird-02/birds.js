const uuid = require("uuid")

module.exports = {
    birdList: function (){
        return [
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
    },

    create: function (bird){
        const id = uuid.v4();
        bird.id = id;
        birdList().push(bird);
        return birdList()
    },

    findById: function (id){
        const foundBird = birdList().find(bird => bird.id ===id);
        return foundBird;
    },

    updateById: function (id, name, age, type){
        const birdToBeUpdated = birdList().find(bird => bird.id ===id);

        if(name) birdToBeUpdated.name = name;
        if(age) birdToBeUpdated.age = age;
        if(type) birdToBeUpdated.type = type;
        return birdToBeUpdated 
    },
    
    deleteById: function (id){
        let deletedBird = birdList().findIndex(bird => bird.id ===id);
        list.splice(deletedBird, 1);
        return bird.id
    }
}