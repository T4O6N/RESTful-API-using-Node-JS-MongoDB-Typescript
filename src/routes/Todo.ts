const express = require("express");
import controller from "../controllers/Todo";

const router = express.Router();

router.post("/create", controller.createTodo);
router.get("/get/:todoId", controller.getTodo);
router.get("/get", controller.getAllTodo);
router.patch("/update/:todoId", controller.updateTodo);
router.delete("/delete/:todoId", controller.deleteTodo);

export = router;
