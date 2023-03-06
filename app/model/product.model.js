const db=require('../common/connect')
const product = function(product){
    this.id=product.id
    this.name=product.name
}
product.getAll=function(result){
    db.query("Select * from product",function(err,data){
        if(err){
            result(null)
        }
        else{
        result(data)
        }
    })
}
product.getById=function(id,result){
    console.log(id)
    db.query("Select * from product where product_id=?",id,function(err,product){
        console.log(err,product)
        if(err||product.length==0){
            result(null)
        }
        else{
        result(product[0])
        }
    })
}
product.deleteById=function(id,result){
    console.log(id)
    db.query("Delete from product where product_id=?",id,function(err,product){
        if(err){
            result(null)
        }
        else{
        result("Xoá sản phẩm có id = "+id+" thành công")
        }
    })
}
product.create=function(data,result){
    db.query("Insert into product set ?",data,function(err,product){
        if(err){
            result(null)
        }
        else{
        result({id:product.insertId,...data})
        }
    })
}
product.update=function(data,result){
    db.query("Update product set product_name=?,price=?,image=?,category_id=? where product_id=?",[data.product_name,data.price,data.image,data.category_id,data.product_id],function(err,product){
        if(err){
            result(null)
        }
        else{
        result("Cập nhật sản phẩm có id = "+data.product_id+" thành công")
        }
    })
}
module.exports=product