import { NextFunction, Request, RequestHandler, Response } from 'express';

import { BaseEntityWithId } from '../types/entity-with-id.type';

export const isExist =
  (entityClass: BaseEntityWithId): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const exists = await entityClass.findOneBy({ id });

      if (!exists) {
        return res.status(404).json({ message: `Entity with id '${id}' not found!` });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
