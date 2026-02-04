import "module-alias/register";

import express, { json, urlencoded, Response, Request } from "express";
import dotenv from "dotenv";
import createRouter from "express-file-routing";
import { securityMiddleware } from "./middlewares/security";
import { errorHandler } from "./middlewares/errorHandler";
import { config } from "./config";
import path from "path";
import fileUpload from "express-fileupload";

const main = async () => {
  process.title = "TODO App";
  dotenv.config();
  const app = express();

  // app.use(function (req, res, next) {
  //   // Get the origin from the request
  //   const origin = req.headers.origin;

  //   // Allow any origin
  //   res.setHeader("Access-Control-Allow-Origin", origin || "*");
  //   res.setHeader(
  //     "Access-Control-Allow-Methods",
  //     "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  //   );
  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "content-type, authorization",
  //   );
  //   // Only set credentials if we have a specific origin
  //   if (origin) {
  //     res.setHeader("Access-Control-Allow-Credentials", "true");
  //   }

  //   if (req.method == "OPTIONS") {
  //     res.sendStatus(200);
  //   } else {
  //     next();
  //   }
  // });
  const router = express.Router();
  app.use(
    fileUpload({
      limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit for large Excel files
      abortOnLimit: true,
      useTempFiles: false,
    }),
  );
  app.use(securityMiddleware);

  await createRouter(router, {
    directory: path.join(__dirname, "routes"),
  });

  // Middleware untuk menerima json
  app.use(express.json());

  // Middleware untuk form data
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", router);

  app.use(errorHandler);

  const api = {
    ok: (res: Response, message: string) => {
      res.status(200).json({ message });
    },
  };

  app.get("/", (req: Request, res: Response) => {
    api.ok(res, "Hello World");
  });

  app.listen(config.port, () =>
    console.log(`🚀 Server running on http://localhost:${config.port}`),
  );
};

main();
