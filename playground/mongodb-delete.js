const { MongoClient, ObjectID } = require("mongodb");
let obj = new ObjectID();

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log("Unable to connect to database");
  }
  console.log("Connected to the database");
  let collection = db.collection("Todos");

  //* deleteMany
  //   collection.deleteMany({ text: "Something to do" }).then(result => {
  //     console.log("result", result);
  //   });

  //* deleteOne
  //   collection.deleteOne({ text: "Something to do" }).then(result => {
  //     console.log("result", result);
  //   });

  //* findOneAndDelete
  collection
    .findOneAndDelete({ _id: new ObjectID("5c6cab66fd11a4d4ce46a1c2") })
    .then(docs => {
      console.log("docs", docs);
    })
    .catch(e => console.log("error", e));
  db.close();
});
