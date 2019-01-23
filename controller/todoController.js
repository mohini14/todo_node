var bodyParsar = require('body-parser');
var mongoose = require('mongoose');

// coonect to mongo db
mongoose.connect('mongodb://mohini14:mohini14@ds211265.mlab.com:11265/todo_app')


// create a schema
var todoSchema = new mongoose.Schema(
    { item: String });

var TodoModel = mongoose.model('Todo', todoSchema);

var itemOne = TodoModel({ item: 'addMilk' }).save(function (err) {
    if (err) throw err;
    console.log('Item saved in mongo');
})


// var data = [{ item: 'getmilk' },
// { item: 'walkdog' },
// { item: 'Kicksomecoding' }];

// middle ware
var urlencodedParser = bodyParsar.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        console.log("GET");
        TodoModel.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', { todos: data });
        });
    });

    app.post('/todo', urlencodedParser,
        function (req, res) {
            console.log("POST");
            var newTodo = TodoModel(req.body).save(function (err, data) {
                res.json(data);
            })
        });

    app.delete('/todo/:item', function (req, res) {
        console.log("DELETE");
        TodoModel.find({ item: req.params.item.trim() }).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });


}