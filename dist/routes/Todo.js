"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Todo_1 = __importDefault(require("../controllers/Todo"));
const router = express_1.default.Router();
router.post("/create", Todo_1.default.createTodo);
router.get("/get/:todoId", Todo_1.default.getTodo);
router.get("/get", Todo_1.default.getAllTodo);
router.patch("/update/:todoId", Todo_1.default.updateTodo);
router.delete("/delete/:todoId", Todo_1.default.deleteTodo);
module.exports = router;
