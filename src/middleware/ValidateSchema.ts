import joi, { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import Logging from "../library/Logging";
import { ITodo } from "../models/Todo";

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (error) {
      Logging.error(error);
      return res.status(402).json({ error });
    }
  };
};

export const Schemas = {
  todo: {
    create: joi.object<ITodo>({
      title: joi.string().required(),
    }),
    update: joi.object<ITodo>({
      title: joi.string().required(),
    }),
  },
};
