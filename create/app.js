const express = require("express");
const app = express();
const PORT = 5200;

app.get("/get.product", (req, res) => {
  res.json({ msg: "product retrieved" });
});

app.listen(PORT, (req, res) => {
  console.log(`APP listening to port ${PORT}`);
});0
