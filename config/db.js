import mongoose from "mongoose";

let isConnected = false;

export const db = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGO_URL;
    if (!mongoUri) {
      console.warn("MongoDB connection string is missing in environment variables (MONGO_URI or MONGO_URL)");
      return;
    }
    await mongoose.connect(mongoUri);
    isConnected = true;
    console.log("database connected");
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
};
