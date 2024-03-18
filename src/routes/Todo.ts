import express from "express";
import controller from "../controllers/Todo";

const router = express.Router();

router.post("/create", controller.createTodo);
router.post("/get/:todoId", controller.getTodo);
router.post("/get/", controller.getAllTodo);
router.post("/update/:todoId", controller.updateTodo);
router.post("/delete/:todoId", controller.deleteTodo);

export = router;
