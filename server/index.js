import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";
import ListingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
configDotenv();

const app = express();
app.use(cors());

app.use(
  cors({
    origin: "https://harsh-estate-mern.vercel.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
    credentials: true,
  })
);
app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with an error code
  });

app.listen(3000, () => {
  console.log("Server is running :-)");
});

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/listing", ListingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
