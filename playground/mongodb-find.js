// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
let obj = new ObjectID();
console.log("objectID", obj);

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log("Unable to connect to database");
  }
  console.log("Connected to the database");
  let collection = db.collection("Todos");

  collection
    .find({ _id: new ObjectID("5c6b8834fd11a4d4ce465cb2") })
    .count()
    .then(docs => {
      console.log(`Count ${JSON.stringify(docs, undefined, 2)}`);
    })
    .catch(e => console.log("error", e));
  db.close();
});
