const expect = require('expect');
const request = require('supertest');

const {Todo} = require('./../models/todo');
const {app} = require('./../server');

beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

describe('POST /todo', () => {
  it ('should add a new todo' , (done) => {
    var text = 'text from post request';
    request(app)
      .post('/todos')
      .send({text:text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
    });
  });

  it('should not add anew todo with invalid', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => {
          done(e);
        })
      })
  });
});