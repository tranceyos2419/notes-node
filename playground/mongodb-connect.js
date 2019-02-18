const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log("Unable to connect to database");
  }
  console.log("Connected to the database");

  //   db.collection("Todos").insertOne(
  //     {
  //       text: "Something went wrong",
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to insert todo", err);
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  db.collection("Users").insertOne(
    {
      name: "Yoshi",
      age: 23,
      location: "Tomita, Nishiwaki, Hyogo"
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert todo", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );
  db.close();
});
