import { Response, Request, NextFunction } from 'express';
import Joi from 'joi';

export const validateReqBody =
  (schema: Joi.ObjectSchema) =>
  ({ body }: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(body);

    if (result.error) {
      return res.status(400).json({ error: `Incorrect data: ${result.error.message}` });
    }

    next();
  };
