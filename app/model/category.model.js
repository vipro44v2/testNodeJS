const db=require('../common/connect')
const category = function(category){
    this.id=category.id
    this.name=category.name
}

category.getAll=function(result){
    db.query("Select * from category",function(err,data){
        if(err){
            result(null)
        }
        else{
        result(data)
        }
    })
}
category.getById=function(id,result){
    console.log(id)
    db.query("Select * from category where category_id=?",id,function(err,category){
        console.log(err,category)
        if(err||category.length==0){
            result(null)
        }
        else{
        result(category[0])
        }
    })
}
category.deleteById=function(id,result){
    console.log(id)
    db.query("Delete from category where category_id=?",id,function(err,category){
        if(err){
            result(null)
        }
        else{
        result("Xoá danh mục có id = "+id+" thành công")
        }
    })
}
category.create=function(data,result){
    db.query("Insert into category(category_name) values(?) ",data,function(err,category){
        if(err){
            result(null)
        }
        else{
        result("Thêm thành công")
        }
    })
}
category.update=function(data,result){
    db.query("Update category set category_name=? where category_id=?",[data.category_name,data.category_id],function(err,category){
        if(err){
            result(null)
        }
        else{
        result("Cập nhật sản phẩm có id = "+data.category_id+" thành công")
        }
    })
}
module.exports=category