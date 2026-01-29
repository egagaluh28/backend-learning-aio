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
  const router = express.Router();
  app.use(
    fileUpload({
      limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit for large Excel files
      abortOnLimit: true,
      useTempFiles: false,
    })
  );
  app.use(securityMiddleware);

  await createRouter(router, {
    directory: path.join(__dirname, "routes"),
  });

  // Middleware untuk menerima json
  app.use(express.json());

  // Middleware untuk form data
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/v1", router);

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
    console.log(`🚀 Server running on http://localhost:${config.port}`)
  );
};

main();
