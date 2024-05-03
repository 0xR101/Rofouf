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

module.exports = {
  connectToDb: async (cb) => {
    try {
      await client.connect();

      await client.db("admin").command({ ping: 1 });

      console.log(client.db("Rofouf"));

      return cb();
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  },
  getDb: () => client.db("Rofouf"),
};
