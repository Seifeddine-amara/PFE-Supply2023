const rtlOrderController = require ('../controllers/rtlOrderController');
const {Router} = require('express');
const router = Router();

router.post('/createRtlOrder', rtlOrderController.createRtlOrder);
router.get('/findRtlOrderById/:id',rtlOrderController.findRtlOrderById);
router.delete('/deleteRtlOrder/:id',rtlOrderController.deleteRtlOrder);


module.exports = router ;