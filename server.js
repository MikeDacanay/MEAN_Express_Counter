var express = require("express");
var app = express();
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'})); 

app.listen(8000, function() {
})

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
    // hard-coded user data
    if(!request.session.name){
    	request.session.name=1;
    }else if(request.session.name){
    	request.session.name+=1;
    };
    counter = request.session.name;
    response.render('users',{counter:counter});
})