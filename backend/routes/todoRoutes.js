const express = require("express");
const {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");
const router = express.Router();

router.get("/", getTodo);
router.post("/", addTodo);
router.patch("/", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
