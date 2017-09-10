var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(session({secret: 'codingdojorocks'})); 

// use it!
app.use(bodyParser.urlencoded({extended: true}));
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

app.post('/add2', function (request, res){
    request.session.name+=1;
    res.redirect('/');
});

app.post('/reset', function (request, res){
    delete request.session.name;
    res.redirect('/');
});