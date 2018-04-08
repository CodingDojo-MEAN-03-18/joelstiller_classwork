const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/animal_dashboard');

const animalSchema = new mongoose.Schema({
  name: String,
  type: String,
  food: String
});

const Animals = mongoose.model('animals', animalSchema);

// Point server to views
app.set('views', path.join(__dirname, 'views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

// Here are our routes!

// Index Page
app.get('/', function(req, res) {
    Animals.find({}, function(err, animals) {
        if (err) { console.log(err); }
        res.render('index', {animals: animals});
    });
});
// New Animal form.
app.get('/animals/new', function(req, res) {
    res.render('new');
});
// Create a new animal
app.post('/animals', function(req, res) {
  Animals.create(req.body, function(err) {
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Get one animal.
app.get('/animals/:id', function (req,res) {
    Animals.find({_id: req.params.id}, function(err,animal) {
        if (err) { console.log(err);}
        res.render('show',{animal: animal[0]});
    });
});
// Edit Page
app.get('/animals/:id/edit/', function(req, res){
    Animals.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('edit', { animal: response[0] });
    })
  });
// Update
app.post('/animals/:id', function(req, res){
    Animals.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
});

// Delete
app.post('/:id/destroy', function(req, res){
    Animals.remove({ _id: req.params.id }, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
    });
});
// END OF ROUTING...

// Setting our Server to Listen on Port: 8000
app.listen(port, function() {
    console.log("listening on port " + port);
})