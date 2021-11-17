const TodolistService = require("./../services/todolist.service");

const todolistService = new TodolistService();

class todolistController {
  getTodos = async (req, res) => {
    const listaTodos = await todolistService.findAll();
    res.status(200).send(listaTodos);
  };

  getTodoById = async (req, res) => {
    const todo = await todolistService.findById(req.params.id);
    res.status(200).send(todo);
  };

  createTodo = async (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "ERRO: Corpo vazio" });
    }
    await todolistService
      .create(req.body)
      .then(() => {
        res
          .status(201)
          .send({ message: `Tarefa criada com sucesso!`, data: req.body });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: `Erro no servidor` });
      });
  };

  editTodo = async (req, res) => {
    await todolistService
      .edit(req.params.id, req.body)
      .then(() => {
        res.status(200).send({ message: `Tarefa editada com sucesso` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: `Erro no servidor` });
      });
  };

  deleteTodo = async (req, res) => {
    await todolistService
      .delete(req.params.id)
      .then(() => {
        res.status(200).send({ message: "Tarefa excluída com sucesso" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: `Erro no servidor` });
      });
  };
}

module.exports = todolistController;
