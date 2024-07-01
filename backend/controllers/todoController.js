const todoService = require('../services/todoService');
const { todoCreateSchema, todoUpdateSchema } = require('../validations/todoValidation');

async function createTodo(req, res) {
    const { error } = todoCreateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
}

async function getAllTodos(req, res) {
    const todos = await todoService.getAllTodos();
    res.json(todos);
}

async function getStatuses(req, res) {
    const todoStatuses = todoService.getStatuses();
    res.json(todoStatuses);
}

async function getTodoById(req, res) {
    const { id } = req.params;
    const todo = await todoService.getTodoById(id);

    if (!todo) {
        return res.status(404).json({ error: 'TODO item not found' });
    }

    res.json(todo);
}

async function updateTodoById(req, res) {
    const { id } = req.params;

    const { error } = todoUpdateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const todo = await todoService.updateTodoById(id, req.body);
    res.json(todo);
}

async function deleteTodoById(req, res) {
    const { id } = req.params;

    await todoService.deleteTodoById(id);
    res.status(200).end();
}

module.exports = {
    createTodo,
    getStatuses,
    getAllTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById,
};
