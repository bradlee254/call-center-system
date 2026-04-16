import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes";
import testRoutes from "./routes/test.routes";
import connectDB from "./config/db";
import callRoutes from "./routes/call.routes";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/calls", callRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

void startServer();
