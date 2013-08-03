/**********************************************************************
 * Module dependencies.
**/

var http = require('http')
	, express = require('express');



/**********************************************************************
 * Configure Express.
**/
var app = express();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(app.router);
	app.use(express['static'](__dirname + '/public'));
});


/**********************************************************************
 * Routing.
**/


app.get('/', function(req, res, next){
	res.render('home');
});


/**********************************************************************
 * Listen.
**/

var port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log("Listening on " + port);
});
