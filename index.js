const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use("/api",require("./routes/index"))

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });  
});

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`);
});
