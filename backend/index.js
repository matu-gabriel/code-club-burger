const express = require("express");
const cors = require("cors");
const uuid = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

const orders = [];

const middleware = (req, res, next) => {
  const { id } = req.params;

  const index = orders.findIndex((order) => order.id === id);
  if (index < 0) {
    return res.status(404).json({ mag: "Pedido não encontrado" });
  }

  req.indexMid = index;
  req.idMid = id;

  next();
};

app.post("/orders", (req, res) => {
  const { name, order, price, status } = req.body;
  const user = { id: uuid.v4(), name, order, price, status };

  orders.push(user);
  return res.status(201).json(user);
});

app.get("/orders", (req, res) => {
  return res.status(200).json(orders);
});

app.delete("/orders/:id", middleware, (req, res) => {
  const index = req.indexMid;

  orders.splice(index, 1);
  return res.status(204).json();
});

app.put("/orders/:id", (req, res) => {
  const id = req.idMid;
  const index = req.indexMid;
  const { name, order, price, status } = req.body;

  const newOrder = { id, name, order, price, status };

  orders[index] = newOrder;

  return res.status(200).json(newOrder);
});

app.patch("/orders/:id", (req, res) => {
  const index = req.indexMid;

  orders[index].status = "Pronto";
  res.json(orders[index]);
});

app.listen(3333, () => {
  console.log("Server rodando");
});
