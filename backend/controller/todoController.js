const Todo = require("../model/todoSchema");

const addTodo = async (req, res) => {
  const { name } = req.body;
  try {
    const todo = await Todo.create({ name });
    res.status(201).json({
      message: "Todo added successfully",
      todo: {
        name: todo.name,
        id: todo._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding todo, please try again later!",
    });
  }
};

const getTodo = () => {};

const updateTodo = () => {};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete({ _id: id });
    console.log(todo);
    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting todo, please try again later!",
    });
  }
};

module.exports = { addTodo, getTodo, updateTodo, deleteTodo };
