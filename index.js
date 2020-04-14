// code away!
const express = require("express");
const cors = require("cors");
const server = express();
const port = 4008;

server.use(express.json());
server.use(cors());

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
