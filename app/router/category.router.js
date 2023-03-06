module.exports=function(router){
    var categoryController=require('../controller/category.controller')
    router.get('/category/getAll',categoryController.getAll)
    router.get('/category/getbyid/:id',categoryController.getById)
    router.post('/category/add',categoryController.addCategory)
    router.delete('/category/delete/:id',categoryController.deleteCategory)
    router.post('/category/update',categoryController.updateCategory)
}