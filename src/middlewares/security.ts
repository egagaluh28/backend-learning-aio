import helmet from "helmet";
import cors from "cors";
import express from "express";
import { config } from "../config";

export const securityMiddleware = [
  helmet(), // Mengamankan headers HTTP
  cors(config.cors), // Batasi akses domain sesuai konfigurasi dan dukung kredensial
  express.json(),
  express.urlencoded({ extended: true }),
];
