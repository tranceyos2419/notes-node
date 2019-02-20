const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log("Unable to connect to database");
  }
  console.log("Connected to the database");
  let collection = db.collection("Users");

  collection
    .findOneAndUpdate(
      { _id: new ObjectID("5c6b5c8385897926fa7dca91") },
      {
        $set: {
          name: "Yoshi"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(doc => {
      console.log(doc);
    });

  db.close();
});
