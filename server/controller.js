const houses = require('./db.json')

module.exports ={
    getHouses: (req,res) =>{
        res.status(200).send(houses)},
    deleteHouse: (req,res) => {
        let index = houses.findIndex(elm => elm.id === +req.params.id)
        houses.splice(index,1)
        res.status(200).send(houses)
    }, 
    createHouse:(req,res) =>{
        let {adress,price,imageURL} = req.body;
        let newHouse={
            id:globalID,
            adress,
            price,
            imageURL:imageURL
        } 
        houses.push(newHouse);
        globalID++;
        res.status(200).send(houses)
    },
    updateHouse:(req,res) => {
        let {type} = req.body;
        let {id} = req.params
        let index = houses.findIndex(elem => elem.id === +req.params.id);
        if(houses [index].price <= 10000 && type === 'minus'){
            houses[index].price = 0;
            res.status(200).send(houses);
        } else if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
        else {
            res.status(400).send('invalid star rating!')
        }
    }

}