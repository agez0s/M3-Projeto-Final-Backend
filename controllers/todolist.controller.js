const TodolistService = require("./../services/todolist.service");

const todolistService = new TodolistService();

//função que checa individualmente cada campo pra ver se estão de acordo
//também foi criado um novo services para checar se o ID é válido e existe, usando o exists() do mongoose
function checaCampos(corpo) {
  if (
    corpo.titulo == null ||
    corpo.descricao == null ||
    corpo.prazo == null ||
    corpo.prioridade == null ||
    corpo.status == null
  ) {
    return `Campos "titulo", "descricao", "prazo", "prioridade" e "status" não podem estar vazios`;
  }
  if (corpo.prioridade != 0 && corpo.prioridade != 1 && corpo.prioridade != 2) {
    return `Campo "prioridade" incorreto. 0 = Alta, 1 = Média, 2 = Baixa`;
  }
  if (corpo.status != "0" && corpo.status != "1" && corpo.status != "2") {
    return `Campo "status" incorreto. 0 = A fazer, 1 = Fazendo, 2 = Feito`;
  }
  return "ok";
}

class todolistController {
  getTodos = async (req, res) => {
    const listaTodos = await todolistService.findAll();
    res.status(200).send(listaTodos);
  };

  getTodoById = async (req, res) => {
    const exists = await todolistService.exists(req.params.id);
    if (exists) {
      const todo = await todolistService.findById(req.params.id);
      res.status(200).send(todo);
    } else {
      res.status(404).send({ message: "ID não encontrado" });
    }
  };

  createTodo = async (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "ERRO: Corpo vazio" });
    }
    const checagem = checaCampos(req.body);

    if (checagem == "ok") {
      
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
    } else {
      res.status(400).send({ message: checagem });
    }
  };

  editTodo = async (req, res) => {
    const exists = await todolistService.exists(req.params.id);
    if (exists) {
      const checagem = checaCampos(req.body);

      if (checagem == "ok") {
        await todolistService
          .edit(req.params.id, req.body)
          .then(() => {
            res.status(200).send({ message: `Tarefa editada com sucesso` });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send({ message: `Erro no servidor` });
          });
      } else {
        res.status(400).send({ message: checagem });
      }
    } else {
      res.status(404).send({ message: "ID não encontrado" });
    }
  };

  deleteTodo = async (req, res) => {
    const exists = await todolistService.exists(req.params.id);
    if (exists) {
      await todolistService
        .delete(req.params.id)
        .then(() => {
          res.status(200).send({ message: "Tarefa excluída com sucesso" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ message: `Erro no servidor` });
        });
    } else {
      res.status(404).send({ message: "ID não encontrado" });
    }
  };
}

module.exports = todolistController;
