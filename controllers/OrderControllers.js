const {Order,User,Movie} = require('../models/index')
const OrderController={
    order(req,res){
        Order.create({...req.body})
        .then(Order => res.status(201).send(Order))
        .catch(err=>{
            console.log(err)
            res.status(500).send({message:'Ha habido un problema al cargar los productos'})
        })
},
orders(req,res){
    Order.findAll({
        include:[User,Movie]
    })
    .then(Order => res.send(Order))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
}
};
module.exports=OrderController;