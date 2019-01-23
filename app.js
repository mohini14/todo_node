const express = require('express');
var todoController = require('./controller/todoController.js') 
const app = express();

todoController(app);

// set up template engine

app.set('view engine', 'ejs');

// static files ignoring routes
app.use(express.static('./public'));

//listen to port
app.listen(3000);
console.log('listening to port 3000')



