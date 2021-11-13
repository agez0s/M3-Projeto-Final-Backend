const Todo = require("./../models/Todo");

class todolistService {
  findAll = async () => await Todo.find();

  findById = async (id) => await Todo.findById(id);

  create = async (todo) => {
    return await Todo.create(todo);
  };
  edit = async (id, todo) => {
    return await Todo.updateOne({ _id: id }, todo);
  };
  delete = async (id) => {
    return await Todo.deleteOne({ _id: id });
  };
}

module.exports = todolistService;
