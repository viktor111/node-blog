const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://viktor:viktor11@cv-app-sdkha.gcp.mongodb.net/blog?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true ,  useUnifiedTopology: true,});


client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Successfully connected to the database");
  client.close();
});

//module.exports = client;
