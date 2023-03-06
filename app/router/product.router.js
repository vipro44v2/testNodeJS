
module.exports=function(router){
    var productController=require('../controller/product.controller')
    router.get('/product/getAll',productController.getAll)
    router.get('/product/getbyid/:id',productController.getById)
    router.post('/product/add',productController.addProduct)
    router.delete('/product/delete/:id',productController.deleteProduct)
    router.post('/product/update',productController.updateProduct)
}
