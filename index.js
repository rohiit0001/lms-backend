import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import userRouter from "./routers/userRoute.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

// Connect DB
await dbConnect();


export default app;