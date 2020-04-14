// code away!
const express = require("express");
const cors = require("cors");
// const logger = require("./middleware/logger");

const postsRouter = require("./posts/postRouter");
const userRouter = require("./users/userRouter");

const server = express();
const port = 4008;

server.use(express.json());
server.use(cors());

// server.use(logger({ options: "long" }));

// server.use("/posts", postRouter);
server.use("/users", userRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
