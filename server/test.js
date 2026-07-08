
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://alumniadmin:Alumni%4012345@cluster0.h2xncs5.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected!");
  } catch (err) {
    console.error(err);
  }
}

run();