const Joi = require('joi');

const todoCreateSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid('PENDING', 'IN_PROGRESS', 'COMPLETED'),
});

const todoUpdateSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    status: Joi.string().valid('PENDING', 'IN_PROGRESS', 'COMPLETED'),
});

module.exports = {
    todoCreateSchema,
    todoUpdateSchema
};