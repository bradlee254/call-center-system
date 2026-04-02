import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown database error";
    console.error("MongoDB connection failed:", message);
    process.exit(1);
  }
};

export default connectDB;
