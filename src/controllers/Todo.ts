import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Todo from "../models/Todo";

const createTodo = (req: Request, res: Response, next: NextFunction) => {
  const { title, desc } = req.body;

  const todo = new Todo({
    _id: new mongoose.Types.ObjectId(),
    title,
    desc,
  });

  return todo
    .save()
    .then((todo) => res.status(201).json({ todo }))
    .catch((error) => res.status(500).json({ error }));
};

const readTodo = (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.params.todoId;

  return Todo.findById(todoId)
    .then((todo) =>
      todo
        ? res.status(200).json({ todo })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Todo.find()
    .then((todo) => res.status(200).json({ todo }))
    .catch((error) => res.status(500).json({ error }));
};

const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    const todoId = req.params.todoId;
}