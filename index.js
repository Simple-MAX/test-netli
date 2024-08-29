const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use("/", express.static("public"));

export const handler = serverless(app);
