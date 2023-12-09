// import express from "express";
// import cors from "cors";
// import path from "path";
// const __dirname = path.resolve();

// import authRouter from "./routes/auth.mjs";
// // import commentRouter from './routes/comment.mjs'
// // import feedRouter from './routes/feed.mjs'
// import postRouter from "./routes/po/st.mjs";

// const app = express();
// app.use(express.json()); // body parser
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Welcome to my server!");
// });

// /api/v1/login
// app.use("/api/v1", authRouter);

// app.use((req, res, next) => {
//   // JWT
//   let token = "valid";
//   if (token === "valid") {
//     next();
//   } else {
//     res.status(401).send({ message: "invalid token" });
//   }
// });

// app.use("/api/v1", postRouter); // Secure api

// // //     /static/vscode_windows.exe
// // app.use("/static", express.static(path.join(__dirname, "static")));

// // app.use(express.static(path.join(__dirname, "./web/build")));

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Example server listening on port ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const path = require("path");

const __dirname = path.resolve();

const authRouter = require("./routes/auth.js");
const postRouter = require("./routes/post.js");

const app = express();
app.use(express.json()); // body parser
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

// /api/v1/login
app.use("/api/v1", authRouter);

app.use((req, res, next) => {
  // JWT
  let token = "valid";
  if (token === "valid") {
    next();
  } else {
    res.status(401).send({ message: "invalid token" });
  }
});

app.use("/api/v1", postRouter); // Secure api

// // /static/vscode_windows.exe
// app.use("/static", express.static(path.join(__dirname, "static")));

// app.use(express.static(path.join(__dirname, "./web/build")));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});