export const config = {
  port: process.env.PORT || 4358,
  databaseUrl: process.env.DATABASE_URL_1 || "",
  jwtSecret: process.env.JWT_SECRET || "supersecret",
  csrfSecret: process.env.CSRF_SECRET || "randomsecret",
  aesSecret: process.env.AES_SECRET || "superstrongaeskey123456789",
  cors: {
    // Allow multiple origins (comma-separated). Include shell (4200) and micro app (4201) by default.
    origin: (
      process.env.CORS_ORIGIN || "http://localhost:4200,http://localhost:4202"
    ).split(","),
    credentials: true,
  },
  emailApiUrl:
    process.env.EMAIL_API_URL ||
    "https://myapps.aio.co.id/aioservice-api/api/v1/apps/email/send",
  apiHostUrl: process.env.API_HOST_URL || "http://localhost:4356/api/v1",
};
