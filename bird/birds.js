module.exports = {
    list:[
        {
            id: 1,
            name: "Miki",
            age: 2,
            type: "due"
        }, 
        {
            id: 2,
            name: "Thomas",
            age: 3,
            type: "krage"
        }
    ],

    findById: function (id, list){
        for(bird of list){
            if(bird.id == id){
                return bird;
            }else{
                return `cannot find bird with id ${id}`
            }
        }
    },

    findByType: function (type, list){
        for(bird of list){
            if(bird.type == type)
            return bird;
            else{
                return `cannot find type ${type}`
            }
        }
        
    }
}


