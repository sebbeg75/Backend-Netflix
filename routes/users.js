const router = require('express').Router();
const UserController = require('../controllers/UserControllers');

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/profiles',UserController.profiles);




module.exports=router;