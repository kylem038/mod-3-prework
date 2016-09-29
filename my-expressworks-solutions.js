//JSON Me
// var express = require('express');
// var app = express();
// var fs = require('fs');
//
// app.get('/books', function(req, res){
//     var item = process.argv[3];
//     fs.readFile(item, function(err, data) {
//       try {
//         books = JSON.parse(data);
//       } catch(err) {
//         res.sendStatus(500);
//       }
//       res.json(books);
//     });
// });
//
// app.listen(process.argv[2]);

//What's in query
// var express = require('express');
// var app = express();
//
// app.get('/search', function(req, res){
//     var query = req.query;
//     res.send(query);
// });
//
// app.listen(process.argv[2]);

//Param Pam Pam
// var express = require('express');
// var app = express();
//
// app.put('/message/:id', function(req, res){
//   var id = req.params.id;
//   var string = require('crypto')
//         .createHash('sha1')
//         .update(new Date().toDateString() + id)
//         .digest('hex');
//   res.send(string);
// });
// app.listen(process.argv[2]);

//Stylish CSS
// var express = require('express');
// var app = express();
//
// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));
// app.listen(process.argv[2]);

//Good Old Form
// var express = require('express');
// var app = express();
// var bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({extended: false}));
// app.post('/form', function(req, res) {
//   res.send(req.body.str.split('').reverse().join(''));
// });
// app.listen(process.argv[2]);

//Jade
// var express = require('express');
//     var app = express();
//     app.get('/home', function(req, res) {
//     res.render('index', {
//       date: new Date().toDateString()});
//     });
//     app.set('views', process.argv[3]);
//     app.set('view engine', 'jade');
//     app.listen(process.argv[2]);

//Static
// var express = require('express');
//     var app = express();
//     app.get('/home', function(req, res) {
//       res.end('Hello World!');
//     });
//     app.listen(process.argv[2]);
//     app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

//Hello World
// var express = require('express');
//     var app = express();
//     app.get('/home', function(req, res) {
//       res.end('Hello World!');
//     });
//     app.listen(process.argv[2]);
