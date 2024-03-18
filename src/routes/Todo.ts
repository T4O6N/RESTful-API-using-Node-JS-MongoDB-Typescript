import express from "express";
import controller from "../controllers/Todo";

const router = express.Router();

router.post("/create", controller.createTodo);
router.get("/get/:todoId", controller.getTodo);
router.get("/get", controller.getAllTodo);
router.post("/update/:todoId", controller.updateTodo);
router.post("/delete/:todoId", controller.deleteTodo);

export = router;
