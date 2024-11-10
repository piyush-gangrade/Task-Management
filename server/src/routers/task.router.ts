import { Router } from "express";
import { addNewTask, deleteTask, getAllTasks, getTask, updateTask } from "../controllers/task.controller";

const taskRouter = Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getTask);
taskRouter.post("/", addNewTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
