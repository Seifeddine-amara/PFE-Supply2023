const dstFPController = require ('../controllers/dstFPController');
const {Router} = require('express');
const router = Router();

router.post('/createDstFP', dstFPController.createDstFP);

module.exports = router ;