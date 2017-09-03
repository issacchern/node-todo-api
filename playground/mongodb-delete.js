// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) =>{
  //   console.log(result);
  // })

  //delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then( (result) =>{
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({name: 'Issac'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59ac70d308dd542d1037f916')})
    .then( (result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });

  //db.close();
});
