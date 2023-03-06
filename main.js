var express = require('express')
var app= express()

//cấu hình body parser
var bodyParser=require('body-parser')



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set("view engine","ejs")
app.set("views","./app/views")


app.get("/hello",(req,res)=>{
    res.render("index",{title:"Anh",name:"Vĩ"})
})

require('./app/router/home.router')(app)
require('./app/router/product.router')(app)
require('./app/router/category.router')(app)

app.listen(3000,function(){
    console.log("App dang chay")
})
