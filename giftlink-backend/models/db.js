import { MongoClient } from "mongodb";

let client;
let db;

export const connectToDatabase = async () => {
  try {
    if (db) return db; // already connected

    const uri = process.env.MONGO_URL;

    if (!uri) {
      throw new Error("MONGO_URL is not defined in .env file");
    }

    client = new MongoClient(uri);
    await client.connect();

    db = client.db("giftlink"); // your database name
    console.log("MongoDB Connected ✅");

    return db;
  } catch (error) {
    console.error("Database connection failed ❌", error);
    process.exit(1);
  }
};
