const packageController = require ('../controllers/packageController');
const {Router} = require('express');
const router = Router();

router.post('/createPkg', packageController.createPkg);
router.get('/findPkgById/:id',packageController.findPkgById);
router.get('/findPkgByType/:type',packageController.findPkgByType);
router.get('/findPkgByCreator/:creator',packageController.findPkgByCreator);
router.get('/findPkgAll',packageController.findPkgAll);
router.delete('/deletePkgById/:id',packageController.deletePkgById);
router.put('/updatePkgById/:id',packageController.updatePkgById);

module.exports = router ;