const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text : req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todoss) => {
    console.log({todoss});;
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/users', (req, res) => {
  var user = new User({
    email: 'magdyelmansy@gmail.com'
  });
  user.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.send(e)
  });
});


app.listen(3000, () => {
  console.log('Started At Port 3000');
});

module.exports = {app};
