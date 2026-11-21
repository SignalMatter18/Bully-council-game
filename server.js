"use strict";

const express = require("express");
const path = require("node:path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const publicDirectory = path.join(__dirname, "public");

app.disable("x-powered-by");

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.use(express.static(publicDirectory, {
  extensions: ["html"],
  maxAge: process.env.NODE_ENV === "production" ? "1h" : 0
}));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Bully Council Game is listening on port ${PORT}`);
});
