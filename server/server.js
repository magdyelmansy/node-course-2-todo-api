const express = require('express');
const bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 3000;

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
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send('id is not valid');
  }
  Todo.findById(id).then((todo) => {
    if(!todo) {
      return  res.status(404).send('There Is No Todo');
    }
    res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send('ID is Invalide');
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      return res.status(404).send('Todo Not Deleted');
    }
    return res.status(200).send({todo})
  }, (e) => {
    res.status(400).send();
  })
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


app.listen(port, () => {
  console.log(`Started At Port ${port}`);
});

module.exports = {app};
