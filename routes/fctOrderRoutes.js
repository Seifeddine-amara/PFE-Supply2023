const fctOrderController = require ('../controllers/fctOrderController');
const {Router} = require('express');
const router = Router();

router.post('/createFctOrder', fctOrderController.createFctOrder);
router.get('/findFctOrderById/:id',fctOrderController.findFctOrderById);
router.delete('/deleteFctOrder/:id',fctOrderController.deleteFctOrder);


module.exports = router ;