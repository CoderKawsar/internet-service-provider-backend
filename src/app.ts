import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import routes from "./app/routes";
import config from "./config";
import rateLimit from "express-rate-limit";

const app: Application = express();

// cors middlewire
app.use(
  cors({
    origin: config.frontend_url,
    credentials: true,
  })
);
app.use(cookieParser());

// parser middlewires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// limit request limit on refresh token route
app.use(
  "/api/v1/users/refresh-token",
  rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests per minute
    message: "Too many requests, please try again later",
  })
);

// use route
app.use("/api/v1", routes);

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
