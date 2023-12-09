const express = require('express');
const cors = require("cors");
const path =require('path');
const _dirname = path.resolve();

const authRouter =require("./routes/auth.js");
const postRouter =require("./routes/post.js");
// import commentRouter from './routes/comment.mjs'
// import feedRouter from './routes/feed.mjs'
// import postRouter from "./routes/post.mjs";

const app = express();
// app.use(express.json()); // body parser
// app.use(cors());

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

//     /static/vscode_windows.exe
// app.use("/static", express.static(path.join(__dirname, "static")));

// app.use(express.static(path.join(__dirname, "static")));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
