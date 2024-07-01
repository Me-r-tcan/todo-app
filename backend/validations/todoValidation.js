const Joi = require('joi');
const TODO_STATUSES = require("../constants/todoStatuses");

const todoCreateSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid(...Object.keys(TODO_STATUSES)),
});

const todoUpdateSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    status: Joi.string().valid(...Object.keys(TODO_STATUSES)),
});

module.exports = {
    todoCreateSchema,
    todoUpdateSchema
};