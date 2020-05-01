const router = require('express').Router();
const OrderController = require('../controllers/OrderControllers');

router.post('/Order',OrderController.order);
router.get('/Compras',OrderController.orders);




module.exports=router;