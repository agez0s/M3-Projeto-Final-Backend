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
  exists = async (id) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return false;
    }

    const existe = await Todo.exists({ _id: id });
    return existe;
  };
}

module.exports = todolistService;
