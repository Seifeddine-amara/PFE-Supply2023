const pkgOrderController = require ('../controllers/pkgOrderController');
const {Router} = require('express');
const router = Router();

router.post('/createPkgOrder', pkgOrderController.createPkgOrder);

module.exports = router ;