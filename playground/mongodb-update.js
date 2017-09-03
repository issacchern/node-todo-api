// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59ac79c487685d8387b7a2ab')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // })


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59ac736e87685d8387b7a13f')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  })




  //db.close();
});
