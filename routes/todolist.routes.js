const express = require("express");

const TodolistController = require("./../controllers/todolist.controller");

const router = express.Router();
const todolistController = new TodolistController();

router.get("/", todolistController.getTodos);

router.get("/:id", todolistController.getTodoById);

router.post("/add", todolistController.createTodo);

router.put("/:id", todolistController.editTodo);

router.delete("/:id", todolistController.deleteTodo);

router.post("*", (req, res) => {
  res
    .status(405)
    .send({ message: "Recurso não disponível. Tente na rota /add" });
});

router.get("*", (req, res) => {
  res.status(404).send({ message: "Recurso não encontrado" });
});

module.exports = router;
