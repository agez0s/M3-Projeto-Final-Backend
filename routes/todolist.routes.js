const express = require("express");

const TodolistController = require("./../controllers/todolist.controller");

const router = express.Router();
const todolistController = new TodolistController();

router.get("/", todolistController.getTodos);

//pega se tentar dar GET na rota /add
router.get("/add", (req, res) => {
  res.status(405).send({ message: "Recurso não disponível nesta rota."})
})

router.get("/:id", todolistController.getTodoById);

/*
Desliguei essas rotas para evitar deface

router.post("/add", todolistController.createTodo);

router.put("/:id", todolistController.editTodo);

router.delete("/:id", todolistController.deleteTodo);

daqui em diante, são rotas para evitar erros e tentar direcionar o usuário */

router.post("*", (req, res) => {
  res
    .status(405)
    .send({ message: "Recurso não disponível. Tente na rota /add" });
});

router.delete("*", (req, res) => {
  res
    .status(405)
    .send({ message: "Recurso não disponível." });
});

router.put("*", (req, res) => {
  res
    .status(405)
    .send({ message: "Recurso não disponível." });
});

router.get("*", (req, res) => {
  res.status(404).send({ message: "Recurso não encontrado" });
});

module.exports = router;
