import { Router } from "express";
import { registre } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registre);

export default router;