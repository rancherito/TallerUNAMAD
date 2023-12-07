const route = require("express").Router();

route.get("/clientes", (req, res) => {
  res.json({
    id: 1,
    name: "patrcia",
    description: "una loca descripcion",
    age: 32,
  });
});

route.get("/pato", (req, res) => {
    res.send("<i>IM A DUCK</i>")
  });
  

module.exports = route