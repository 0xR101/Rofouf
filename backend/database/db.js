const { MongoClient, ServerApiVersion } = require("mongodb"); // for the database

const uri =
  "mongodb+srv://Rofouf:rofouf123@rofouf.hcc5gvz.mongodb.net/?retryWrites=true&w=majority&appName=Rofouf";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let dbConnection;


module.exports = {
  connectToDb: () => {
    client
      .connect()
      .then((connectedClinet) => {
        dbConnection = connectedClinet.db("admin").command({ ping: 1 });
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!",
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getDb: () => dbConnection,
};
