const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("hello backend");
});

app.listen(port, () => {
  console.log(`伺服器已連上 http://localhost:${port}`);
});
