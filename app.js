var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var useragent=require('express-useragent');
var app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(useragent.express());
app.get("/",function(req,res){
    res.send("please visit /api/whoami");
})
app.get('/api/whoami',function(req,res){
    // res.send('hi');
    var ipaddress=req.ip;
    var software=req.useragent.os+ ","+req.useragent.browser;
    var languages=req.acceptsLanguages();
    
    res.json({ipaddress:ipaddress,software:software,language:languages[0]});
})


app.listen(process.env.PORT,process.env.IP,function(){
    console.log('server started');
})