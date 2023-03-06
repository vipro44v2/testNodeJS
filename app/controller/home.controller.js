exports.about= function(req,res){
    res.sendFile(__dirname.replace('app\\controller','')+'index.html')
}
