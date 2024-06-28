const express = require('express');
const router = express.Router();
const { createTodo, getAllTodos, getTodoById, updateTodoById, deleteTodoById } = require('../controllers/todoController');

router.post('/', createTodo);
router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.put('/:id', updateTodoById);
router.delete('/:id', deleteTodoById);

module.exports = router;
