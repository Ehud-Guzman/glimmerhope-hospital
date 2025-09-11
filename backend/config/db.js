// config/db.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

export async function connectDB() {
  try {
    await client.connect();
    // Use the hospital DB here
    db = client.db("glimmerhope-hospital");
    console.log("✅ MongoDB connected to glimmerhope-hospital");
    return db;
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

// Helper to get db instance anywhere
export const getDb = () => {
  if (!db) throw new Error("Database not initialized. Call connectDB first.");
  return db;
};
