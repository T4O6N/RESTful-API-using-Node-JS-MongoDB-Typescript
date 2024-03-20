import express from "express";
import controller from "../controllers/Todo";
import { Schemas, ValidateSchema } from "../middleware/ValidateSchema";

const router = express.Router();

router.post("/create", ValidateSchema(Schemas.todo.create), controller.createTodo);
router.get("/get/:todoId", controller.getTodo);
router.get("/get", controller.getAllTodo);
router.patch("/update/:todoId", ValidateSchema(Schemas.todo.update), controller.updateTodo);
router.delete("/delete/:todoId", controller.deleteTodo);

export = router;
