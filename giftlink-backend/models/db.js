import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export async function connectToDatabase() {
  await client.connect();   // 👈 THIS LINE IMPORTANT
  return client.db("giftlink");
}
