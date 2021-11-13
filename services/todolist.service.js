// importar o nosso model para usar as funcoes do mongo no servico
const Todo = require('./../models/Todo');

class todolistService {
  // vai conectar com o banco de dados e retornar a lista de Todos
  findAll = async () => await Todo.find();

  // vai buscar um unico item no banco de acordo com o seu id
  findById = async (id) => await Todo.findById(id);

  create = async (todo) => {
      return await Todo.create(todo)
  }
  edit = async (id, todo) => {
      return await Todo.updateOne({ _id: id}, todo)      
  }
  delete = async (id) => {
      return await Todo.deleteOne({ _id: id})
  }
}

module.exports = todolistService;