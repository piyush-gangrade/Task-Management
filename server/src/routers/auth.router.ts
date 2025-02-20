import { Router } from "express";
import { login, registre } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registre);
router.post("/login", login);

export default router;