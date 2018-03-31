module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	//listen to connection even from the client side
	let counter = 0;
	io.sockets.on('connection', function (socket){
		//server listens to "posting_form" event
	 	socket.on("increase_counter", function (data){
	 		//generate a random number
	 		counter += 1;
		  //will emit the data to the client
		  socket.emit('addcounter', {response: counter}); 
		});
		socket.on("reset_counter", function (data){
			counter = 0;
			socket.emit('resetcounter', {response: counter});
		});
	})
};