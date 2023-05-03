const rtlFPController = require ('../controllers/rtlFPController');
const {Router} = require('express');
const router = Router();

router.post('/createRtlFP', rtlFPController.createRtlFP);

module.exports = router ;