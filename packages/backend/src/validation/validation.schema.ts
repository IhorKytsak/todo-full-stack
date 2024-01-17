import Joi from 'joi';

export const todoCreateValidationSchema = Joi.object({
  title: Joi.string().min(3).max(25).required(),
  description: Joi.string().min(5).max(100).required(),
  isCompleted: Joi.boolean().required(),
  isPrivate: Joi.boolean().required()
});

export const todoUpdateValidationSchema = Joi.object({
  title: Joi.string().min(3).max(25),
  description: Joi.string().min(5).max(100),
  isCompleted: Joi.boolean(),
  isPrivate: Joi.boolean()
});