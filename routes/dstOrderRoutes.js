const dstOrderController = require ('../controllers/dstOrderController');
const {Router} = require('express');
const router = Router();

router.post('/createDstOrder', dstOrderController.createDstOrder);
router.get('/findDstOrderById/:id',dstOrderController.findDstOrderById);
router.delete('/deleteDstOrder/:id',dstOrderController.deleteDstOrder);


module.exports = router ;