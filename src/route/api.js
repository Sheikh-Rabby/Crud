const express=require('express');
const CrudController=require('../controller/CrudController')


const router=express.Router();



router.post('/Create',CrudController.Create)
router.get('/Read',CrudController.Read)
router.get('/ReadByID/:id',CrudController.ReadByID)
router.post('/Update/:id',CrudController.Update)
router.get('/Delete/:id',CrudController.Delete)


module.exports=router;