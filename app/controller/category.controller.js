var category=require('../model/category.model')

exports.getAll=function(req,res){
    category.getAll(function(data){
        res.send({result:data})
    })    
 }
 exports.getById=function(req,res){
    category.getById(req.params.id,function(response){
        res.send({result:response})
    })
}
exports.addCategory=function(req,res){
    var data=req.query['name'];
    category.create(data,function(response){
        res.send({result:response})
    })
}
exports.deleteCategory=function(req,res){
    category.deleteById(req.params.id,function(response){
        res.send({result:response})
    })
}
exports.updateCategory=function(req,res){
    var data=req.query;
    console.log(data)
    category.update(data,function(response){
        res.send({result:response})
    })
}