const userController =require('../controllers/userController');
const {Router}=require('express');
const router = Router();



router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/findUsrById/:id',userController.findUsrById);
router.get('/findUsrByRole/:role',userController.findUsrByRole);
router.get('/findUsrAll',userController.findUsrAll);
router.delete('/deleteUsrById/:id',userController.deleteUsrById);
router.put('/updateUsrById/:id',userController.updateUsrById);



module.exports=router;
