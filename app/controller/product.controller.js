var product=require('../model/product.model')
exports.getAll=function(req,res){
    product.getAll(function(data){
        // res.send({product:data})
        res.render("index",{product:data})
    })    
 }
exports.addProduct=function(req,res){
    var data=req.query;
    console.log(data);
    product.create(data,function(response){
        res.send({result:response})
    })
}
exports.getById=function(req,res){
     product.getById(req.params.id,function(response){
        //  res.send(response)
         res.render("index",response)
     })

}
exports.deleteProduct=function(req,res){
    product.deleteById(req.params.id,function(response){
        res.send({result:response})
    })
}
exports.updateProduct=function(req,res){
    var data=req.body;
    product.update(data,function(response){
        res.send({result:response})
    })
}