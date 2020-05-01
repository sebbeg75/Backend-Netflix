const router = require('express').Router();
const MovieController = require('../controllers/MovieControllers');

router.post('/Film',MovieController.film);
router.get('/Movies',MovieController.movies);
router.get('/Title',MovieController.title);
router.get('/Genre',MovieController.genre);
router.get('/Actors',MovieController.actor);
router.get('/Movies/:id',MovieController.id);




module.exports=router;