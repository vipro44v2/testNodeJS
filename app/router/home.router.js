 
 module.exports=function(router){
var homeController=require ('../controller/home.controller')
// router.get('/json', homeController.json)
router.get('/about',homeController.about)
 }