// importar o express para poder inicializar as minhas rotas
const express = require("express");
//importar o controller para acessar as funcoes
const TodolistController = require("./../controllers/todolist.controller");

// inicializa as rotas
const router = express.Router();
// inicializa a classe do controller
const todolistController = new TodolistController();

// [GET] /vagas - Retornar uma lista de vagas
router.get("/", todolistController.getTodos);

router.post("/", (req, res) => {
    res.status(405).send({message: "Recurso não disponível. Tente na rota /add"})
})

//[GET /vagas/:id - retorna um item por id
router.get("/:id", todolistController.getTodoById);

router.post("/add", todolistController.createTodo);

router.put("/:id", todolistController.editTodo);

router.delete("/:id", todolistController.deleteTodo);

module.exports = router;
