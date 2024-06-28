const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTodo({ title, description, status }) {
    const todo = await prisma.todo.create({
        data: {
            title,
            description,
            status: status || 'PENDING',
        },
    });
    return todo;
}

async function getAllTodos() {
    const todos = await prisma.todo.findMany();
    return todos;
}

async function getTodoById(id) {
    const todo = await prisma.todo.findUnique({
        where: { id: Number(id) },
    });
    return todo;
}

async function updateTodoById(id, { title, description, status }) {
    const todo = await prisma.todo.update({
        where: { id: Number(id) },
        data: {
            title,
            description,
            status,
            updatedAt: new Date(),
        },
    });
    return todo;
}

async function deleteTodoById(id) {
    await prisma.todo.delete({
        where: { id: Number(id) },
    });
}

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById,
};
