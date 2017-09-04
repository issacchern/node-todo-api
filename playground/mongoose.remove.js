const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()

// Todo.findOneAndRemove({_id: '59ace26e87685d8387b7c35a'}).then((todo) =>{
//
// });

Todo.findByIdAndRemove('59ace26e87685d8387b7c35a').then((todo) =>{

  console.log(todo.text);
});
