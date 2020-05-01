const {Movie} = require('../models/index');
const MovieController = {
    movies(req,res){
        Movie.findAll()
        .then(movies => res.send(movies))
        .catch(err=>{
            console.log(err)
            res.status(500).send({message:'There was a problem to load the movies'})
        })
    },
    film(req,res){
        Movie.create({...req.body})
        .then(product => res.status(201).send(product))
        .catch(err=>{
            console.log(err)
            res.status(500).send({message:'There was a problem to load the movies'})
        })
    },
    genre(req,res){
        let genre = req.query.genre;
        Movie.findAll({ where: { genre: genre}}).then( Movie => {
            res.json(Movie);
        })
    },
    actor(req,res){
        let actor = req.query.actor;
        Movie.findAll({ where: { actor: actor}}).then( Movie => {
            res.json(Movie);
        })
    },
    id(req,res){
        let id = req.params.id;
        Movie.findAll({ where: { id: id}}).then(Movie => {
            res.json(Movie);
        })
    },
    title(req,res){
        let title = req.query.title;
        Movie.findAll({ where: { title: title}}).then(Movie => {
            res.json(Movie);
        })
    }
};
module.exports=MovieController;