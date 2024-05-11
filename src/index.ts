// require('dotenv').config();
import express, { NextFunction, Request, Response, response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import validateEnv from "./utils/validateEnv";

import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import rimsRouter from "./routes/rims.routes";

import tiresRouter from "./routes/tires.routes";
import filterRouter from "./routes/filters.routes";
import ordersRouter from "./routes/order.routes";

import adminRimRouter from "./routes/admin/adminRim.routes";
import adminTireRouter from "./routes/admin/adminTire.routes";
import adminUserRouter from "./routes/admin/adminUser.routes";
import adminOrderRouter from "./routes/admin/adminOrder.routes";

// import nodemailer from 'nodemailer';
// (async function () {
//   const credentials = await nodemailer.createTestAccount();
//   console.log(credentials);
// })();

validateEnv();

const prisma = new PrismaClient();
const app = express();

async function bootstrap() {
  // TEMPLATE ENGINE
  app.set("view engine", "pug");
  app.set("views", `${__dirname}/views`);

  // MIDDLEWARE

  // 1.Body Parser
  app.use(express.json({ limit: "10kb" }));

  // 2. Cookie Parser
  app.use(cookieParser());

  // 2. Cors
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  // 3. Logger
  if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

  // ROUTES
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/rims", rimsRouter);
  app.use("/api/filters", filterRouter);
  app.use("/api/tires", tiresRouter);
  app.use("/api/orders", ordersRouter);

  // Admin routs

  app.use("/api/admin/rims", adminRimRouter);
  app.use("/api/admin/tires", adminTireRouter);
  app.use("/api/admin/users", adminUserRouter);
  app.use("/api/admin/orders", adminOrderRouter);

  // Testing
  app.get("/api/healthchecker", (_, res: Response) => {
    return res.status(200).json({
      status: "success",
      message: "Welcome to NodeJs with Prisma and PostgreSQL",
    });
  });

  // UNHANDLED ROUTES
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      res.status(404).json({
        message: `Route ${req.originalUrl} not foundlogin`,
      })
    );
  });

  // GLOBAL ERROR HANDLER
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    err.status = err.status || "error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  });

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server on port: ${8000}`);
  });
}

bootstrap()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// postgres=# ALTER USER postgres WITH PASSWORD 'pass123';
// postgres=# CREATE USER user_1 WITH PASSWORD 'pass123';
