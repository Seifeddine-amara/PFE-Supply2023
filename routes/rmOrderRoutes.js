const rmOrderController = require ('../controllers/rmOrderController');
const {Router} = require('express');
const router = Router();

router.post('/createRMOrder', rmOrderController.createRMOrder);

module.exports = router ;