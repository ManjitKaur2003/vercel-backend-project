import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import categoryRouter from "./routes/category.routes.js";
import budgetRouter from "./routes/budget.routes.js";
import purchaseRouter from "./routes/purchase.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { db } from "./config/db.js";

const app = express();

//  config:
dotenv.config();

// Ensure DB connection for serverless cold-starts & long-running server
db();

app.use(async (req, res, next) => {
  await db();
  next();
});

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
].filter(Boolean);

//  middlewares:
app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps, postman, direct browser requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.length === 0) return callback(null, true);

      const cleanOrigin = origin.replace(/\/$/, "");
      const isAllowed = allowedOrigins.some(
        (allowed) => allowed.replace(/\/$/, "") === cleanOrigin
      );

      if (isAllowed) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

//  health / root route:
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Expense Tracker Backend API is running",
    endpoints: [
      "/api/auth",
      "/api/category",
      "/api/budget",
      "/api/purchase",
      "/api/dashboard",
    ],
  });
});

//  routes:
app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/budget", budgetRouter);
app.use("/api/purchase", purchaseRouter);
app.use("/api/dashboard", dashboardRouter);

export default app;
