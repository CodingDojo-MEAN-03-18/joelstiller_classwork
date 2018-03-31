// Standard Express load
var express = require("express");
var app = express();
app.listen(8000, function() {
    console.log("listening on port 8000");
  })
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

// Setting up a session.
var session = require('express-session');
app.use(session({secret: 'huf392ujh90f2j92njgh92j-g902j-i9u3hg290-u2938jg0928hg'}));
// Lets route things

app.get('/', function(request, response) {
    response.render('index');
})

app.post('/result', function(request, response) {
    let data = request.body;
    response.render('results', {data});
});